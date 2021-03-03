import React from 'react';
import {translateComponent} from './translate';

const Welcome = (): JSX.Element => {
  const WelcomeLang = translateComponent('Welcome');
  return (
    <div className="bodytext">
      <WelcomeLang/>
    </div>
  );
};

export default Welcome;
