import React from 'react';
import translate from './translate';
import militaryMail from './military_mail.png';
import letter from './letter.jpg';
import letterTranscript from './letter_transcript.png';

const ElementaryMailPile_sv = (): JSX.Element => {
  return (
    <div>
      <p><mark>”Lotta!” ropar Harmonia och plockar med tassarna upp en hög gamla brev ur resväskan. ”Är det brev till jultomten?” frågar Oodi. Lotta tar knippet med brev och öppnar det bleka, blå sidenbandet runt dem. ”Fältpost ...”, läser Lotta högt. Tillsammans funderar vännerna på vem som skickat brev till mormor.</mark></p>
      <p>Fältpost</p>
      <img className="large" src={militaryMail} alt={translate ('military_mail')}/>
      <p><em>“Arbetet för soldaternas välbefinnande omfattade bland annat att skicka paket och hälsningar, tjänstgöra vid militärsjukhus, att underhålla och att sälja frontmännens träsniderier.”</em> <a target="_blank" rel="noreferrer" href="https: //www.lottasvard.fi/lottagalleria/lottajarjeston-jaostot/#! / kerays-ja-hooldtojaosto">Lottajärjestön jaostot - Lotta Svärd - Verkkomuseo (lottasvard.fi)</a></p>
      <p><em>”I och med krigsutbrottet behövde staber, servicefaciliteter och många andra verksamhetspunkter personal som var vana vid kontorsarbete, och behovet av lottor som kunde tjänstgöra på kanslier växte snabbt. Kontorslottorna fungerade, förutom som kanslipersonal, under krigstid som fältpostiljoner och inom brevcensuren.</em></p>
      <p><em>En kontorssektion som hade hand om signaltjänster grundades, eftersom kriget gjorde att behovet av en sådan uppstod. Lottorna arbetade mycket med tekniskt arbete. Man ville nämligen befria så många män som möjligt från tekniska uppgifter för att kunna skicka dem till fronten. Under kriget arbetade kontorslottor bland annat som maskinskrivare och kontorsassistenter. De skötte katalogiseringar och fungerade som postiljoner och kartritare.</em></p>
      <p><em>Lottor som tjänstgjorde inom kommunikation kunde fungera som telefonoperatörer, som radiolotta, fjärrskrivare eller kryptograf (skicka hemliga meddelanden via kodspråk). Lottorna som arbetade i krigszonen var vanligtvis stationerade i signalbataljonerna där de förmedlade meddelanden.”</em> <a target="_blank" rel="noreferrer" href="https://www.lottasvard.fi/lottagalleria/lottajarjeston-jaostot/#!/toimistojaviesti">Lottajärjestön jaostot - Lotta Svärd - Verkkomuseo (lottasvard.fi)</a></p>
      <p>Ett brev till mormor från lottan Airi</p>
      <img className="large" src={letter} alt={translate ('letter')}/>
      <img className="large" src={letterTranscript} alt={translate ('letter')}/>
      <p>Förslag till uppgifter:</p>
      <ul>
        <li>Fundera tillsammans och förklara varför man skriver brev? Har du skrivit eller själv fått brev? Vilka saker behövs för att skriva och skicka ett brev? Hur kommer brevet fram? Vad är det för skillnad mellan ett brev och ett vykort? Ni kan alla göra varsitt kort eller brev och skicka hem det till alla i gruppen. Lyckades det?</li>
      </ul>
      <ul>
        <li>På vilka andra sätt kan man sända ett meddelande? Kan man skicka ett meddelande någonstans på ett snabbare sätt än med vanlig post? Gör ett test: Skicka en hälsning till samma adress på två olika sätt och jämför tiden mellan att man skickat och meddelandet kommer fram.</li>
      </ul>
      <ul>
        <li><a target="_blank" rel="noreferrer" href="https://www.lottamuseo.fi/jata-tervehdyksesi-lotille-ja-pikkulotille/">Skicka en hälsing åt lottorna eller åt smålottorna - Lottamuseet</a></li>
      </ul>
      <ul>
        <li>Kan post vara mera än bara brev? Hur långt kan skicka något på posten? Vart skulle du vilja posta något? Vilken är den mest avlägsna plats som du fått post ifrån eller skickat post åt?</li>
      </ul>
      <ul>
        <li>Ta reda på hur man skickat meddelanden åt varandra både förr och nu (t.ex. genom röksignaler, flaskpost, brevduvor, telegraf, dator etc.)</li>
      </ul>
      <ul>
        <li>Hitta på ditt eget hemliga språk (kryptografi).</li>
      </ul>
      <ul>
        <li>Gör ett kort (t.ex. jul- eller påskkort) och skicka hälsningar till något närliggande åldringshem eller daghem.</li>
      </ul>
      <ul>
        <li>Konstruera en brevlåda i klassen och skapa ett ”Secret Friend” -projekt där alla får en hemlig vän. Sedan skriver alla vänliga brev eller kort åt sin vän i en vecka eller två. Klassens brevlåda töms regelbundet och sedan ska man gissa utgående från breven och lapparna vem som är ens hemliga vän.</li>
      </ul>
      <ul>
        <li>Ordna en klasskorrespondens med en skolklass på annan ort.</li>
      </ul>
      <ul>
        <li><a target="_blank" rel="noreferrer" href="https://www.postimuseo.fi/">Hemsida - postmuseet</a></li>
      </ul>
      <p><strong>KODUPPGIFT 4: Om man skriver ut klockslaget i bokstäver, vilken är den första siffrans tredje bokstav?</strong></p>
    </div>
  );
};

export default ElementaryMailPile_sv;
