import React from 'react';
import { Link } from "react-router-dom";
import { FormattedMessage, useIntl } from "react-intl";
import translate, {translateComponent} from "./translate";
import './SkiBadge.css';

const SkiBadge = () => {
  //const SkiBadgeLang = translateComponent('SkiBadge');
  return (
    <div>
      <h1>Hiihtomerkki</h1>
    </div>
  );
}

export default SkiBadge;
