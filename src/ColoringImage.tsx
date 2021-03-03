import React from 'react';
import {Link} from 'react-router-dom';
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
        <img className={styles.full} src={props.image}/>
      </div>
      <span className="backlink"><Link to={props.returnUrl}>{translate('return_linktext')}</Link></span>
    </div>
  );
};

export default ColoringImage;
