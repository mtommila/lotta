import React from 'react';
import translate from './translate';
import militaryMail from './military_mail.png';
import letter from './letter.jpg';
import letterTranscript from './letter_transcript.png';

const ElementaryMailPile_sv = (): JSX.Element => {
  return (
    <div>
      <p><mark>”Lotta!” ropar Harmony och plockar upp en massa gamla brev från resväskan med tassarna. ”Är det brev till jultomten?” Frågar Oodi. Lotta tar ett brevpaket och öppnar det bleka, blå sidenbandet runt dem. ”Fältpost ...”, läser Lotta högt. Tillsammans funderar vänner, blommans blommor har skickats till mormor.</mark></p>
      <p>Fältpost</p>
      <img className="large" src={militaryMail} alt={translate ('military_mail')}/>
      <p><em>“Underhållsarbetet för militären innefattade att skicka paket och hälsningar, betjäna militära sjukhus, underhålla och sälja rengöringsmedel i frontlinjen.”</em> <a target="_blank" rel="noreferrer" href="https: //www.lottasvard.fi/lottagalleria/lottajarjeston-jaostot/#! / kerays-ja-hooldtojaosto">Lottaorganisationens kamrar - Lotta Svärd - Onlinemuseet (lottasvard.fi)</a></p>
      <p><em>”Med krigsutbrottet behövde staber, servicefaciliteter och många utposter av hemtrupper personal som var vana vid kontorsarbete och behovet av kansleri ökade plötsligt. Förutom kontorsuppgifter behövdes kontorslotteriet under kriget i fältpost och brevcensur.</em></p>
      <p><em>Kontors- och meddelandeavdelningen grundades för krigstid. Inom de tekniska områdena behövdes mycket lotteriarbete, målet var att befria så många män som möjligt från tekniska uppgifter till fronten. Under kriget arbetade kontorslotter bland annat som skrivare, kontorsassistenter, kortchefer, postbrev och kartlådor.</em></p>
      <p><em>Företagsnamnen på meddelandepartierna inkluderade samtalsmäklare, radiolotteri, fjärrskrivarlotteri och kryptografiskt lotteri. Lotterierna som arbetade i krigszonen var vanligtvis stationerade i meddelandebataljonerna för de faktiska budskapskrafterna. ”</em> <a target="_blank" rel="noreferrer" href="https://www.lottasvard.fi/lottagalleria/lottajarjeston-jaostot/#!/toimistojaviesti">Lotta Association Chambers - Lotta Svärd - Online Museum (Lottasvard .fi)</a></p>
      <p>Ett brev från Airi-lotteriet till sin mormor</p>
      <img className="large" src={letter} alt={translate ('letter')}/>
      <img className="large" src={letterTranscript} alt={translate ('letter')}/>
      <p>Tänkande / uppgiftstips:</p>
      <ul>
        <li>Tänk tillsammans för att ta reda på varför brev skrivs? Har du skrivit eller fått ett brev själv? Vad / varför behövs saker för att skriva och skicka ett brev? Hur kommer brevet? Vad är till exempel skillnaden mellan ett brev och ett vykort? Du kan skapa var och en ditt eget kort eller brev och skicka ett kort / brev till varje hem i barngruppen. Lyckades du?</li>
      </ul>
      <ul>
        <li>Hur skulle jag annars kunna skicka ett meddelande? Kan ett meddelande skickas till samma plats snabbare än ett vanligt brev? Ta ett test: Skicka en hälsning till samma adress på två olika sätt och jämför ankomstdatum / tider.</li>
      </ul>
      <ul>
        <li><a target="_blank" rel="noreferrer" href="https://www.lottamuseo.fi/jata-tervehdyksesi-lotille-ja-pikkulotille/">Lämna dina hälsningar för partiet och det lilla partiet - Lottamuseo</a></li>
      </ul>
      <ul>
        <li>Kan e-post innehålla mer än bara brev? Hur långt kan mail skickas? Var vill du skicka e-post om det var möjligt? Vad är det längsta stället du har fått e-post?</li>
      </ul>
      <ul>
        <li>Ta reda på hur andra meddelanden har skickats och kan tas emot och tas emot i modern tid (t.ex. röksignaler, flaskpost, duvor, elektrifiering, dator etc.)</li>
      </ul>
      <ul>
        <li>Kom med din egen kryptografi.</li>
      </ul>
      <ul>
        <li>Gör kort (t.ex. jul / påsk) och skicka hälsningar till närliggande vårdhem eller daghem.</li>
      </ul>
      <ul>
        <li>Skapa en brevlåda i klassen och genomför ett ”Secret Friend” -projekt där alla väljer en hemlig vän som till exempel brev / kort / fina saker skrivs under en vecka eller två. Klassens brevlåda töms regelbundet och bokstäver / kort används för att gissa en hemlig vän.</li>
      </ul>
      <ul>
        <li>Skaffa en klasskorrespondensklass från en annan plats.</li>
      </ul>
      <ul>
        <li><a target="_blank" rel="noreferrer" href="https://www.postimuseo.fi/">Hem - postmuseet</a></li>
      </ul>
      <p><strong>KODUPPGIFT 4: Vilken bokstav är den tredje bokstaven i den skriftliga formen för tidens första siffra?</strong></p>
    </div>
  );
};

export default ElementaryMailPile_sv;
