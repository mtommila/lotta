import React from 'react';
import translate from './translate';
import breadRecipe from './bread_recipe.png';

const KindergartenBreadRecipe_fi = (): JSX.Element => {
  return (
    <div>
      <p><mark>Naapurustossa on talkoot. Siellä pidetään juuri ruokataukoa. Makkaroita paistetaan, ja niiden ihana tuoksu leijuu ylös ullakolle saakka. Lotta löytää matkalaukusta vanhan vihon, jota selaa yhdessä Harmonian ja Oodin kanssa. “Ruisnäkkileipä”, lukee Lotta ääneen. “Tämähän on isoisoäidin vanha reseptivihko!” Lotankin vatsa alkaa kurnia.</mark></p>
      <p><strong>Muonitus</strong></p>
      <img className="large" src={breadRecipe} alt={translate('bread_recipe')}/>
      <p><em>Lottien näkkileipäresepti</em></p>
      <p><em>“Syksyllä 1938 puolustusministeriön sotatalousosastolla suunniteltiin sodanaikaista taloushuoltoa. Suunnittelutyön edetessä huomattiin, että riittävän leipämäärän toimittaminen kenttäarmeijalle olisi mahdotonta, mikäli suurten leipomoiden toiminta häiriintyisi esimerkiksi sähkökatkosten vuoksi. Leivän leivonnan turvaamiseksi pyysi puolustusministeriön sotatalousosasto apua Lottajärjestöltä. Lotat leipoivat leipää ylimääräisten kertausharjoitusten ja talvisodan ajan. Esimerkiksi koko talven 1939 lottapiirit leipoivat leipää yhteensä 81.000 kiloa, alussa jopa 103.000 kiloa päivässä. Tämä valtava leivontaurakka suoritettiin palkattomana lottatyönä. Puolustusvoimat korvasi leivän leivonnasta tulleet muut kustannukset.”</em></p>
      <p>(<a target="_blank" rel="noreferrer" href="https://www.lottasvard.fi/lottagalleria/lottajarjeston-jaostot/#!/muonitusjaosto">Lottajärjestön jaostot - Lotta Svärd - Verkkomuseo lottasvard.fi</a>)</p>
      <p><em>Pikkulotilla “muonitusjaostossa työ käsitti ruoan valmistamista, pöydän kattamista ja tarjoilun alkeiden opastusta”.</em></p>
      <p>(<a target="_blank" rel="noreferrer" href="https://www.lottasvard.fi/lottagalleria/lottajarjeston-jaostot/#!/pikkulotat">Lottajärjestön jaostot - Lotta Svärd - Verkkomuseo (lottasvard.fi)</a>)</p>
      <p><strong>Pohdinta-/Tehtävävinkkejä:</strong></p>
      <ul>
        <li>Pohtikaa yhdessä ryhmän kanssa Miksi ruokaa syödään/Miksi ruoka on tärkeää?</li>
        <li>Pohdinnan apuna voi käyttää esim. lautasmallia, jonka avulla voidaan keskustella eri ruoka-aineista (esim. liha, kala, maitotuotteet, viljatuotteet yms)
          <ul>
            <li>Askartele oma lautasmalli esim. leikkaamalla kuvia lehdistä, piirtämällä itse, muovailemalla taikataikinasta (Taikataikinan ohje löytyy helposti netistä) jne</li>
          </ul>
        </li>
        <li>Mistä ruokaa saadaan? Tutustukaa eri ruoka-aineiden reitteihin esim. Ruuan reitti -sivuilta:<br /><a target="_blank" rel="noreferrer" href="https://www.ruokatieto.fi/ruokakasvatus/ruuan-reitti-ruokakasvatusta-alakouluille">https://www.ruokatieto.fi/ruokakasvatus/ruuan-reitti-ruokakasvatusta-alakouluille</a></li>
        <li><a target="_blank" rel="noreferrer" href="https://www.mtvuutiset.fi/artikkeli/tiesitko-naita-kiehtovia-faktoja-matkaa-ruoan-mukana-suusta-vessanponttoon-kiinnita-huomio-lopputulokseen/7948634#gs.sxnqcw">Ihmisen ruoansulatuselimistön toiminta: Tällainen on ruoan matka elimistön läpi - MTVuutiset.fi</a></li>
      </ul>
      <ul>
        <li>Mitä ruoka-aineita voi kasvattaa itse?
          <ul>
            <li>Seuratkaa jonkin helpon kasvin kasvua istuttamalla esim. härkäpapu/ohra</li>
            <li>Tehkää itse oma pieni kasvimaa (viilipurkkiin, pakasterasiaan tms).</li>
            <li>Kotona voi laittaa kaupasta ostetun ruukkusalaatin purkkiin kasvamaan.</li>
          </ul>
        </li>
        <li>Oletko itse laittanut ruokaa tai auttanut ruoanlaitossa tai leiponut jotakin? Mitä olet tehnyt? Kenen kanssa? Pohdintoja voit vaikka kuvittaa piirtämällä tai maalaamalla.</li>
        <li>Mikä resepti on? Mitä tietoa reseptistä löytyy? ( Esim. numeroita, kirjaimia, määriä, aikoja ja erilaisia ruuan käsittelytapoja) Mistä reseptejä löytää? Voiko reseptin tehdä itse? Voidaan pohtia tarpeen tullen myös mitä eroa on käsitteillä ruokaresepti ja lääkeresepti.</li>
        <li>Tutustutaan kotien ruokakulttuureihin esim. tuomalla kuvia/reseptejä kotien lempiruuista, kertomalla omia tai omien vanhempien ruokamuistoja jne.</li>
        <li>Mitä ruokailuvälineitä tarvitaan syömiseen? Miten pöytää katetaan? Mitä tarkoittaa pöydän kattaminen? Ruokailuvälineiden omat paikat kattauksessa.
          <ul>
            <li>Askarrelkaa omat ruokailualustat, joissa voi näkyä esim. ruokailuvälineiden paikat tai joitain ruokailua helpottavia kuvia. Alustat voi laminoida, jotta ne säilyy paremmin.</li>
            <li>Harjoitelkaa servettien taittelua. Mikä on servetti ja mikä sen tarkoitus on?</li>
          </ul>
        </li>
      </ul>
      <p><strong>KOODITEHTÄVÄ 3.: Mikä kirjain on reseptin toisen ainesosan viides kirjain?</strong></p>
    </div>
  );
};

export default KindergartenBreadRecipe_fi;
