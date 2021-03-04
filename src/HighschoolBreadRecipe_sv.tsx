import React from 'react';
import translate from './translate';
import breadRecipe from './bread_recipe.png';

const HighschoolBreadRecipe_sv = (): JSX.Element => {
  return (
    <div>
      <p>Monfood</p>
      <p>“<em>Hösten 1938 planerades ekonomiska tjänster under krigstid i Försvarsdepartementets militära ekonomiavdelning. När designarbetet utvecklades märktes det att det skulle vara omöjligt att leverera tillräckligt med bröd till fältarmén om driften av stora bagerier störs, till exempel på grund av strömavbrott. För att säkra brödbakningen bad militärekonomiska avdelningen vid försvarsministeriet Lotta om hjälp. Loths bakar bröd under extra repetitioner och vinterkriget. Till exempel, hela vintern 1939 bakade lotteridistrikten totalt 81.000 pund bröd, initialt upp till 103.000 pund per dag. Detta enorma bakningskontrakt gjordes som obetalt lotteriarbete. Försvarsmakten ersatte andra kostnader för att baka bröd.</em> ”<a target =" _ blank "rel =" noreferrer "href =" https://www.lottasvard.fi/lottagalleria/lottajarjeston-jaostot/#!/muonitusjaosto">Avdelningar från Lotta Association - Lotta Svärd - Online Museum lottasvard.fi</a></p>
      <p>I Pikkulot, ”<em>i restaurangavdelningen, arbetade arbetet med att laga mat, deka bordet och vägleda grunderna för servering</em>.” <a target="_blank" rel="noreferrer" href="https://www.lottasvard.fi / lottagalleria / lottajarjeston-jaostot / #! / pikkulotat">Lottaorganisationens kamrar - Lotta Svärd - Onlinemuseet (lottasvard.fi)</a></p>
      <p>Knäckebrödrecept</p>
      <img className="large" src={breadRecipe} alt={translate ('bread_recipe')}/>
      <p>Tänkande / uppgiftstips:</p>
      <ul>
        <li>Tänk på en hälsosam kost och dess betydelse.</li>
      </ul>
      <ul>
        <li>Till exempel kan en skålmall användas för att diskutera olika livsmedel (t.ex. kött, fisk, mejeriprodukter, flingor etc.)</li>
      </ul>
      <ul>
        <li>Var får jag mat? Kolla in rutterna för olika livsmedel, till exempel, på Food Route-sidorna</li>
      </ul>
      <p>Användbara länkar:</p>
      <ul>
        <li><a target="_blank" rel="noreferrer" href="https://www.ruokatieto.fi/ruokakasvatus/ruuan-reitti-ruokakasvatusta-alakouluille">https://www.ruokatieto.fi/ruokakasvatus / mat-väg-mat-utbildning-grundskolor</a></li>
        <li>Ta reda på vägen för mat i människokroppen (t.ex. genom Heureka-utställningar)</li>
        <li><a target="_blank" rel="noreferrer" href="https://www.ruokatieto.fi/ruokakasvatus/ruokaketju-ruuan-matka-pellolta-poyetaan/ravusmus-ja-ruuan-valinta/ruuansulatus">Matsmältning Food Information Association</a></li>
        <li><a target="_blank" rel="noreferrer" href="https://peda.net/lahti/schools/carpan/subjects/biology/human/ Digestion">Digestion (peda.net)</a></li>
      </ul>
      <ul>
        <li>Vilka livsmedel kan du odla själv? Vilka förutsättningar kräver växter?
          <ul>
            <li>Följ tillväxten av en enkel växt genom att plantera till exempel en njurböna / korn</li>
            <li>Skapa din egen lilla grönsaks trädgård (i en filburk, frysbox etc.).</li>
            <li>Hemma kan du lägga en köpt kruksallad i en burk för att växa.</li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>Har du lagat mat eller hjälpt till med mat eller bakat något? Vad har du gjort? Med vem?</li>
      </ul>
      <ul>
        <li>Samla ett vanligt häfte med favoritrecept för klassen. Publicera broschyren som du vill, t.ex. en matblogg. Ta reda på vilken typ av receptböcker / publikationer det finns idag. Vem publicerar dem? Känner du någon personligen?</li>
      </ul>
      <ul>
        <li>Lär dig mer om matkulturer hemma.</li>
      </ul>
      <ul>
        <li>Hur är duken för olika måltider? Ta reda på de olika tabellinställningarna. Titta också på nätet efter olika sätt att vika servetter och träna på att fälla.</li><br/>
        <a target="_blank" rel="noreferrer" href="https://www.martat.fi/">Martta är inblandad i många | Martat</a><br/>
        <a target="_blank" rel="noreferrer" href="https://www.ruokatieto.fi/">Food Information Association</a>
      </ul>
    </div>
  );
};

export default HighschoolBreadRecipe_sv;
