import React from 'react';
import {translateComponent} from './translate';

const Info = (): JSX.Element => {
  const InfoLang = translateComponent('Info');
  return (
    <div className="bodytext">
      <InfoLang/>
    </div>
  );
};

export default Info;
