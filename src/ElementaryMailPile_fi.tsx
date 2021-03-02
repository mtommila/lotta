import React from 'react';
import translate from './translate';
import militaryMail from './military_mail.png';
import letter from './letter.png';
import letterTranscript from './letter_transcript.png';

const ElementaryMailPile_fi = () => {
  return (
    <div>
      <p><mark>“Lotta!”, huutaa Harmonia, ja nostaa matkalaukusta käpälillään nipun vanhoja kirjeitä. “Ovatko ne kirjeitä Joulupukille?”, kysyy Oodi. Lotta ottaa kirjenipun ja avaa niiden ympärillä olevan haalistuneen, sinisen silkkinauhan. “Kenttäpostia…”, Lotta lukee ääneen. Yhdessä ystävykset pohtivat, kukakohan kirjeet on isoisoäidille lähettänyt.</mark></p>
      <p><strong>Kenttäposti</strong></p>
      <img src={militaryMail} alt={translate('military_mail')}/>
      <p><em>“Sotilaiden hyväksi tehty huoltotyö piti sisällään muun muassa pakettien ja tervehdysten lähettämistä, huoltotoimintaa sotasairaaloissa, viihdytystoimintaa sekä rintamamiesten puhdetöiden myyntiä.”</em><a href="https://www.lottasvard.fi/lottagalleria/lottajarjeston-jaostot/#!/kerays-ja-huoltojaosto">Lottajärjestön jaostot - Lotta Svärd - Verkkomuseo (lottasvard.fi)</a></p>
      <p><em>“Sodan syttyessä esikunnat, huoltolaitokset ja kotijoukkojen monet toimintapisteet tarvitsivat toimistotyöhön tottunutta henkilöstöä, jolloin kanslialottien tarve kasvoi äkillisesti. Toimistotehtävien lisäksi kanslialottia tarvittiin sota-aikana kenttäpostissa ja kirjesensuurissa. </em></p>
      <p><em>Toimisto- ja viestijaosto perustettiin sota-ajan tarpeisiin. Teknisillä aloilla tarvittiin paljon lottatyövoimaa, tavoitteena oli vapauttaa mahdollisimman paljon miehiä teknisistä tehtävistä rintamalle. Toimistolottia työskenteli sodan aikana muun muassa konekirjoittajina, toimistoapulaisina, kortistonhoitajina, kenttäpostitehtävissä ja kartanpiirtäjinä.</em></p>
      <p><em>Viestilottien toiminimikkeitä oli muun muassa puhelunvälittäjä, radiolotta, kaukokirjoitinlotta ja salakirjoituslotta. Sotatoimialueella työskentelevät viestilotat oli yleensä sijoitettu varsinaisten viestijoukkojen viestipataljooniin.” </em><a href="https://www.lottasvard.fi/lottagalleria/lottajarjeston-jaostot/#!/toimistojaviesti">Lottajärjestön jaostot - Lotta Svärd - Verkkomuseo (lottasvard.fi)</a></p>
      <p>Kirje Airi-lotalta mummolleen</p>
      <img src={letter} alt={translate('letter')}/>
      <img src={letterTranscript} alt={translate('letter')}/>
      <p><strong>Pohdinta-/Tehtävävinkkejä:</strong></p>
      <ul>
        <li>Pohtikaa, selvittäkää yhdessä miksi kirjeitä kirjoitetaan? Oletko itse kirjoittanut taikka saanut kirjeen? Mitä/miksi asioita tarvitaan, jotta kirjeen voi kirjoittaa ja lähettää? Kuinka kirje pääsee perille? Mitä eroa on esim. kirjeellä ja postikortilla? Voitte tehdä jokainen oman kortin taikka kirjeen ja lähettää lapsiryhmän jokaisen kotiin yhden kortin/kirjeen. Onnistuiko?</li>
      </ul>
      <ul>
        <li>Kuinka muuten voisi viestin lähettää? Voiko viestin lähettää samaan paikkaan nopeammin kuin tavallisen postin kirjeen? Tehkää koe: Lähettäkää tervehdys samaan osoitteeseen kahdella eri tavalla ja vertailkaa saapumispäiviä/-aikoja.</li>
      </ul>
      <ul>
        <li><a href="https://www.lottamuseo.fi/jata-tervehdyksesi-lotille-ja-pikkulotille/">Jätä tervehdyksesi lotille ja pikkulotille - Lottamuseo</a></li>
      </ul>
      <ul>
        <li>Voiko posti kuljettaa muutakin kuin vain kirjeitä? Kuinka kauas voidaan postia lähettää? Minne haluaisit lähettää postia jos se olisi mahdollista? Mikä on kaukaisin paikka, josta itse olet saanut postia?</li>
      </ul>
      <ul>
        <li>Selvittäkää millä muulla tavalla viestejä on voinut ja voi nykyaikana lähettää ja vastaanottaa (esim. savumerkit, pulloposti, kirjekyyhkyt, sähkötys, tietokone jne.)</li>
      </ul>
      <ul>
        <li>Keksikää oma salakirjoitus.</li>
      </ul>
      <ul>
        <li>Askarrelkaa kortteja (esim. joulu/pääsiäinen) ja lähettäkää niillä tervehdyksiä lähialueen vanhainkoteihin vanhuksille tai lähipäiväkotiin.</li>
      </ul>
      <ul>
        <li>Askarrelkaa luokkaan postilaatikko ja toteuttakaa “Salainen ystävä”-projekti, jossa jokaiselle valitaan salainen ystävä, jolle esim. viikon tai kahden ajan kirjoitetaan kirjeitä/kortteja/tehdään mukavia tekoja. Luokan postilaatikko tyhjennetään säännöllisesti ja kirjeiden/korttien perusteella yritetään arvata salainen ystävä.</li>
      </ul>
      <ul>
        <li>Hankkikaa luokalle kirjeenvaihtoluokka toiselta paikkakunnalta.</li>
      </ul>
      <ul>
        <li><a href="https://www.postimuseo.fi/">Etusivu - Postimuseo</a></li>
      </ul>
      <p><strong>KOODITEHTÄVÄ 4.: Mikä kirjain on kellonajan ensimmäisen numeromerkin kirjoitetusta muodosta kolmas kirjain?</strong></p>
    </div>
  );
};

export default ElementaryMailPile_fi;
