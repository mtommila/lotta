import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';
import translate, {translateComponent} from './translate';
import styles from './ColoringImage.module.css';

interface ColoringParams {
  image: string;
  returnUrl: string;
}

const ColoringImage = (props: ColoringParams) => {
  return (
    <div>
      <div>
        <img className={styles.full} src={props.image}/>
      </div>
      <Link to={props.returnUrl}>{translate('return_linktext')}</Link>
    </div>
  );
};

export default ColoringImage;
