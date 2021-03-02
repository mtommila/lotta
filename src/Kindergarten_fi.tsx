import React from 'react';
import { Link } from 'react-router-dom';
import translate from './translate';
import './Child.css';
import girl from './coloring_girl_color.jpg';
import mouse from './coloring_mouse_color.jpg';
import squirrel from './coloring_squirrel_color.jpg';
import coloringGirl from './coloring_girl.jpg';
import coloringMouse from './coloring_mouse.jpg';
import coloringSquirrel from './coloring_squirrel.jpg';

const Kindergarten_fi = () => {
  return (
    <div>
      <h1>Ullakon salaisuus -seikkailu</h1>
      <p><strong>Lotan mummolan pimeällä ullakolla on vanha matkalaukku, johon kukaan ei ole saanut koskea. Kenen tuo matkalaukku on ja mitä siellä on sisällä? Kiivetkää ullakolle Lotta-tytön kanssa ja selvittäkää yhdessä Ullakon salaisuus lapsiryhmänne kanssa. Apureina teillä on lisäksi ullakolla asuvat Harmonia-Hiiri ja Oodi-Orava. </strong></p>
      <img className="coloring" src={girl} alt={translate('lotta')}/>
      <img className="coloring" src={mouse} alt={translate('harmonia')}/>
      <img className="coloring" src={squirrel} alt={translate('oodi')}/>
      <p>Lähtekää mukaan selvittämään, mikä Ullakon salaisuus on. Samalla tavoitteena on tutustua ja oppia asioita mm. Suomen historiasta, perinteistä ja kulttuurista erilaisten toiminnallisten tehtävien kautta, joita voitte yhdessä tutkia, suunnitella ja toteuttaa kaikkia osallistaen.Tämän tehtävävinkkipaketin ideoinnin tavoitteena on ollut huomioida mahdollisimman paljon laaja-alaisen osaamisen eri osa-alueita. Paketista löytyy kolme eri osiota (päiväkoti, ala- ja yläkoulu) , joiden tehtävät on suunnattu eri ikäryhmille. Kaikista osioista voi vapaasti valita tehtäviä omaan opetukseen.</p>
      <p><mark>Viiden osion lopusta löytyy lisäksi kooditehtävä. Koodin ratkaistuasi paljastuu lopulta Ullakon perimmäinen salaisuus. Järjestäkää selvittämänne koodikirjaimet niin, että niistä muodostuu sana. Laittakaa tämä sana matkalaukussa olevaan koodille varattuun kohtaan.</mark></p>
      <p><strong>Päiväkodin Ullakon salaisuus -seikkailu alkaa tästä: (tämä lause tulee matkalaukkuun yhteen klikkauspompulaksi) =&gt;aukeaa sivu, jossa hahmot ja hahmotehtävät sekä alkutarina</strong></p>
      <Link to="/paivakoti/lotta"><img className="coloring" src={coloringGirl} alt={translate('coloring_image')}/></Link>
      <Link to="/paivakoti/harmonia"><img className="coloring" src={coloringMouse} alt={translate('coloring_image')}/></Link>
      <Link to="/paivakoti/oodi"><img className="coloring" src={coloringSquirrel} alt={translate('coloring_image')}/></Link>
      <p>Ennen seikkailuun lähtöä jokainen voi luoda itselleen oman matkaoppaansa tai matkakaverinsa. Vain mielikuvitus on rajana, kuinka hahmot voidaan toteuttaa ja koristella. Hahmoiksi voit valita Lotan, Oodin tai Harmonian, tai sitten keksiä itse jonkun ihan oman. <br /><br /> Hahmoja voi valmistaa:</p>
      <ul>
        <li>piirtämällä</li>
        <li>maalaamalla (laminoimalla ne kestävät paremmin käyttöä)</li>
        <li>askartelemalla (2- tai 3-ulotteisesti mm. savesta, pahvista, wc-rullista, luonnonmateriaaleista)</li>
        <li>ompelemalla (huovasta, kankaista, vanhoista sukista, sormikkaista ja lapasista)</li>
        <li>työstämällä puusta (vaneri + lehtisaha, lauta + saha, naulat, vasara + monimateriaalia koristeeksi)</li>
      </ul>
      <p>Ennen projektin alkua/seikkailulle lähtöä voi olla hyvä pohtia omassa lapsiryhmässä mm. seuraavanlaisia asioita:</p>
      <ul>
        <li>Mieti, millaisen matkakaverin haluaisit ja tarvitsisit mukaasi tehtävien suorittamiseen? Miksi on hyvä, jos joku on mukana? Mitä turvallisuusasioita ja itsestään huolehtimisen taitoja olisi hyvä tietää ja osata? Mitä muuta ottaisit mukaasi, kun lähdet seikkailuun/ratkaisemaan tehtäviä? Mitä on otettava huomioon, ennen kuin pakkaa mitään mukaan?</li>
      </ul>
      <p><em>Tässä kohtaa keskustelua voi halutessaan laajentaa ylipäätään siihen, miten matkalle lähtöön pitää valmistautua.</em></p>
      <ul>
        <li>Onko matkakaverillasi kenties joitain erikoisosaamisia tai -taitoja? Entäpä sinulla? Mitä taitoja sinulla on? Mitä taidot oikeastaan tarkoittavat? Miksi tarvitsemme erilaisia taitoja? Onko meillä jokin taito heti kun synnymme? Entä ennen sitä? Voiko taidon menettää?</li>
        <li>Onko taitoja, joita haluaisit seikkailun aikana harjoitella?</li>
        <li>Voit myös nimetä matkakaverisi ja miettiä, kuinka olet häneen tutustunut, löytänyt vai löysikö hän sinut? <strong>Meillä jokaisella on oma tarinamme, historia. </strong>Mikä on sinun historiasi?</li>
      </ul>
      <p>Näitä kysymyksiä voitte käsitellä ryhmässä haluamallanne tavalla, esim. keskustelemalla, saduttamalla, piirtämällä, liikkumalla, musiikin/laulujen avulla.</p>
      <p>Pohtikaa ja päättäkää yhdessä myös, millä tavalla aiotte dokumentoida ryhmänne matkaa ullakolla.</p>
    </div>
  );
};

export default Kindergarten_fi;
