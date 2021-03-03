import React from 'react';
import translate from './translate';
import militaryMail from './military_mail.png';
import letter from './letter.jpg';
import letterTranscript from './letter_transcript.png';

const HighschoolMailPile_fi = (): JSX.Element => {
  return (
    <div>
      <p><strong>Kenttäposti</strong></p>
      <img className="large" src={militaryMail} alt={translate('military_mail')}/>
      <p><em>“Sotilaiden hyväksi tehty huoltotyö piti sisällään muun muassa pakettien ja tervehdysten lähettämistä, huoltotoimintaa sotasairaaloissa, viihdytystoimintaa sekä rintamamiesten puhdetöiden myyntiä.”</em> <a target="_blank" rel="noreferrer" href="https://www.lottasvard.fi/lottagalleria/lottajarjeston-jaostot/#!/kerays-ja-huoltojaosto">Lottajärjestön jaostot - Lotta Svärd - Verkkomuseo (lottasvard.fi)</a></p>
      <p><em>“Sodan syttyessä esikunnat, huoltolaitokset ja kotijoukkojen monet toimintapisteet tarvitsivat toimistotyöhön tottunutta henkilöstöä, jolloin kanslialottien tarve kasvoi äkillisesti. Toimistotehtävien lisäksi kanslialottia tarvittiin sota-aikana kenttäpostissa ja kirjesensuurissa. </em></p>
      <p><em>Toimisto- ja viestijaosto perustettiin sota-ajan tarpeisiin. Teknisillä aloilla tarvittiin paljon lottatyövoimaa, tavoitteena oli vapauttaa mahdollisimman paljon miehiä teknisistä tehtävistä rintamalle. Toimistolottia työskenteli sodan aikana muun muassa konekirjoittajina, toimistoapulaisina, kortistonhoitajina, kenttäpostitehtävissä ja kartanpiirtäjinä.</em></p>
      <p><em>Viestilottien toiminimikkeitä oli muun muassa puhelunvälittäjä, radiolotta, kaukokirjoitinlotta ja salakirjoituslotta. Sotatoimialueella työskentelevät viestilotat oli yleensä sijoitettu varsinaisten viestijoukkojen viestipataljooniin.” </em><a target="_blank" rel="noreferrer" href="https://www.lottasvard.fi/lottagalleria/lottajarjeston-jaostot/#!/toimistojaviesti">Lottajärjestön jaostot - Lotta Svärd - Verkkomuseo (lottasvard.fi)</a></p>
      <p>Airilta kirje mummolle</p>
      <img className="large" src={letter} alt={translate('letter')}/>
      <img className="large" src={letterTranscript} alt={translate('letter')}/>
      <p><strong>Pohdinta-/Tehtävävinkkejä:</strong></p>
      <ul>
        <li>Pohtikaa, selvittäkää yhdessä miksi kirjeitä kirjoitetaan? Oletko itse kirjoittanut taikka saanut kirjeen? Mitä/miksi asioita tarvitaan, jotta kirjeen voi kirjoittaa ja lähettää? Kuinka kirje pääsee perille?</li>
      </ul>
      <ul>
        <li>Mitä tarkoittaa kirjesalaisuus?</li>
      </ul>
      <ul>
        <li>Kuinka muuten viestin voisi lähettää? Voiko viestin lähettää samaan paikkaan nopeammin kuin tavallisen kirjeen postitse? Tehkää koe: Lähettäkää tervehdys samaan osoitteeseen kahdella eri tavalla ja vertailkaa saapumispäiviä/-aikoja.</li>
      </ul>
      <ul>
        <li>Pohtikaa viestittelyä sosiaalisessa mediassa. Mitä on vastuullinen, turvallinen ja eettinen käyttäytyminen?</li>
      </ul>
      <ul>
        <li>Tehkää kokeilu, kuinka nopeasti ja laajalle esim. facebookissa lähettämänne kuva+viesti etenee.</li>
      </ul>
      <ul>
        <li><a target="_blank" rel="noreferrer" href="https://www.lottamuseo.fi/jata-tervehdyksesi-lotille-ja-pikkulotille/">Jätä tervehdyksesi lotille ja pikkulotille - Lottamuseo</a></li>
      </ul>
      <ul>
        <li>Selvittäkää millä muulla tavalla viestejä on voitu ja voi nykyaikana lähettää ja vastaanottaa (esim. savumerkit, pulloposti, kirjekyyhkyt, sähkötys, tietokone jne.</li>
      </ul>
      <ul>
        <li>Keskustelkaa miksi viestittely on tärkeää ihmisille? Minkälaiset ihmisryhmät eivät saa viestejä päivittäisessä elämässä? Askarrelkaa kortteja (esim. joulu/pääsiäinen) ja lähettäkää niillä tervehdyksiä lähialueen vanhainkoteihin vanhuksille.</li>
      </ul>
      <ul>
        <li>Lottien tehtävänä rintamalla oli myös toimittaa perille paketteja. Nykypäivänä Lotta Svärd-järjestö ja monet muutkin järjestöt/yhdistykset jakavat erilaisia hyväntekeväisyys paketteja esim. taloudellisesti heikommassa asemassa oleville perheille. Selvittäkää mitä eri tapoja hyväntekeväisyys pakettien lähettämiselle on olemassa. Haluaisitteko luokkana osallistua jonkun paketin kasaamiseen ja lähettämiseen? Löysittekö muita tapoja auttaa hädässä olevia?</li><br/>
        <a target="_blank" rel="noreferrer" href="https://www.lottasvard.fi/lottagalleria/lottajarjeston-jaostot/#!/toimistojaviesti">Lottajärjestön jaostot - Lotta Svärd - Verkkomuseo (lottasvard.fi)</a>
      </ul>
      <ul>
        <li><a target="_blank" rel="noreferrer" href="https://www.postimuseo.fi/">Etusivu - Postimuseo</a></li>
      </ul>
    </div>
  );
};

export default HighschoolMailPile_fi;
