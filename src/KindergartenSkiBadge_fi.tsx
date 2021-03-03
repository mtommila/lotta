import React from 'react';
import translate from './translate';
import skiBadge from './ski_badge.png';

const KindergartenSkiBadge_fi = (): JSX.Element => {
  return (
    <div>
      <p><mark>“Mikä tuolla matkalaukun pohjalla kiiltää ja kimaltaa?”, Oodi-orava ihmettelee. Oodi poimii kullanvärisen merkin käpäliinsä ja ihastuu siitä roikkuviin käpyihin. Yhdessä Oodi, Lotta ja Harmonia tutkivat matkalaukusta löytynyttä, hienoa korua. He pohtivat, mistäköhän Lotan isoisoäiti on tuollaisen kultaisen aarteen saanut.</mark></p>
      <p><strong>Lotta Svärdin kultainen hiihto- ja kävelymerkki</strong></p>
      <img className="large" src={skiBadge} alt={translate('ski_badge')}/>
      <p><em>Aivan kuten nykyisinkin, myös Lotta Svärd -järjestössä katsottiin, että hyvä fyysinen ja henkinen kunto paransivat ihmisten terveyttä ja elämänlaatua. Liikkumista kannustettiin eri tasoisin kuntomerkein. Isoilla lotilla oli oma hiihto- ja kävelymerkki, jonka sai omakseen suorittamalla tietyn haasteen. Paras oli kultainen kävelymerkki, josta roikkui kolme kultaista käpyä.</em></p>
      <p>(<a target="_blank" rel="noreferrer" href="https://www.nostalgisetnaiset.fi/sananen-lottajarjeston-merkeista/">Sananen Lottajärjestön merkeistä... - Nostalgiset Naiset</a>)<br /><br /><strong>Pohdinta-/Tehtävävinkkejä:</strong></p>
      <ul>
        <li>Suunnitelkaa ryhmässä yhteinen/jokaisen oma kuntomerkki. Mitä suunnittelussa tulisi ottaa huomioon? Esimerkiksi miten ja mihin se voidaan kiinnittää, mistä materiaalista, millä välineillä ja millaisin työtavoin sitä voidaan työstää ja toteuttaa? (<em>huom! monimateriaalisuus ja kierrätysmateriaalien hyödyntäminen</em>)</li>
      </ul>
      <ul>
        <li>Miten voit esimerkiksi tehdä näitä merkkejä?</li>
      </ul>
      <ul>
        <li>piirtämällä tai maalaamalla (laminoimalla ne kestävät paremmin käyttöä)</li>
        <li>askartelemalla (2- tai 3-ulotteisesti mm. savesta, pahvista, wc-rullista, luonnonmateriaaleista esim. punomalla heiniä/oksia)</li>
        <li>ompelemalla (huovasta, kankaista)</li>
      </ul>
      <p><em>Huom! monimateriaalisuus ja kierrätysmateriaalien hyödyntäminen</em></p>
      <ul>
        <li>Miettikää yhdessä minkä liikuntataidon/-taitoja ryhmän lapset haluaisivat opetella.</li>
      </ul>
      <p>Mistä liikuntamuodoista merkin voisi saada? Esim. sisä- tai ulkoliikuntaradan suorittaminen, kantapäillä kävely, varpailla kävely, kuperkeikka, sovitun mittaisen reitin kävely/juoksu/hyppely.</p>
      <ul>
        <li>Pitäkää päiväkodin muille ryhmille liikuntatuokio, jossa taitoa opetellaan, tai tehkää heille liikuntarata sisälle tai ulos jne.</li>
      </ul>
      <ul>
        <li>Pitäkää päiväkodin yhteinen ulkoilupäivä, jossa on erilaisia toimintapisteitä, joiden tehtäviä suorittamalla voi ansaita oman kuntomerkin.</li>
      </ul>
      <ul>
        <li>Toimintaradan/-tuokion voi pitää vaikka metsässä/päiväkodin pihalla ja pohtia, mikä liikuntamuoto siellä olisi se, josta kuntomerkin saa (luontoparkour, tasohyppelypeli).</li>
      </ul>
      <ul>
        <li>Antakaa lapsille “kotitehtäväksi” pitää kotona joku vastaavanlainen liikuntatuokio, josta sisarukset ja vanhemmat voivat ansaita omat kuntomerkkinsä. Lapset voivat päiväkodissa askarrella merkit valmiiksi.</li>
      </ul>
      <p>Tehtäviin voi liittää mukaan lähiympäristöä, luontoretkiä. Tärkeintä on huomioida, että kaikki pääsevät osallistumaan ja tekemään yhdessä ja erikseen, isommassa ja pienemmässä ryhmässä, omien taitojensa mukaan.</p>
      <p><strong>KOODITEHTÄVÄ 1.: Minkä ison kirjaimen löydät merkistä?</strong></p>
    </div>
  );
};

export default KindergartenSkiBadge_fi;
