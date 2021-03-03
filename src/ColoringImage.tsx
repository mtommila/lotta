import React from 'react';
import {Link} from 'react-router-dom';
import PrintButton from './PrintButton';
import translate from './translate';
import styles from './ColoringImage.module.css';

interface ColoringParams {
  image: string;
  returnUrl: string;
}

const ColoringImage = (props: ColoringParams): JSX.Element => {
  return (
    <div className="bodytext">
      <div className="center">
        <PrintButton/>
        <img className={styles.full} src={props.image}/>
        <PrintButton/>
      </div>
      <span className="backlink noprint"><Link to={props.returnUrl}>{translate('return_linktext')}</Link></span>
    </div>
  );
};

export default ColoringImage;
