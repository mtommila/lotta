import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';
import translate from './translate';
import './Lotta.scss';

const Lotta = () => {
  const intl = useIntl();
  return (
    <div className="home">
      {/*
      <img className="background" src={background} srcSet={`${background} 4160w, ${background_1920} 1920w, ${background_768} 768w, ${background_320} 320w`} alt=""/>
      */}
      <div className="row">
        <Link to="/tervetuloa">
          <div className="sunholder">
            <div className="circle sun">
              {translate('welcome_linktext')}
            </div>
            <div className="sun-anime">
              {
                [...Array(10)].map((value, index) =>
                  <div className="sun-light" key={index}>
                    <b></b>
                    <s></s>
                  </div>,
                )
              }
            </div>
          </div>
        </Link>
        <Link to="/info">
          <div className="circle info">
            {translate('lottainfo_linktext')}
          </div>
        </Link>
      </div>
      <div className="row">
        <Link to="/paivakoti">
          <div className="circle kindergarten">
            {translate('kindergarten_linktext')}
          </div>
        </Link>
        <Link to="/ala-aste">
          <div className="circle elementary">
            {translate('lower_elementary_linktext')}
          </div>
        </Link>
        <Link to="/ylaaste">
          <div className="circle highschool">
            {translate('junior_highschool_linktext')}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Lotta;
