import React from 'react';
import { Link } from 'react-router-dom';
import translate from './translate';
import styles from './Child.module.css';
import girl from './coloring_girl_color.jpg';
import mouse from './coloring_mouse_color.jpg';
import squirrel from './coloring_squirrel_color.jpg';
import coloringGirl from './coloring_girl.jpg';
import coloringMouse from './coloring_mouse.jpg';
import coloringSquirrel from './coloring_squirrel.jpg';

const Elementary_fi = () => {
  return (
    <div>
      <h1>Ullakon salaisuus -seikkailu</h1>
      <p><strong>Lotan isoisoäidin pimeällä ullakolla on vanha matkalaukku, johon kukaan ei saa koskea. Kenen tuo matkalaukku on, ja mitä siellä on sisällä? Kiivetkää ullakolle Lotta-tytön kanssa, ja selvittäkää yhdessä Ullakon salaisuus lapsiryhmänne/luokkanne kanssa. Apureina teillä on nuoremmille lapsille tarkoitetuissa osioissa lisäksi ullakolla asuvat Harmonia-Hiiri ja Oodi-Orava. </strong></p>
      <img className={styles.coloring} src={girl} alt={translate('lotta')}/>
      <img className={styles.coloring} src={mouse} alt={translate('harmonia')}/>
      <img className={styles.coloring} src={squirrel} alt={translate('oodi')}/>
      <p>Lähtekää mukaan selvittämään, mikä Ullakon salaisuus on. Samalla tavoitteena on tutustua ja oppia asioita mm. Suomen historiasta, perinteistä ja kulttuurista erilaisten toiminnallisten tehtävien kautta, joita opettajat voivat yhdessä lasten kanssa tutkia, suunnitella ja toteuttaa kaikkia osallistaen.Tämän tehtävävinkkipaketin ideoinnin tavoitteena on ollut huomioida mahdollisimman paljon laaja-alaisen osaamisen eri osa-alueita. Paketista löytyy kolme eri osiota, joiden tehtävät on suunnattu eri ikäryhmille:</p>
      <p><mark>Viiden osion lopusta löytyy lisäksi kooditehtävä. Koodin ratkaistuasi paljastuu lopulta Ullakon perimmäinen salaisuus. Järjestäkää selvittämänne koodikirjaimet niin, että niistä muodostuu sana. Laittakaa tämä sana matkalaukussa olevaan koodille varattuun kohtaan.</mark></p>
      <p><strong>Alakoulun Ullakon salaisuus -seikkailu alkaa tästä:</strong></p>
      <Link to="/ala-aste/lotta"><img className={styles.coloring} src={coloringGirl} alt={translate('coloring_image')}/></Link>
      <Link to="/ala-aste/harmonia"><img className={styles.coloring} src={coloringMouse} alt={translate('coloring_image')}/></Link>
      <Link to="/ala-aste/oodi"><img className={styles.coloring} src={coloringSquirrel} alt={translate('coloring_image')}/></Link>
      <p>Ennen seikkailuun lähtöä jokainen voi luoda itselleen oman matkaoppaansa tai matkakaverinsa. Vain mielikuvitus on rajana, kuinka hahmot voidaan toteuttaa ja koristella. Hahmot voivat olla joko samat kuin materiaalipaketissa, tai sitten hahmoksi voi valita toisen tai keksiä vallan itse jonkun ihan muunlaisen.</p>
      <ul>
        <li>piirtämällä</li>
      </ul>
      <ul>
        <li>maalaamalla (Hahmot voidaan leikata ja laminoida, jotta ne kestävät paremmin käyttöä.)</li>
      </ul>
      <ul>
        <li>askartelemalla (2- tai 3-ulotteisesti mm. savesta, pahvista, wc-rullista, luonnonmateriaaleista)</li>
      </ul>
      <ul>
        <li>ompelemalla (huovasta, kankaista, vanhoista sukista, sormikkaista ja lapasista)</li>
      </ul>
      <ul>
        <li>työstämällä puusta hahmon (vaneri + lehtisaha, lauta + saha, naulat, vasara + monimateriaalia koristeeksi)</li>
      </ul>
      <ul>
        <li>tutustukaa johonkin suunnitteluohjelmaan (esim. Tinkercad) ja toteuttakaa hahmot 3D-tulostuksena</li>
      </ul>
      <ul>
        <li>luokaa virtuaalinen hahmo, esim. sähköiseen portfolioon liitettäväksi</li>
      </ul>
      <p>Ennen projektin alkua/seikkailulle lähtöä voi olla hyvä pohtia omassa luokassa mm. seuraavanlaisia asioita:</p>
      <ul>
        <li>Mieti, millaisen matkakaverin haluaisit ja tarvitsisit mukaasi tehtävien suorittamiseen? Miksi on hyvä, jos joku on mukana? Mitä turvallisuusasioita ja itsestään huolehtimisen taitoja olisi hyvä tietää ja osata? Mitä muuta ottaisit mukaasi, kun lähdet seikkailuun/ratkaisemaan tehtäviä? Mitä on otettava huomioon, ennen kuin pakkaa mitään mukaan? Tässä kohtaa keskustelua voi halutessaan laajentaa ylipäätään siihen, miten matkalle lähtöön pitää valmistautua.</li>
      </ul>
      <ul>
        <li>Onko matkakaverillasi kenties joitain erikoisosaamisia tai -taitoja? Entäpä sinulla? Mitä taitoja sinulla on? Mitä taidot oikeastaan tarkoittavat? Miksi tarvitsemme erilaisia taitoja? Onko meillä jokin taito heti kun synnymme? Entä ennen sitä? Voiko taidon menettää?</li>
      </ul>
      <ul>
        <li>Onko taitoja, joita haluaisit seikkailun/projektin aikana harjoitella?</li>
      </ul>
      <ul>
        <li>Voit myös nimetä matkakaverisi ja miettiä, kuinka olet häneen tutustunut, löytänyt vai löysikö hän sinut? Meillä jokaisella on oma tarinamme, historia. Mikä on sinun historiasi? Tee oma sukupuusi.</li>
      </ul>
      <p>Näitä kysymyksiä voitte käsitellä luokassa haluamallanne tavalla, esim. keskustelemalla, saduttamalla, piirtämällä, liikkumalla, musiikin/laulujen avulla, etsimällä tarvitsemaasi tietoa eri tietolähteistä</p>
    </div>
  );
};

export default Elementary_fi;
