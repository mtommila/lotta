import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';
import translate from './translate';
import styles from './Lotta.module.scss';

const Lotta = () => {
  const intl = useIntl();
  return (
    <div className={styles.home}>
      {/*
      <img className={styles.background} src={background} srcSet={`${background} 4160w, ${background_1920} 1920w, ${background_768} 768w, ${background_320} 320w`} alt=""/>
      */}
      <div className={styles.row}>
        <Link to="/tervetuloa">
          <div className={styles.sunholder}>
            <div className={styles.circle + ' ' + styles.sun}>
              {translate('welcome_linktext')}
            </div>
            <div className={styles.sunanimation}>
              {
                [...Array(10)].map((value, index) =>
                  <div className={styles.sunlight} key={index}>
                    <b></b>
                    <s></s>
                  </div>,
                )
              }
            </div>
          </div>
        </Link>
        <Link to="/info">
          <div className={styles.circle + ' ' + styles.info}>
            {translate('lottainfo_linktext')}
          </div>
        </Link>
      </div>
      <div className={styles.row}>
        <Link to="/paivakoti">
          <div className={styles.circle + ' ' + styles.kindergarten}>
            {translate('kindergarten_linktext')}
          </div>
        </Link>
        <Link to="/ala-aste">
          <div className={styles.circle + ' ' + styles.elementary}>
            {translate('lower_elementary_linktext')}
          </div>
        </Link>
        <Link to="/ylaaste">
          <div className={styles.circle + ' ' + styles.highschool}>
            {translate('junior_highschool_linktext')}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Lotta;
