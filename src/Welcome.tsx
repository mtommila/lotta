import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';
import translate, {translateComponent} from './translate';
import styles from './Welcome.module.css';

const Welcome = () => {
  const WelcomeLang = translateComponent('Welcome');
  return (
    <div>
      <WelcomeLang/>
    </div>
  );
};

export default Welcome;
