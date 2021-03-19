import React from 'react';
import translate from './translate';
import militaryMail from './military_mail.png';
import letter from './letter.jpg';
import letterTranscript from './letter_transcript.png';

const HighschoolMailPile_sv = (): JSX.Element => {
  return (
    <div>
      <p>Fältpost</p>
      <img className="large" src={militaryMail} alt={translate ('military_mail')}/>
      <p><em>“Arbetet för soldaternas välbefinnande omfattade bland annat att skicka paket och hälsningar, tjänstgöra vid militärsjukhus, att underhålla och att sälja frontmännens träsniderier..”</em> <a target="_blank" rel="noreferrer" href="https: //www.lottasvard.fi/lottagalleria/lottajarjeston-jaostot/#! / kerays-ja-hooldtojaosto">Lottajärjestön jaostot - Lotta Svärd - Verkkomuseo (lottasvard.fi)</a></p>
      <p><em>”I och med krigsutbrottet behövde staber, servicefaciliteter och många andra verksamhetspunkter personal som var vana vid kontorsarbete, och behovet av lottor som kunde tjänstgöra på kanslier växte snabbt. Kontorslottorna fungerade, förutom som kanslipersonal, under krigstid som fältpostiljoner och inom brevcensuren.</em></p>
      <p><em>En kontorssektion som hade hand om signaltjänster grundades, eftersom kriget gjorde att behovet av en sådan uppstod. Lottorna arbetade mycket med tekniskt arbete. Man ville nämligen befria så många män som möjligt från tekniska uppgifter för att kunna skicka dem till fronten. Under kriget arbetade kontorslottor bland annat som maskinskrivare och kontorsassistenter. De skötte katalogiseringar och fungerade som postiljoner och kartritare..</em></p>
      <p><em>Lottor inom signaltjänst arbetade som telefonoperatörer, radiolottor, fjärrskrivare och kryptografer. Lottorna som arbetade i krigszonen var vanligtvis stationerade i signalbataljonerna där de förmedlade meddelanden. ”</em> <a target="_blank" rel="noreferrer" href="https://www.lottasvard.fi/lottagalleria/lottajarjeston-jaostot/#!/toimistojaviesti">Lottajärjestön jaostot - Lotta Svärd - Verkkomuseo (lottasvard.fi)</a></p>
      <p>Ett brev till mormor från lottan Airi</p>
      <img className="large" src={letter} alt={translate ('letter')}/>
      <img className="large" src={letterTranscript} alt={translate ('letter')}/>
      <p>Förslag till uppgifter:</p>
      <ul>
        <li>Fundera tillsammans och förklara varför man skriver brev? Har du skrivit eller själv fått brev? Vilka saker behövs för att skriva och skicka ett brev? Hur kommer brevet fram?</li>
      </ul>
      <ul>
        <li>Vad betyder posthemlighet/brevhemlighet?</li>
      </ul>
      <ul>
        <li>På vilka andra sätt kan man sända ett meddelande? Kan man skicka ett meddelande någonstans på ett snabbare sätt än med vanlig post? Gör ett test: Skicka en hälsning till samma adress på två olika sätt och jämför tiden mellan att man skickat och meddelandet kommer fram.</li>
      </ul>
      <ul>
        <li>Fundera på sociala medier. Vad innebär ansvarsfullt, säkert och etiskt beteende där?</li>
      </ul>
      <ul>
        <li>Gör ett test hur snabbt och omfattande en bild med tillhörande meddelande sprids om du till exempel publicerar den på Facebook.</li>
      </ul>
      <ul>
        <li><a target="_blank" rel="noreferrer" href="https://www.lottamuseo.fi/jata-tervehdyksesi-lotille-ja-pikkulotille/">Jätä tervehdyksesi lotille ja pikkulotille - Lottamuseo</a></li>
      </ul>
      <ul>
        <li>Ta reda på hur man skickat meddelanden åt varandra både förr och nu (t.ex. genom röksignaler, flaskpost, brevduvor, telegraf, dator etc.)</li>
      </ul>
      <ul>
        <li>Diskutera varför kommunikation är så viktig för människor? Vilka grupper får inga meddelanden i vardagen? Tillverka kort (t.ex. jul/påsk) och skicka dem till ett närliggande vårdhem.</li>
      </ul>
      <ul>
        <li>En av lottornas uppgifter vid fronten var att leverera paket. Idag distribuerar Lotta Svärd -Stiftelsen och många andra organisationer eller föreningar olika välgörenhetspaket, till exempel till ekonomiskt utsatta familjer. Ta reda på vilka olika sätt man kan skicka välgörenhetspaket på. Vill ni som klass delta i något projekt med att samla ihop och skicka välgörenhetspaket? Eller finns det andra sätt att hjälpa behövande?</li><br/>
        <a target="_blank" rel="noreferrer" href="https://www.lottasvard.fi/lottagalleria/lottajarjeston-jaostot/#!/toimistojaviesti">Lottajärjestön jaostot - Lotta Svärd - Verkkomuseo (lottasvard.fi)</a>
      </ul>
      <ul>
        <li><a target="_blank" rel="noreferrer" href="https://www.postimuseo.fi/">Hemsida - Postmuseet</a></li>
      </ul>
    </div>
  );
};

export default HighschoolMailPile_sv;
