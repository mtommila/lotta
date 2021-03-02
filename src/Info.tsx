import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';
import translate, {translateComponent} from './translate';
import styles from './Info.module.css';

const Info = () => {
  const InfoLang = translateComponent('Info');
  return (
    <div>
      <InfoLang/>
    </div>
  );
};

export default Info;
