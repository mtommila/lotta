import React from 'react';
import translate from './translate';
import lotat from './lotat.jpg';

const Highschool_fi = (): JSX.Element => {
  return (
    <div>
      <h1>Ullakon salaisuus</h1>
      <p><strong>Lotan isoisoäidin pimeällä ullakolla on vanha matkalaukku, johon kukaan ei saa koskea. Kenen tuo matkalaukku on, ja mitä siellä on sisällä? Kiivetkää ullakolle Lotta-tytön kanssa, ja selvittäkää yhdessä Ullakon salaisuus luokkanne kanssa. </strong></p>
      <img className="large" src={lotat} alt={translate('lotta_foundation')}/>
      <p>Lähtekää mukaan selvittämään, mikä Ullakon salaisuus on. Samalla tavoitteena on tutustua ja oppia asioita mm. Suomen historiasta, perinteistä ja kulttuurista erilaisten toiminnallisten tehtävien kautta, joita opettajat voivat yhdessä oppilaiden kanssa tutkia, suunnitella ja toteuttaa kaikkia osallistaen.Tämän tehtävävinkkipaketin ideoinnin tavoitteena on ollut huomioida mahdollisimman paljon laaja-alaisen osaamisen eri osa-alueita.</p>
      <p>“<em>Lottajärjestö oli naisten vapaaehtoinen, aseeton maanpuolustusjärjestö, joka toimi vuosina 1921-1944. Jäseniä järjestössä oli enimmillään noin 240 000, joista 8-17 -vuotiaita pikkulottia lähes 50 000.</em></p>
      <p><em>Rauhan aikana yksi lottajärjestön tärkeimmistä tavoitteista oli tarjota koulutusta jäsenilleen. Koulutuksen avulla lottajärjestö onnistui luomaan organisaation, jolla oli toimintavalmiudet sota-ajan poikkeuksellisissa olosuhteissa. Sota-aikana lottien yhteiskuntavastuu näyttäytyi muun muassa heikompiosaisista huolehtimisena, sotapakolaisten matkan turvaamisena, vanhusten ja lasten auttamisena sekä sairaiden hoitamisena.</em></p>
      <p><em>Lottajärjestö lakkautettiin syksyllä 1944 Moskovan välirauhansopimuksen nojalla. Järjestön lakkauttamisen jälkeen lotat jatkoivat huolto- ja avustustyötä Suomen Naisten Huoltosäätiön nimissä. Vuonna 2004 Suomen Naisten Huoltosäätiön nimi muutettiin Lotta Svärd Säätiöksi.” </em><a target="_blank" rel="noreferrer" href="https://www.lottasvard.fi/">Etusivu - Lotta Svärd - Verkkomuseo (lottasvard.fi)</a></p>
      <p><strong>Klikkaamalla matkalaukun kuvaa pääset tutkimaan kaikki tehtäväosiot, jotka löytyvät matkalaukussa olevien esineiden takaa.</strong></p>
    </div>
  );
};

export default Highschool_fi;
