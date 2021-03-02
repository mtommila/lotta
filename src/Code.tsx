import React from 'react';
import Crypto from 'crypto';
import { Link } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';
import translate from './translate';
import styles from './Code.module.css';

const Code = () => {
  const [message, setMessage] = React.useState('');

  const codes: { [key: string]: string } = {
    'b54106cabb0b0cbd6678c7c9db883e3c980c3200bf2c5c8937a629df96316f71': '7d6d373abe6bcaa6d4567cae0299d9873474a38f5fa63b4872711376e1586ea3490d3817b925f9e697e4ec34191b9601eb488b3dbc3103b4166e9ff87b9435ace04c7095d5031e701e7bf5c1ba98f803d068915ee494d696be15dd3a6d0b2cb9234060467586cfd6a5ca1fac1175a95023e728f0a8827515e719bd8711b292f88caaf6043b177dd8a3b3f73e712a98ccff61d3e274cdf23a5cb3a59c2bf4fa6bc9c0f55c3a5182d50140a9124e20ded58dd8f863429f8d99a4c00a60a68e5657c36c73f367731196c05cde3cda279cde97eff4d50b952c960f31bc17b458aae7400e8b258f8930e006bc8721648c425ad8d61dff4bb0c94f6655156e1d1458d64c19fe6003128752f3edb2d5cf1cf3968192cf62d10c5f794c371f3e24acabc6387c5a71660ac02c68fd3f305a6a68b9f5d0ccc290422718ab60096467e39151cf464ebd1a56905156e536b873aa66a70aad7f8b753503a812f22c04b633c1713dc5457caeb6edca5dce4c5c3014108c635060edf53d8293ef873ad9a25f6dbde1356f92736041c6a0634170a79cb82ce5716427d304855edb27a2da6ba897bb0bb6c43eb278a2bdcac3485efc3039eb5223b5e5a0162fe0cd7a1ae0740be433e10766b33d09873fae60bf03a5120a9ab3c5dfc3da5698b2d717ff86c973a55db5a7f3370c549efa11c658195c98fbc6674a9445e0998812479bc96413c2ce090b9855ec98b72f499c648efccca1f6c0b8ff087b863f43ce0aaf6bc9263a7e5dd5981a87174b665fa0ee4b494abc36e208659b02982e493a64798e1f1c73367bc3b58b1b1c84253408f311b419650c07ec1edbca9cd0e780fb9efd3a6c10275f499ec3d0c03d1f3f1370e6033ef4353acc9d8c4a153d7e9d2e9cbaeec347ed80d8e063a228c01b35f21415e05299b383dbdb09147c6de09cc4dcd21f640d4172d50c4d03de72a19f0c8f9911740d725a31c82b2a66325c2dcc34dd67fb493e7885bce90a177ad752b43b06266d728169a0f4830e359e24670bec8ddaf15ea4cde6e2650bb77c3ee6cd6aebc06be22498736dec905b77ba3f89f1c4bb9d27a4ff6c388af2d75eb9f6642c0ce898aaca09b61dbbddc051b093e70da9b0f271a22b9081025eaf3081b54e7254fa03dd6d1d7cb310d07817b40708bc4dd2213691c0957e0facc23f6bfb26d9ecf94071cba2d3ff644251a994d649e0009c99b9842ca73793d1e7578a50bc0099bd3b94b7d164a995c418dbb6e00404255741c00d5a26e8859244195642f024a32376cb84433a5c4c103333ce0fcc35b54d63392ee4b2e811d034f55aba0fbcb25efb6da0c4b97d7be1517d1d48968f4495c051de35299901051a1afa6b84c430911ec8f982a5921db6c640f6ef3585dc48a6bead7e93ee8a16acc4865a2413e6753cdaf27fa07bd62c5d5d2f951a11a1fd930d2b1f2e6a75b409d539b6db367b09515014beeed9f6719841865b60d0b9d37aa8777c13f63f0472ff862b96e5af904ea865cb1c31932d3a3ee408e28ecbe145b1dd8f02f285445bb069fff431bc115d47fd0255aecdd63ba3ffbeecf74e46692102c99828409c24dd5e4772a9a721ce302e74df12e86a647fec1fa919c331746274bfc8510989989bfb208e12c287ec37570efd82754d7333beb9a5080b95a6623c10ed571c21c2570dc2f72db5b34c46e558bf5404a1f25a2e0d0c512a24bae906160688da86a3492a82d508de2e8a0d5f27038d397271a5c3b7a9379178076d71510429f3abc4af868d7aaeadaa4bad412a8d7db0317421d2f216a692bc5840f6cd7b315b302bf38af79867e458b1ac5758dd29c8c4173dbd8f56b278b219093ecb3a153e5fc4b3279169f8f5b7a912cc17b8d825fb025c8e0b51e7db981c22c69bad7e91fbc23e99010c300307201bd88c717faa1564bbcfce3ca2c79ee867bd03c6f85882df559c8e691b7dd3abb98d7be59b3c79cd4ac7be416d4cbf5f6dd019a44a05d779513a5e1f8342d8d6f2a4bea3eff880d1812c0ff3fb87e9c4d86b7eb0e40d2f58046e15aa70783b5b025555f7c20e3c42c3f2ae74786a2903dd05',
    'cb8379ac2098aa165029e3938a51da0bcecfc008fd6795f401178647f96c5b34': '3ad4ac09fb36f55cca3d1b7c70b89122001fafeed869614aaa4be4f7118db20ad80236ace0',
  };

  function checkCode(value: string) {
    value = value.toLowerCase();
    const hash = Crypto.createHash('sha256').update(value).digest('hex');
    const secret = codes[hash];
    if (secret) {
      while (value.length < 32) {
        value += value;
      }
      const key = new TextEncoder().encode(value).slice(0, 32);
      setMessage(Crypto.createDecipheriv('aes-256-gcm', key, hash).update(secret, 'hex').toString());
    }
  }

  return (
    <div className={styles.code}>
      {
        message.length > 0 ?
          <div className={styles.popup}>
            <div className={styles.header}>
              <span className={styles.close} onClick={() => setMessage('')}>×</span>
            </div>
            <div className={styles.message} dangerouslySetInnerHTML={{__html: message}}/>
          </div>
          :
          ''
      }
      <input className={styles.code} onChange={(event) => checkCode(event.target.value)}/>
    </div>
  );
};

export default Code;
