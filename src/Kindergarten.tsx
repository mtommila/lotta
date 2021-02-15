import React from 'react';
import { Link } from "react-router-dom";
import { FormattedMessage, useIntl } from "react-intl";
import translate, {translateComponent} from "./translate";
import Code from './Code';
import './Kindergarten.css';
import suitcaseClosed from './suitcase_closed.jpg';
import suitcaseOpen from './suitcase_open.jpg';

const Kindergarten = () => {
  let [isSuitcaseOpen, setSuitcaseOpen] = React.useState(false);
  let suitcaseAudio = new Audio('/suitcase.mp3');
  const KindergartenLang = translateComponent('Kindergarten');
  return (
    <div>
      <h1>Mitä pikkulotat tekivät</h1>
      {
        isSuitcaseOpen ?
          <img src={suitcaseOpen} alt={translate('suitcase')}/>
          :
          <img src={suitcaseClosed} alt={translate('suitcase')}
               onClick={() => suitcaseAudio.play().then(() => setSuitcaseOpen(true))}/>
      }
      <KindergartenLang/>
      <Code/>
    </div>
  );
}

export default Kindergarten;
