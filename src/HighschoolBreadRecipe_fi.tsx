import React from 'react';
import translate from './translate';
import breadRecipe from './bread_recipe.png';

const HighschoolBreadRecipe_fi = () => {
  return (
    <div>
      <p><strong>Muonitus</strong></p>
      <p>“<em>Syksyllä 1938 puolustusministeriön sotatalousosastolla suunniteltiin sodanaikaista taloushuoltoa. Suunnittelutyön edetessä huomattiin, että riittävän leipämäärän toimittaminen kenttäarmeijalle olisi mahdotonta, mikäli suurten leipomoiden toiminta häiriintyisi esimerkiksi sähkökatkosten vuoksi. Leivän leivonnan turvaamiseksi pyysi puolustusministeriön sotatalousosasto apua Lottajärjestöltä. Lotat leipoivat leipää ylimääräisten kertausharjoitusten ja talvisodan ajan. Esimerkiksi koko talven 1939 lottapiirit leipoivat leipää yhteensä 81.000 kiloa, alussa jopa 103.000 kiloa päivässä. Tämä valtava leivontaurakka suoritettiin palkattomana lottatyönä. Puolustusvoimat korvasi leivän leivonnasta tulleet muut kustannukset.</em>” <a href="https://www.lottasvard.fi/lottagalleria/lottajarjeston-jaostot/#!/muonitusjaosto">Lottajärjestön jaostot - Lotta Svärd - Verkkomuseo lottasvard.fi</a></p>
      <p>Pikkulotilla “<em>muonitusjaostossa työ käsitti ruoan valmistamista, pöydän kattamista ja tarjoilun alkeiden opastusta</em>”.<a href="https://www.lottasvard.fi/lottagalleria/lottajarjeston-jaostot/#!/pikkulotat">Lottajärjestön jaostot - Lotta Svärd - Verkkomuseo (lottasvard.fi)</a></p>
      <p>Näkkileipäresepti</p>
      <img src={breadRecipe} alt={translate('bread_recipe')}/>
      <p><strong>Pohdinta-/Tehtävävinkkejä:</strong></p>
      <ul>
        <li>Pohtikaa yhdessä terveellistä ruokavaliota ja sen tärkeyttä.</li>
      </ul>
      <ul>
        <li>Pohdinnan apuna voi käyttää esim. lautasmallia, jonka avulla voidaan keskustella eri ruoka-aineista (esim. liha, kala, maitotuotteet, viljatuotteet yms)</li>
      </ul>
      <ul>
        <li>Mistä ruokaa saadaan? Tutustukaa eri ruoka-aineiden reitteihin esim. Ruuan reitti-sivuilta</li>
      </ul>
      <p>Hyödyllisiä linkkejä:</p>
      <ul>
        <li><a href="https://www.ruokatieto.fi/ruokakasvatus/ruuan-reitti-ruokakasvatusta-alakouluille">https://www.ruokatieto.fi/ruokakasvatus/ruuan-reitti-ruokakasvatusta-alakouluille</a></li>
        <li>selvittäkää ruuan reitti ihmisen elimistössä (esim. Heurekan näyttelyiden avulla)</li>
        <li><a href="https://www.ruokatieto.fi/ruokakasvatus/ruokaketju-ruuan-matka-pellolta-poytaan/ravitsemus-ja-ruuan-valinta/ruuansulatus">Ruuansulatus | Ruokatieto Yhdistys</a></li>
        <li><a href="https://peda.net/lahti/koulut/karpanen/oppiaineet/biologia/ihminen/ruuansulatus">Ruuansulatus (peda.net)</a></li>
      </ul>
      <ul>
        <li>Mitä ruoka-aineita voi kasvattaa itse? Mitä olosuhteita kasvit vaativat?
          <ul>
            <li>Seuratkaa jonkin helpon kasvin kasvua istuttamalla esim. härkäpapu/ohra</li>
            <li>Tehkää itse oma pieni kasvimaa (viilipurkkiin, pakasterasiaan tms).</li>
            <li>Kotona voi laittaa kaupasta ostetun ruukkusalaatin purkkiin kasvamaan.</li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>Oletko itse laittanut ruokaa tai auttanut ruoanlaitossa tai leiponut jotakin? Mitä olet tehnyt? Kenen kanssa?</li>
      </ul>
      <ul>
        <li>Kerätkää luokan yhteinen mieluisten reseptien kirjanen. Julkaiskaa kirjanen haluamallanne tavalla esim. ruokablogi. Ottakaa selvää, millaisia reseptikirjoja/julkaisuja nykyään on. Kuka niitä julkaisee? Tunnetko jonkun henkilökohtaisesti?</li>
      </ul>
      <ul>
        <li>Tutustutaan kotien ruokakulttuureihin.</li>
      </ul>
      <ul>
        <li>Miten pöytää katetaan erilaisiin ruokatilaisuuksiin? Selvitä erilaisia kattaustapoja. Etsikää netistä myös erilaisia tapoja taitella servettejä ja harjoitelkaa taittelua.</li>
      </ul>
      <p><a href="https://www.martat.fi/">Marttajärjestö on monessa mukana | Martat</a></p>
      <p><a href="https://www.ruokatieto.fi/">Ruokatieto Yhdistys</a></p>
    </div>
  );
};

export default HighschoolBreadRecipe_fi;
