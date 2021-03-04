import React from 'react';
import translate from './translate';
import breadRecipe from './bread_recipe.png';

const ElementaryBreadRecipe_sv = (): JSX.Element => {
  return (
    <div>
      <p>Catering</p>
      <p>“<em>Hösten 1938 planerades ekonomiska tjänster under krigstid i Försvarsdepartementets militära ekonomiavdelning. När designarbetet utvecklades märktes det att det skulle vara omöjligt att leverera tillräckligt med bröd till fältarmén om driften av stora bagerier störs, till exempel på grund av strömavbrott. För att säkra brödbakningen bad militärekonomiska avdelningen vid försvarsministeriet Lotta om hjälp. Loths bakar bröd under extra repetitioner och vinterkriget. Till exempel, hela vintern 1939 bakade lotteridistrikten totalt 81.000 pund bröd, initialt upp till 103.000 pund per dag. Detta enorma bakningskontrakt gjordes som obetalt lotteriarbete. Försvarsmakten ersatte andra kostnader för att baka bröd.</em> ”<a target =" _ blank "rel =" noreferrer "href =" https://www.lottasvard.fi/lottagalleria/lottajarjeston-jaostot/#!/muonitusjaosto">Avdelningar från Lotta Association - Lotta Svärd - Online Museum lottasvard.fi</a></p>
      <p>I Pikkulot, ”<em>i restaurangavdelningen, arbetade arbetet med att laga mat, deka bordet och vägleda grunderna för servering</em>.” <a target="_blank" rel="noreferrer" href="https://www.lottasvard.fi / lottagalleria / lottajarjeston-jaostot / #! / pikkulotat">Lottaorganisationens kamrar - Lotta Svärd - Onlinemuseet (lottasvard.fi)</a></p>
      <p><mark>Det finns talkos i grannskapet. Det är bara en matpaus. Korvarna stekas och deras underbara arom svävar upp till vinden. Lotta hittar ett gammalt häfte i sin resväska, som hon rullar tillsammans med Harmonia och Oodi. ”Rågknäckebröd,” läser Lotta högt. ”Det här är mormors gamla recepthäfte!” Lotanks mage börjar anstränga sig.</mark></p>
      <p><strong>Massor av knäckebrödrecept</strong></p>
      <img className="large" src={breadRecipe} alt={translate ('bread_recipe')}/>
      <p>Tänkande / uppgiftstips:</p>
      <ul>
        <li>Tänk med eleverna Varför äts mat / Varför är mat viktigt?</li>
      </ul>
      <ul>
        <li>Till exempel kan en skålmall användas för att diskutera olika livsmedel (t.ex. kött, fisk, mejeriprodukter, spannmål etc.)
          <ul>
            <li>Skapa din egen tallriksdesign, till exempel genom att klippa bilder från tidskrifter, rita dig själv, forma magisk deg (instruktioner för magisk deg kan enkelt hittas online), etc.</li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>Var får jag mat? Kolla in rutterna för olika livsmedel, till exempel, på Food Route-sidorna</li>
      </ul>
      <ul>
        <li><a target="_blank" rel="noreferrer" href="https://www.ruokatieto.fi/ruokakasvatus/ruuan-reitti-ruokakasvatusta-alakouluille">https://www.ruokatieto.fi/ruokakasvatus / mat-väg-mat-utbildning-grundskolor</a></li>
        <li>Ta reda på vägen för mat i människokroppen (t.ex. genom Heureka-utställningar)</li>
        <li><a target="_blank" rel="noreferrer" href="https://www.ruokatieto.fi/ruokakasvatus/ruokaketju-ruuan-matka-pellolta-poyetaan/ravusmus-ja-ruuan-valinta/ruuansulatus">Matsmältning Food Information Association</a></li>
        <li><a target="_blank" rel="noreferrer" href="https://peda.net/lahti/schools/carpan/subjects/biology/human/ Digestion">Digestion (peda.net)</a></li>
      </ul>
      <ul>
        <li>Vilka livsmedel kan du odla själv?
          <ul>
            <li>Följ tillväxten av en enkel växt genom att plantera till exempel en njurböna / korn</li>
            <li>Skapa din egen lilla grönsaks trädgård (i en filburk, frysbox etc.).</li>
            <li>Hemma kan du lägga en köpt kruksallad i en burk för att växa.</li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>Har du lagat mat eller hjälpt till med mat eller bakat något? Vad har du gjort? Med vem? Du kan till och med illustrera dina reflektioner genom att rita eller måla.</li>
      </ul>
      <ul>
        <li>Vad är ett recept? Vilken information finns i receptet? (T.ex. siffror, bokstäver, kvantiteter, tider och olika sätt att hantera mat) Var kan jag hitta recept? Kan receptet göras själv? Vid behov kan också skillnaden mellan ett recept och ett recept övervägas.</li>
      </ul>
      <ul>
        <li>Lär dig mer om hemmatskulturer, till exempel genom att ta med bilder / recept på dina favoriträtter, dela dina egna eller dina föräldrars matminnen etc.</li>
      </ul>
      <ul>
        <li>Vilket bestick behövs för att äta? Hur täcks bordet? Vad betyder det att täcka ett bord? Bestickets egna platser i bordsdekningen.
          <ul>
            <li>Skapa dina egna matfack som kan visa föremål som bestick eller några bilder som gör det lättare att äta. Underlag kan lamineras för bättre konservering.</li>
            <li>Öva på servettvikning. Vad är en servett och vad är dess syfte?</li>
          </ul>
        </li>
      </ul>
      <p><strong>KODUPPGIFT 3: Vilken bokstav är den femte bokstaven i den andra ingrediensen i receptet?</strong></p>
    </div>
  );
};

export default ElementaryBreadRecipe_sv;
