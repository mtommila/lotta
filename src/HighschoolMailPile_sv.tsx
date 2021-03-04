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
      <p><em>“Underhållsarbetet för militären innefattade att skicka paket och hälsningar, betjäna militära sjukhus, underhålla och sälja rengöringsmedel i frontlinjen.”</em> <a target="_blank" rel="noreferrer" href="https: //www.lottasvard.fi/lottagalleria/lottajarjeston-jaostot/#! / kerays-ja-hooldtojaosto">Lottaorganisationens kamrar - Lotta Svärd - Onlinemuseet (lottasvard.fi)</a></p>
      <p><em>”Med krigsutbrottet behövde staber, servicefaciliteter och många utposter av hemtrupper personal som var vana vid kontorsarbete och behovet av kansleri ökade plötsligt. Förutom kontorsuppgifter behövdes kontorslotteriet under kriget i fältpost och brevcensur.</em></p>
      <p><em>Kontors- och meddelandeavdelningen grundades för krigstid. Inom de tekniska områdena behövdes mycket lotteriarbete, målet var att befria så många män som möjligt från tekniska uppgifter till fronten. Under kriget arbetade kontorslotter bland annat som skrivare, kontorsassistenter, kortchefer, postbrev och kartlådor.</em></p>
      <p><em>Företagsnamnen på meddelandepartierna inkluderade samtalsmäklare, radiolotteri, fjärrskrivarlotteri och kryptografiskt lotteri. Lotterierna som arbetade i krigszonen var vanligtvis stationerade i meddelandebataljonerna för de faktiska budskapskrafterna. ”</em> <a target="_blank" rel="noreferrer" href="https://www.lottasvard.fi/lottagalleria/lottajarjeston-jaostot/#!/toimistojaviesti">Lotta Association Chambers - Lotta Svärd - Online Museum (Lottasvard .fi)</a></p>
      <p>Ett brev från Air till farmor</p>
      <img className="large" src={letter} alt={translate ('letter')}/>
      <img className="large" src={letterTranscript} alt={translate ('letter')}/>
      <p>Tänkande / uppgiftstips:</p>
      <ul>
        <li>Tänk tillsammans för att ta reda på varför brev skrivs? Har du skrivit eller fått ett brev själv? Vad / varför behövs saker för att skriva och skicka ett brev? Hur får jag ett brev?</li>
      </ul>
      <ul>
        <li>Vad betyder bokstavssekretess?</li>
      </ul>
      <ul>
        <li>Hur skulle meddelandet annars kunna skickas? Kan jag skicka ett meddelande till samma plats snabbare än med vanlig post? Ta ett test: Skicka en hälsning till samma adress på två olika sätt och jämför ankomstdatum / tider.</li>
      </ul>
      <ul>
        <li>Tänk på sociala medier. Vad är ansvarsfullt, säkert och etiskt beteende?</li>
      </ul>
      <ul>
        <li>Testa hur snabbt och omfattande bilden + meddelandet du till exempel publicerar på Facebook fortskrider.</li>
      </ul>
      <ul>
        <li><a target="_blank" rel="noreferrer" href="https://www.lottamuseo.fi/jata-tervehdyksesi-lotille-ja-pikkulotille/">Lämna dina hälsningar för partiet och det lilla partiet - Lottamuseo</a></li>
      </ul>
      <ul>
        <li>Ta reda på hur andra meddelanden har skickats och kan tas emot och tas emot i modern tid (t.ex. röksignaler, flaskpost, brevduvor, elektrifiering, dator etc.)</li>
      </ul>
      <ul>
        <li>Diskutera varför kommunikation är viktig för människor? Vilken grupp av människor får inte meddelanden i det dagliga livet? Gör kort (t.ex. jul / påsk) och skicka hälsningar till närliggande vårdhem.</li>
      </ul>
      <ul>
        <li>Lotti var också i frontlinjen för att leverera paket. Idag distribuerar Lotta Svärd och många andra organisationer / föreningar olika välgörenhetspaket, till exempel till ekonomiskt missgynnade familjer. Ta reda på vilka olika sätt det finns att skicka välgörenhetspaket. Vill du som klass delta i att stapla och skicka ett paket? Hittade du andra sätt att hjälpa de behövande?</li><br/>
        <a target="_blank" rel="noreferrer" href="https://www.lottasvard.fi/lottagalleria/lottajarjeston-jaostot/#!/toimistojaviesti">Lottaorganisationens kamrar - Lotta Svärd - Onlinemuseet (lottasvard.fi )</a>
      </ul>
      <ul>
        <li><a target="_blank" rel="noreferrer" href="https://www.postimuseo.fi/">Hem - postmuseet</a></li>
      </ul>
    </div>
  );
};

export default HighschoolMailPile_sv;
