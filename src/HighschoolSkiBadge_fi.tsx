import React from 'react';
import translate from './translate';
import skiBadge from './ski_badge.png';

const HighschoolSkiBadge_fi = (): JSX.Element => {
  return (
    <div>
      <p><strong>Kultainen hiihto- ja kävelymerkki</strong></p>
      <img className="large" src={skiBadge} alt={translate('ski_badge')}/>
      <p>Aivan kuten nykyisinkin, myös Lotta Svärd -järjestössä katsottiin, että hyvä fyysinen ja henkinen kunto paransivat ihmisten terveyttä ja elämänlaatua. Liikkumista kannustettiin eri tasoisin kuntomerkein. <br /> Isoilla lotilla oli oma hiihto- ja kävelymerkki, jonka sai omakseen suorittamalla tietyn haasteen. Paras oli kultainen kävelymerkki, josta roikkui kolme kultaista käpyä. <br /><br /><strong>Pohdinta-/Tehtävävinkkejä:</strong></p>
      <ul>
        <li>Suunnittele itse tai pienessä ryhmässä oma kuntomerkki. Mitä suunnittelussa tulisi ottaa huomioon? Esimerkiksi miten ja mihin se voidaan kiinnittää, mistä materiaalista (huom! monimateriaalisuus ja kierrätysmateriaalien hyödyntäminen), millä välineillä ja millaisin työtavoin sitä voidaan työstää ja toteuttaa? Mistä liikuntamuodoista tällaisen merkin voisi saada?</li>
      </ul>
      <ul>
        <li>Miten voit esimerkiksi tehdä näitä merkkejä?
          <ul>
            <li>työstämällä merkin puusta tai pakottamalla metallista tai vaikka kokeilla 3D-tulostinta merkin luomiseen, ja harjoitella samalla esimerkiksi Tinkercad-ohjelman käyttöä merkin suunnittelussa.</li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>Pohtikaa merkin tai muun palautteen kannustavuuden merkitystä. Minkälainen palaute on hyödyllistä ja miten sitä tulisi antaa/vastaanottaa? Missä tilanteissa? Osaatko itse antaa kannustavaa palautetta? Pohtikaa vertaisarvioinnin merkitystä esimerkiksi liikuntasuorituksissa.</li>
      </ul>
      <ul>
        <li>Asettakaa luokalle tai oppilaille henkilökohtaisesti yksi tai useampi liikunta tavoite esim. viikoksi/kuukaudeksi. Pohtikaa, miten tavoitteeseen pääsyä seurataan, dokumentoidaan, arvioidaan. Keskustelkaa tarvitaanko tavoitteeseen pääsyyn motivoimikseksi ulkoisia palkintoja vai riittääkö sisäinen motivaatio? Mikä voisi olla palkintona?</li>
      </ul>
      <ul>
        <li>Pitäkää vanhuksille/nuoremmille oppilaille liikuntatuokio tai tehkää liikuntahetkestä striimaus.</li>
      </ul>
      <ul>
        <li>Haasta toinen luokka/koulu tms., tee haastevideo ja lähetä se muille (taukojumppavideo, tanssiesitys). Mitä sosiaalisia medioita/alustoja voisi käyttää videoiden toteuttamiseen myös etäopiskelun aikana? Miten näillä voisi samalla lisätä yhteisöllisyyttä etäopiskeluaikana? Mitä tietosuoja-asioita on huomioitava kuvia ja videoita julkaistaessa?</li>
      </ul>
      <p>Liikkumisen iloa kaikille!</p>
    </div>
  );
};

export default HighschoolSkiBadge_fi;
