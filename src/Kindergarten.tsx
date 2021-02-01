import React from 'react';
import { Link } from "react-router-dom";
import { FormattedMessage, useIntl } from "react-intl";
import translate from "./translate";
import './Kindergarten.css';
import suitcaseClosed from './suitcase_closed.jpg';
import suitcaseOpen from './suitcase_open.jpg';

const Kindergarten = () => {
  let [isSuitcaseOpen, setSuitcaseOpen] = React.useState(false);
  let suitcaseAudio = new Audio('/suitcase.mp3');
  return (
    <div>
      <h1>Mitä pikkulotat tekivät</h1>
      {
        isSuitcaseOpen ?
          <img src={suitcaseOpen} alt={translate('suitcase')}/>
          :
          <img src={suitcaseClosed} alt={translate('suitcase')}
               onClick={() => suitcaseAudio.play().then(() => setSuitcaseOpen(true))}/>
      }
      <p>Ennen seikkailuun l&auml;ht&ouml;&auml; jokainen voi luoda itselleen oman matkaoppaansa tai matkakaverinsa. Vain mielikuvitus on rajana, kuinka hahmot voidaan toteuttaa ja koristella. Hahmot voivat olla joko samat kuin materiaalipaketissa, tai sitten hahmoksi voi valita toisen tai keksi&auml; vallan itse jonkun ihan muunlaisen.</p>
      <ul>
        <li>piirt&auml;m&auml;ll&auml;</li>
        <li>maalaamalla (Hahmot voidaan leikata ja laminoida, jotta ne kest&auml;v&auml;t paremmin k&auml;ytt&ouml;&auml;.)</li>
        <li>askartelemalla (2- tai 3-ulotteisesti mm. savesta, pahvista, wc-rullista, luonnonmateriaaleista)</li>
        <li>ompelemalla (huovasta, kankaista, vanhoista sukista, sormikkaista ja lapasista)</li>
        <li>ty&ouml;st&auml;m&auml;ll&auml; puusta hahmon (vaneri + lehtisaha, lauta + saha, naulat, vasara + monimateriaalia koristeeksi)</li>
      </ul>
      <p>Ennen projektin alkua/seikkailulle l&auml;ht&ouml;&auml; voi olla hyv&auml; pohtia omassa lapsiryhm&auml;ss&auml; mm. seuraavanlaisia asioita:</p>
      <ul>
        <li>Mieti, millaisen matkakaverin haluaisit ja tarvitsisit mukaasi teht&auml;vien suorittamiseen? Miksi on hyv&auml;, jos joku on mukana? Mit&auml; turvallisuusasioita ja itsest&auml;&auml;n huolehtimisen taitoja olisi hyv&auml; tiet&auml;&auml; ja osata? Mit&auml; muuta ottaisit mukaasi, kun l&auml;hdet seikkailuun/ratkaisemaan teht&auml;vi&auml;? Mit&auml; on otettava huomioon, ennen kuin pakkaa mit&auml;&auml;n mukaan? T&auml;ss&auml; kohtaa keskustelua voi halutessaan laajentaa ylip&auml;&auml;t&auml;&auml;n siihen, miten matkalle l&auml;ht&ouml;&ouml;n pit&auml;&auml; valmistautua.</li>
        <li>Onko matkakaverillasi kenties joitain erikoisosaamisia tai -taitoja? Ent&auml;p&auml; sinulla? Mit&auml; taitoja sinulla on? Mit&auml; taidot oikeastaan tarkoittavat? Miksi tarvitsemme erilaisia taitoja? Onko meill&auml; jokin taito heti kun synnymme? Ent&auml; ennen sit&auml;? Voiko taidon menett&auml;&auml;?</li>
        <li>Onko taitoja, joita haluaisit seikkailun aikana harjoitella?</li>
        <li>Voit my&ouml;s nimet&auml; matkakaverisi ja mietti&auml;, kuinka olet h&auml;neen tutustunut, l&ouml;yt&auml;nyt vai l&ouml;ysik&ouml; h&auml;n sinut? Meill&auml; jokaisella on oma tarinamme, historia. Mik&auml; on sinun historiasi?</li>
      </ul>
      <p>N&auml;it&auml; kysymyksi&auml; voitte k&auml;sitell&auml; ryhm&auml;ss&auml; haluamallanne tavalla, esim. keskustelemalla, saduttamalla, piirt&auml;m&auml;ll&auml;, liikkumalla, musiikin/laulujen avulla.</p>
    </div>
  );
}

export default Kindergarten;
