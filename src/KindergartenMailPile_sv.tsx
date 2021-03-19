import React from 'react';
import translate from './translate';
import militaryMail from './military_mail.png';
import letter from './letter.jpg';
import letterTranscript from './letter_transcript.png';

const KindergartenMailPile_sv = (): JSX.Element => {
  return (
    <div>
      <p><mark>”Lotta!” ropar Harmonia och plockar med tassarna upp en hög gamla brev ur resväskan. ”Är det brev till jultomten?” frågar Oodi. Lotta tar knippet med brev och öppnar det bleka, blå sidenbandet runt dem. ”Fältpost ...”, läser Lotta högt. Tillsammans funderar vännerna på vem som skickat brev till mormor.</mark></p>
      <p>Fältpost</p>
      <img className="large" src={militaryMail} alt={translate ('military_mail')}/>
      <p><em>“Arbetet för soldaternas välbefinnande omfattade bland annat att skicka paket och hälsningar, tjänstgöra vid militärsjukhus, att underhålla och sälja frontmännens träsniderier.”<br/><br/></em> (<a target="_blank" rel="noreferrer" href="https://www.lottasvard.fi/lottagalleria/lottajarjeston-jaostot/#!/toimistojaviesti">Lottajärjestön jaostot - Lotta Svärd - Verkkomuseo (lottasvard.fi)</a><em>)</em></p>
      <p><em>“Under kriget organiserade smålottorna programkvällar för migranters och reservisters barn, och de tillverkade presenter till dem. De skrev brev och julkort till okända soldater och skickade paket. ”<br/><br/></em> (Pikkulotan leikit, Perinneleikit & Lottamuseo, 2017))</p>
      <p><em>“En kontorssektion som hade hand om meddelandetjänster grundades, eftersom kriget gjorde att behovet uppstod. Lottorna arbetade mycket med tekniskt arbete. Målet var nämligen att befria så många män som möjligt från tekniska uppgifter för att kunna skicka dem till fronten. Under kriget arbetade kontorslottor bland annat som maskinskrivare och kontorsassistenter. De skötte katalogiseringar och fungerade som postiljoner och kartritare.”</em></p>
      <p><em>“Lottor som tjänstgjorde inom kommunikation kunde fungera som telefonoperatörer, som radiolotta, fjärrskrivare eller kryptograf (skicka hemliga meddelanden via kodspråk). Lottorna som arbetade i krigszonen var vanligtvis stationerade i meddelandebataljonerna där de förmedlade meddelanden.”<br/><br/></em> (<a target="_blank" rel="noreferrer" href="https://www.lottasvard.fi/lottagalleria/lottajarjeston-jaostot/#!/toimistojaviesti">Lottajärjestön jaostot - Lotta Svärd - Verkkomuseo (lottasvard.fi)</a>)</p>
      <p><strong>Ett brev till mormor från lottan Airi</strong></p>
      <img className="large" src={letter} alt={translate ('letter')}/>
      <img className="large" src={letterTranscript} alt={translate ('letter')}/>
      <p>Tips på uppgifter:</p>
      <ul>
        <li>Fundera tillsammans och förklara varför man skriver brev? Har du skrivit eller själv fått brev? Vilka saker behövs för att skriva och skicka ett brev? Hur kommer brevet fram? Vad är det för skillnad mellan ett brev och ett vykort? Ni kan alla göra varsitt kort eller brev och skicka hem det till alla i gruppen. Lyckades det?</li>
        <li>På vilka andra sätt kan man sända ett meddelande? Kan man skicka ett meddelande någonstans på ett snabbare sätt än med vanlig post? Gör ett test: Skicka en hälsning till samma adress på två olika sätt och jämför tiden mellan att man skickat och meddelandet kommer fram.</li>
        <li><a target="_blank" rel="noreferrer" href="https://www.lottamuseo.fi/jata-tervehdyksesi-lotille-ja-pikkulotille/">Skicka en hälsing åt lottorna eller åt smålottorna - Lottamuseet</a></li>
        <li>Kan post vara mera än bara brev? Hur långt kan skicka något på posten? Vart skulle du vilja posta något? Vilken är den mest avlägsna plats som du fått post ifrån eller skickat post åt?</li>
        <li>Ta reda på hur man skickat meddelanden åt varandra både förr och nu (t.ex. genom röksignaler, flaskpost, brevduvor, telegraf, dator etc.)</li>
        <li>Hitta på ditt eget hemliga språk (kryptografi).</li>
        <li>Gör ett kort (t.ex. jul- eller påskkort) och skicka hälsningar till något närliggande åldringshem eller daghem.</li>
        <li><a target="_blank" rel="noreferrer" href="https://www.postimuseo.fi/sv/framsida/">Hem - postmuseet</a></li>
      </ul>
      <p><strong>KODUPPGIFT 4: Om man skriver ut klockslaget i bokstäver, vilken är den första siffrans tredje bokstav?</strong></p>
    </div>
  );
};

export default KindergartenMailPile_sv;
