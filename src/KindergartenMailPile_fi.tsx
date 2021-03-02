import React from 'react';
import translate from './translate';
import militaryMail from './military_mail.png';
import letter from './letter.png';
import letterTranscript from './letter_transcript.png';

const KindergartenMailPile_fi = () => {
  return (
    <div>
      <p><mark>“Lotta!”, huutaa Harmonia, ja nostaa matkalaukusta käpälillään nipun vanhoja kirjeitä. “Ovatko ne kirjeitä Joulupukille?”, kysyy Oodi. Lotta ottaa kirjenipun ja avaa niiden ympärillä olevan haalistuneen, sinisen silkkinauhan. “Kenttäpostia…”, Lotta lukee ääneen. Yhdessä ystävykset pohtivat, kukakohan kirjeet on isoisoäidille lähettänyt.</mark></p>
      <p><strong>Kenttäpostia</strong></p>
      <img src={militaryMail} alt={translate('military_mail')}/>
      <p><em>“Sotilaiden hyväksi tehty huoltotyö piti sisällään muun muassa pakettien ja tervehdysten lähettämistä, huoltotoimintaa sotasairaaloissa, viihdytystoimintaa sekä rintamamiesten puhdetöiden myyntiä.”<br /><br /></em>(<a href="https://www.lottasvard.fi/lottagalleria/lottajarjeston-jaostot/#!/toimistojaviesti">Lottajärjestön jaostot - Lotta Svärd - Verkkomuseo (lottasvard.fi)</a><em>)</em></p>
      <p><em>“Sodan aikana pikkulotat järjestivät siirtoväen ja reserviläisten lapsille illanviettoja ja valmistivat heille lahjoja. He kirjoittivat kirjeitä ja joulukortteja tuntemattomille sotilaille ja lähettivät paketteja.” <br /><br /></em>(Pikkulotan leikit, Perinneleikit ry &amp; Lottamuseo, 2017))</p>
      <p><em>“Toimisto- ja viestijaosto perustettiin sota-ajan tarpeisiin. Teknisillä aloilla tarvittiin paljon lottatyövoimaa, tavoitteena oli vapauttaa mahdollisimman paljon miehiä teknisistä tehtävistä rintamalle. Toimistolottia työskenteli sodan aikana muun muassa konekirjoittajina, toimistoapulaisina, kortistonhoitajina, kenttäpostitehtävissä ja kartanpiirtäjinä.”</em></p>
      <p><em>“Viestilottien toiminimikkeitä oli muun muassa puhelunvälittäjä, radiolotta, kaukokirjoitinlotta ja salakirjoituslotta. Sotatoimialueella työskentelevät viestilotat oli yleensä sijoitettu varsinaisten viestijoukkojen viestipataljooniin.” <br /><br /></em>(<a href="https://www.lottasvard.fi/lottagalleria/lottajarjeston-jaostot/#!/toimistojaviesti">Lottajärjestön jaostot - Lotta Svärd - Verkkomuseo (lottasvard.fi)</a>)</p>
      <p><strong>Kirje Airi-lotalta mummolleen</strong></p>
      <img src={letter} alt={translate('letter')}/>
      <img src={letterTranscript} alt={translate('letter')}/>
      <p><strong>Pohdinta-/Tehtävävinkkejä:</strong></p>
      <ul>
        <li>Pohtikaa ja selvittäkää yhdessä, miksi kirjeitä kirjoitetaan? Oletko itse kirjoittanut taikka saanut kirjeen? Mitä asioita tarvitaan, jotta kirjeen voi kirjoittaa ja lähettää? Kuinka kirje pääsee perille? Mitä eroa on esim. kirjeellä ja postikortilla? Voitte tehdä jokainen oman kortin, taikka kirjeen ja lähettää lapsiryhmän jokaiseen kotiin yhden kortin/kirjeen. Onnistuiko?</li>
        <li>Kuinka muuten voisi viestin lähettää? Voiko viestin lähettää samaan paikkaan nopeammin kuin tavallisen kirjeen postin kautta? Tehkää koe: Lähettäkää tervehdys samaan osoitteeseen kahdella eri tavalla ja vertailkaa saapumispäiviä/-aikoja.</li>
        <li><a href="https://www.lottamuseo.fi/jata-tervehdyksesi-lotille-ja-pikkulotille/">Jätä tervehdyksesi lotille ja pikkulotille - Lottamuseo</a></li>
        <li>Voiko posti kuljettaa muutakin kuin vain kirjeitä? Kuinka kauas voidaan postia lähettää? Minne haluaisit lähettää postia jos se olisi mahdollista? Mikä on kaukaisin paikka, josta itse olet saanut, tai johon olet lähettänyt postia?</li>
        <li>Selvittäkää, millä muulla tavalla viestejä on voinut ja voi nykyaikana lähettää ja vastaanottaa (esim. savumerkit, pulloposti, kirjekyyhkyt, sähkötys, tietokone jne.)</li>
        <li>Keksikää oma salakirjoitus.</li>
        <li>Askarrelkaa kortteja (esim. joulu/pääsiäinen) ja lähettäkää niillä tervehdyksiä lähialueen vanhainkoteihin vanhuksille tai lähipäiväkotiin.</li>
        <li><a href="https://www.postimuseo.fi/">Etusivu - Postimuseo</a></li>
      </ul>
      <p><strong>KOODITEHTÄVÄ 4.: Mikä kirjain on kellonajan ensimmäisen numeromerkin kirjoitetusta muodosta kolmas kirjain?</strong></p>
    </div>
  );
};

export default KindergartenMailPile_fi;
