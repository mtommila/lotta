import React from 'react';
import { Link } from "react-router-dom";
import { FormattedMessage, useIntl } from "react-intl";
import translate from "./translate";
import './Info.css';

const Welcome = () => {
  return (
    <div>
      Koko opetusmateriaalia koskeva info. Kenen kanssa yhteistyötä tehty (Lotta säätiö).
        Miksi tehty?
        Inspiraatio (maininta oopperasta)
        Teema Lotta-säätiö 100v
        Toiminta ideaa
        yms. yms.
    </div>
  );
};

export default Welcome;
