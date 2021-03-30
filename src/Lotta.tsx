import React from 'react';
import {Link} from 'react-router-dom';
import translate from './translate';
import styles from './Lotta.module.scss';
import operaTellus from './operatellus.jpg';
import lottaMuseum from './lotta_museum.png';

const Lotta = (): JSX.Element => {
  return (
    <div className={styles.home}>
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
        <span></span>
        <span></span>
        <span></span>
        <a target="_blank" rel="noreferrer" href="https://www.operatellus.fi/">
          <div className={styles.circle + ' ' + styles.xsmall + ' ' + styles.tellus}>
            <img src={operaTellus} alt={translate('operatellus_linktext')}/>
          </div>
        </a>
        <Link to="/info">
          <div className={styles.circle + ' ' + styles.xsmall + ' ' + styles.info}>
            <img src={lottaMuseum} alt={translate('lottainfo_linktext')}/>
          </div>
        </Link>
      </div>
      <div className={styles.row}>
        <Link to="/paivakoti">
          <div className={styles.circle + ' ' + styles.small + ' ' + styles.kindergarten}>
            {translate('kindergarten_linktext')}
          </div>
        </Link>
        <Link to="/ala-aste">
          <div className={styles.circle + ' ' + styles.small + ' ' + styles.elementary}>
            {translate('lower_elementary_linktext')}
          </div>
        </Link>
        <Link to="/ylaaste">
          <div className={styles.circle + ' ' + styles.small + ' ' + styles.highschool}>
            {translate('junior_highschool_linktext')}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Lotta;
