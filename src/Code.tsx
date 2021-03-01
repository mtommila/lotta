import React from 'react';
import Crypto from 'crypto';
import { Link } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';
import translate from './translate';
import './Code.css';

const Code = () => {
  const [message, setMessage] = React.useState('');

  const codes: { [key: string]: string } = {
    'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad': '7c7bb3ced73d4bdbadda9f79399775cfa39667e8b10dd58a67e3924ef4ea99abe29138c677387279795779a260f0c972',
    'cb8379ac2098aa165029e3938a51da0bcecfc008fd6795f401178647f96c5b34': '3ad4ac09fb36f55cca3d1b7c70b89122001fafeed869614aaa4be4f7118db20ad80236ace0',
  };

  function checkCode(value: string) {
    value = value.toLowerCase();
    const hash = Crypto.createHash('sha256').update(value).digest('hex');
    const secret = codes[hash];
    if (secret) {
      const bytes = secret;
      let key = value;
      while (key.length < 32) {
        key += key;
      }
      key = key.substring(0, 32);
      setMessage(Crypto.createDecipheriv('aes-256-gcm', key, hash).update(bytes, 'hex').toString());
    }
  }

  return (
    <div className="code">
      {
        message.length > 0 ?
          <div className="popup">
            <div className="header">
              <span className="close" onClick={() => setMessage('')}>×</span>
            </div>
            <div className="message" dangerouslySetInnerHTML={{__html: message}}/>
          </div>
          :
          ''
      }
      <input className="code" onChange={(event) => checkCode(event.target.value)}/>
    </div>
  );
};

export default Code;
