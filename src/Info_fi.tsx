import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';
import translate from './translate';

const Info_fi = () => {
  return (
    <div>
      <h2>Lotta Svärd Säätiö</h2>
      <p>Yhteiskunnallinen huoltotyö oli aikoinaan Lottajärjestön toiminnan ytimessä ja samalla tiellä jatkaa Lotta Svärd Säätiö vielä tänä päivänäkin.</p>
      <p>Lakkautetun Lottajärjestön jäsenten kuntoutus- ja avustustoiminta ovat Lotta Svärd Säätiön toiminnan keskiössä. Sääntöjensä mukaisesti säätiö myös tukee vapaaehtoista maanpuolustustyötä, jonka painopisteenä on arjen turvallisuuden parantaminen. Lottamuseon kautta säätiö puolestaan toteuttaa tehtäväänsä kertoa Lottajärjestön historiasta, toiminnasta ja naisten vapaaehtoisesta työstä.</p>
      <p>Lisätietoa Lotta Svärd Säätiön historiasta <a target="_blank" rel="noreferrer" href="http://www.lottasvard.fi/">Lotta Svärd -verkkomuseosta</a> sekä <a target="_blank" rel="noreferrer" href="https://perinne.fi/">Suojeluskunnat ja Lotta Svärd -sivustolta</a>.</p>
    </div>
  );
};

export default Info_fi;
