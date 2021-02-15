import React from 'react';
import Crypto from 'crypto'
import { Link } from "react-router-dom";
import { FormattedMessage, useIntl } from "react-intl";
import translate from "./translate";
import './Code.css';

const Code = () => {
  const codes: { [key: string]: string } = {
    "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad": "7cd76bd0c1261f96f4cbd26b3f9e34e7",
    "cb8379ac2098aa165029e3938a51da0bcecfc008fd6795f401178647f96c5b34": "39d8aa4ea226eb42ce23057c37ad72c5",
  };

  function checkCode(value: string) {
    const hash = Crypto.createHash("sha256").update(value).digest("hex");
    const secret = codes[hash];
    if (secret) {
      const bytes = secret;
      let key = value;
      while (key.length < 32) {
        key += key;
      }
      key = key.substring(0, 32);
      const message = Crypto.createDecipheriv("aes-256-gcm", key, hash).update(bytes, "hex").toString();
      alert("Message is: "+ message);
    }
  }

  return (
    <div className="code">
      <input className="code" onChange={(event) => checkCode(event.target.value)}/>
    </div>
  );
}

export default Code;
