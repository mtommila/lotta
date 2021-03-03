import React from 'react';
import translate from './translate';
import theatrePermit from './theatre_permit.png';

const KindergartenTheatrePermit_fi = (): JSX.Element => {
  return (
    <div>
      <p><mark>“Hui, mikä tuo on?”, Oodi huudahtaa pelästyneenä. Matkalaukun pohjalta heitä tuijottaa kaksi mustaa silmäaukkoa. Lotta nostaa matkalaukun pohjalta vanhan, kartonkisen naamarin. Hän asettaa sen kasvoilleen. Silloin myös Harmonia pelästyy, ja hypähtää Oodin tuuhean hännän taakse piiloon. “Miau”, sanoo Lotta nauraen.</mark></p>
      <p><strong>Lupa mennä teatteriharjoituksiin</strong></p>
      <img className="large" src={theatrePermit} alt={translate('theatre_permit')}/>
      <p><em>“Pikkulotat kokoontuivat työiltoihin, joissa askartelun ja käsitöiden ohella luettiin ja laulettiin. Tytöt harjoittelivat ja esittivät omissa ja aikuisten iltamissa lauluja, näytelmiä ja runonlausuntaa.” </em></p>
      <p>(Pikkulotan leikit, Perinneleikit ry &amp; Lottamuseo, 2017)</p>
      <p>“...<em> pikkulotat järjestivät siirtoväen ja reserviläisten lapsille illanviettoja…”</em></p>
      <p>(Pikkulotan leikit, Perinneleikit ry &amp; Lottamuseo, 2017)</p>
      <p><strong>Pohdinta-/Tehtävävinkkejä:</strong></p>
      <ul>
        <li>Keskustelkaa ryhmässä, ovatko lapset käyneet teatterissa? Mitä teatteri oikeastaan tarkoittaa? Minkälaisia erityyppisiä teatterimuotoja on olemassa? (esim. nukketeatteri, varjoteatteri, pöytäteatteri jne.)</li>
        <li>Oletko itse esiintynyt joskus jossakin?</li>
        <li>Suunnitelkaa ja toteuttakaa yhdessä/pienryhmissä joku esitys (nukketeatteri, sorminukketeatteri, näytelmä tms.).
          <ul>
            <li>Pohtikaa yhdessä, mikä on käsikirjoitus. Tehkää itse oma (esim. saduttamalla), tai valitkaa joku tuttu satu, josta esityksen voi tehdä. Onko esityksessä puhetta, vai esitetäänkö asiat liikkein, kuvien avulla tai musiikin/äänitehosteiden avulla?</li>
            <li>Mitä materiaaleja tarvitaan hahmojen valmistamiseen? (parittomat sormikkaat/lapaset, paperi, kartonki, pahvilaatikoiden materiaali, luonnonmateriaalit, muovailuvaha, savi, taikataikina jne) Vai näyttelettekö kenties itse?</li>
            <li>Missä esitys esitetään? Miten tehdään lavastukset erityyppisiin teatterimuotoihin? Voisiko esitys olla ulkona?</li>
            <li>Onko esityksessä musiikkia, äänitehosteita tms? Kuinka niitä saadaan? (kehosoittimilla, soittimilla, itsetehdyillä soittimilla, tietokoneella jne)</li>
            <li>Pohtikaa, kenelle esityksen voisi esittää (esim. oman ryhmän kesken, päiväkodin muille lapsiryhmille, lähialueen vanhainkodeille lähipäiväkodeille/kouluille, vanhemmille, etänä videon tms. välityksellä).</li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>Vierailkaa teatterissa. (esim. lähiseudun harrastajateatterit, lasten taidekerhot tms.)</li>
        <li><a target="_blank" rel="noreferrer" href="https://asiakas.kotisivukone.com/files/operatellus.tarjoaa.fi/Hei_tehdaan_musikaali.pdf">Hei_tehdaan_musikaali.pdf (kotisivukone.com)</a></li>
        <li><a target="_blank" rel="noreferrer" href="https://mieli.fi/fi/kirjat/el%C3%A4inlasten-el%C3%A4m%C3%A4%C3%A4-mielenterveystaitoja-p%C3%B6yt%C3%A4teatterin-keinoin">Eläinlasten elämää - Mielenterveystaitoja pöytäteatterin keinoin | MIELI Suomen Mielenterveys ry</a></li>
        <li><a target="_blank" rel="noreferrer" href="https://www.teatterimuseo.fi/">Teatterimuseo</a></li>
      </ul>
      <p><strong>KOODITEHTÄVÄ 5.: Kirjain löytyy kirjeessä olevan leiman lyhenteestä.</strong></p>
    </div>
  );
};

export default KindergartenTheatrePermit_fi;
