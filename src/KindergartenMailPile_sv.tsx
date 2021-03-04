import React from 'react';
import translate from './translate';
import militaryMail from './military_mail.png';
import letter from './letter.jpg';
import letterTranscript from './letter_transcript.png';

const KindergartenMailPile_sv = (): JSX.Element => {
  return (
    <div>
      <p><mark>”Lotta!” ropar Harmony och plockar upp en massa gamla brev från resväskan med tassarna. ”Är det brev till jultomten?” Frågar Oodi. Lotta tar ett brevpaket och öppnar det bleka, blå sidenbandet runt dem. ”Fältpost ...”, läser Lotta högt. Tillsammans funderar vänner, blommans blommor har skickats till mormor.</mark></p>
      <p>Fältmeddelande</p>
      <img className="large" src={militaryMail} alt={translate ('military_mail')}/>
      <p><em>“Underhållsarbetet för militären omfattade att skicka paket och hälsningar, betjäna militärsjukhus, underhålla och sälja rengöringsmedel i frontlinjen.”<br/><br/></em> (<a target = " _ blank "rel =" noreferrer "href =" https://www.lottasvard.fi/lottagalleria/lottajarjeston-jaostot/#!/toimistojaviesti">Lottaorganisationens kamrar - Lotta Svärd - Onlinemuseet (lottasvard.fi)</a> <em>)</em></p>
      <p><em>“Under kriget organiserade de små lotterierna kvällar för invandrarnas och reservisternas barn och gjorde presenter till dem. De skrev brev och julkort till okända soldater och skickade paket. ”<br/><br/></em> (Pikkulota Games, Tradition Games Association & Lottamuseo, 2017))</p>
      <p><em>“Kontors- och meddelandeavdelningen grundades för krigstid. Inom de tekniska områdena behövdes mycket lotteriarbete, målet var att befria så många män som möjligt från tekniska uppgifter till fronten. Under kriget arbetade kontorslotter bland annat som skrivare, kontorsassistenter, kortchefer, fältsändare och kartmakare. ”</em></p>
      <p><em>“Företagsrubrikerna för meddelandepartierna inkluderade samtalsmäklare, radiolotteri, fjärrskrivarlotteri och kryptografiskt lotteri. Lotterierna som arbetade i krigszonen var vanligtvis stationerade i meddelandebataljonerna för de faktiska budskapskrafterna. ”<br/><br/></em> (<a target="_blank" rel="noreferrer" href="https://www.lottasvard.fi/lottagalleria/lottajarjeston-jaostot/#!/toimistojaviesti">Lottaföreningens avdelningar - Lotta Svärd - Onlinemuseet (lottasvard.fi)</a>)</p>
      <p><strong>Ett brev från ditt Airi-lotteri till din mormor</strong></p>
      <img className="large" src={letter} alt={translate ('letter')}/>
      <img className="large" src={letterTranscript} alt={translate ('letter')}/>
      <p>Tänkande / uppgiftstips:</p>
      <ul>
        <li>Tänk och förklara tillsammans varför brev skrivs? Har du skrivit eller fått ett brev själv? Vilka saker behövs för att skriva och skicka ett brev? Hur kommer brevet? Vad är till exempel skillnaden mellan ett brev och ett vykort? Du kan göra var och ett till ditt eget kort eller brev och skicka ett kort / brev till varje hem i barngruppen. Lyckades du?</li>
        <li>Hur skulle jag annars kunna skicka ett meddelande? Kan jag skicka ett meddelande till samma plats snabbare än med vanlig post? Ta ett test: Skicka en hälsning till samma adress på två olika sätt och jämför ankomstdatum / tider.</li>
        <li><a target="_blank" rel="noreferrer" href="https://www.lottamuseo.fi/jata-tervehdyksesi-lotille-ja-pikkulotille/">Lämna dina hälsningar för partiet och det lilla partiet - Lottamuseo</a></li>
        <li>Kan e-post innehålla mer än bara brev? Hur långt kan mail skickas? Var vill du skicka e-post om det var möjligt? Vad är den längsta platsen du har fått eller mailat?</li>
        <li>Ta reda på hur andra meddelanden har varit och kan skickas och tas emot nuförtiden (t.ex. röksignaler, flaskpost, brevduvor, elektrifiering, dator etc.)</li>
        <li>Kom med din egen kryptografi.</li>
        <li>Gör kort (t.ex. jul / påsk) och skicka hälsningar till närliggande vårdhem eller daghem.</li>
        <li><a target="_blank" rel="noreferrer" href="https://www.postimuseo.fi/">Hem - postmuseet</a></li>
      </ul>
      <p><strong>KODUPPGIFT 4: Vilken bokstav är den tredje bokstaven i den skriftliga formen för tidens första siffra?</strong></p>
    </div>
  );
};

export default KindergartenMailPile_sv;
