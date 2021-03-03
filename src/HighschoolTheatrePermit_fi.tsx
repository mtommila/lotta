import React from 'react';
import translate from './translate';
import theatrePermit from './theatre_permit.png';

const HighschoolTheatrePermit_fi = (): JSX.Element => {
  return (
    <div>
      <p><strong>Lupa mennä teatteriharjoituksiin</strong></p>
      <img className="large" src={theatrePermit} alt={translate('theatre_permit')}/>
      <p>“ Pikkulotat kokoontuivat työiltoihin, joissa askartelun ja käsitöiden ohella luettiin ja laulettiin. Tytöt harjoittelivat ja esittivät omissa ja aikuisten iltamissa lauluja, näytelmiä ja runonlausuntaa.” (Pikkulotan leikit, Perinneleikit ry &amp; Lottamuseo, 2017)</p>
      <p>“...<em> pikkulotat järjestivät siirtoväen ja reserviläisten lapsille illanviettoja…”</em></p>
      <p>(Pikkulotan leikit, Perinneleikit ry &amp; Lottamuseo, 2017)</p>
      <p><strong> Pohdinta-/Tehtävävinkkejä:</strong></p>
      <ul>
        <li>Keskustelkaa luokassa ovatko oppilaat käyneet teatterissa? Mitä teatteri oikeastaan tarkoittaa? Ottakaa selville teatterin historiaa. Minkälaisia erityyppisiä teatterimuotoja on olemassa? (esim. nukketeatteri, varjoteatteri, pöytäteatteri jne.) Mitä teatterityylejä on olemassa?</li>
      </ul>
      <ul>
        <li>Oletko itse esiintynyt joskus jossakin?</li>
      </ul>
      <ul>
        <li>Suunnitelkaa ja toteuttakaa yhdessä/pienryhmissä joku esitys (nukketeatteri, sorminukketeatteri, näytelmä, video, animaatio, musikaali tms.).
          <ul>
            <li>Pohtikaa yhdessä, mikä on käsikirjoitus. Tehkää itse oma tai valitkaa esim. joku tuttu satu, josta esityksen voi tehdä. Onko esityksessä puhetta vai esitetäänkö asiat liikkein, kuvien avulla tai musiikin/äänitehosteiden avulla?</li>
            <li>Mitä materiaaleja tarvitaan hahmojen valmistamiseen? Vai näyttelettekö itse?</li>
            <li>Missä esitys esitetään? Miten tehdään lavastukset erityyppisiin teatterimuotoihin? Voisiko esitys olla ulkona?</li>
            <li>Onko esityksessä musiikkia, äänitehosteita tms? Kuinka niitä saadaan? (koulun soittimilla, itsetehdyillä soittimilla, tietokoneella jne)</li>
            <li>Pohtikaa kenelle esityksen voisi esittää (esim. oman luokan kesken tai koulun muille luokille, lähialueen vanhainkodeille, lähipäiväkodeille/kouluille, vanhemmille, etänä videon tms. välityksellä).</li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>Vierailkaa teatterissa. (esim. lähiseudun harrastajateatterit, lasten taidekerhot tms.)</li>
      </ul>
      <ul>
        <li><a target="_blank" rel="noreferrer" href="https://mieli.fi/fi/kirjat/el%C3%A4inlasten-el%C3%A4m%C3%A4%C3%A4-mielenterveystaitoja-p%C3%B6yt%C3%A4teatterin-keinoin">Eläinlasten elämää - Mielenterveystaitoja pöytäteatterin keinoin | MIELI Suomen Mielenterveys ry</a></li>
      </ul>
      <ul>
        <li><a target="_blank" rel="noreferrer" href="https://www.teatterimuseo.fi/">Teatterimuseo</a></li>
      </ul>
    </div>
  );
};

export default HighschoolTheatrePermit_fi;
