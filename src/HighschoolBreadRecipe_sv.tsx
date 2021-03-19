import React from 'react';
import translate from './translate';
import breadRecipe from './bread_recipe.png';

const HighschoolBreadRecipe_sv = (): JSX.Element => {
  return (
    <div>
      <p><strong>Monfood</strong></p>
      <p>“<em>Hösten 1938 planerade försvarsdepartementets militära ekonomiavdelning hushållningen i krigstid. Under planeringen märkte man att det kommer att vara omöjligt att leverera tillräckligt med bröd till armén ute i fält om de stora bageriernas arbete störs, till exempel om det blir strömavbrott. För att säkra tillgången på bröd bad den militärekonomiska avdelningen vid försvarsministeriet Lottakåren om hjälp. Lottorna bakade bröd som användes under extra repetitionsövningar och under vinterkriget. Som ett exempel kan nämnas att under vintern 1939 bakade lottadistrikten totalt 81 000 kilo bröd per dag. I början av vintern till och med upp till 103 000 kilo per dag. Denna otroliga bakningsinsats var gratisarbete som lottorna utförde. Försvarsmakten ersatte kostnaderna för att baka brödet.</em> ”<a target ="_blank" rel="noreferrer" href="https://www.lottasvard.fi/lottagalleria/lottajarjeston-jaostot/#!/muonitusjaosto">Avdelningar från Lotta Association - Lotta Svärd - Online Museum lottasvard.fi</a></p>
      <p>Smålottorna ”<em>deltog i matlagningen. Arbetet innebar att laga maten och att duka bord. De fick också lära sig grunderna i hur man serverar.</em>.” <a target="_blank" rel="noreferrer" href="https://www.lottasvard.fi/lottagalleria/lottajarjeston-jaostot/#!/pikkulotat">Lottajärjestön jaostot - Lotta Svärd - Verkkomuseo lottasvard.fi</a></p>
      <p>Knäckebrödrecept</p>
      <img className="large" src={breadRecipe} alt={translate ('bread_recipe')}/>
      <p>Förslag till uppgifter:</p>
      <ul>
        <li>Fundera på vad som är en hälsosam kost och vad den har för betydelse.</li>
      </ul>
      <ul>
        <li>Som hjälp under samtalet kan en tallriksmodell användas när ni diskuterar vilka olika livsmedel det finns (kött, fisk, mejeriprodukter, spannmål etc.)</li>
      </ul>
      <ul>
        <li>Varifrån kommer vår mat? Utforska hur maten hittar till våra tallrikar, till exempel från dessa websidor</li>
      </ul>
      <p>Användbara länkar:</p>
      <ul>
        <li><a target="_blank" rel="noreferrer" href="https://www.ruokatieto.fi/ruokakasvatus/ruuan-reitti-ruokakasvatusta-alakouluille">https://www.ruokatieto.fi/ruokakasvatus/ruuan-reitti-ruokakasvatusta-alakouluille</a></li>
        <li> Ta reda hur maten transporteras genom människokroppen (t.ex. genom Heureka-utställningar)</li>
        <li><a target="_blank" rel="noreferrer" href="https://www.ruokatieto.fi/ruokakasvatus/ruokaketju-ruuan-matka-pellolta-poytaan/ravitsemus-ja-ruuan-valinta/ruuansulatus">Ruuansulatus | Ruokatieto Yhdistys</a></li>
        <li><a target="_blank" rel="noreferrer" href="https://peda.net/lahti/koulut/karpanen/oppiaineet/biologia/ihminen/ruuansulatus">Ruuansulatus (peda.net)</a></li>
      </ul>
      <ul>
        <li>Vilka livsmedel kan du odla själv? Vilka förutsättningar kräver växterna för att trivas?
          <ul>
            <li>Följ tillväxten hos en enkel växt genom att plantera till exempel en kidneyböna eller ett korn</li>
            <li>Skapa ditt eget lilla grönsaksland (i t.ex. en filburk eller frysburk).</li>
            <li>Hemma kan du plantera en köpt kruksallad i en burk och se den växa.</li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>Har du själv lagat mat, hjälpt till att laga mat eller bakat något? Vad har du lagat? Med vem?</li>
      </ul>
      <ul>
        <li>Samla klassens favoritrecept i ett häfte. Publicera receptboken på något bra sätt, t.ex. i form av en matblogg. Ta reda på vilken typ av receptböcker och receptsamlingar som finns idag. Vem sprider dem? Känner du någon personligen som ger ut recept?</li>
      </ul>
      <ul>
        <li>Diskutera om matkulture hemma är olika hos eleverna.</li>
      </ul>
      <ul>
        <li>Hur dukar man för olika typer av måltider? Ta reda på om det finns olika sätt att duka på. Leta på nätet efter olika sätt att vika servetter på, och träna servettvikning.</li><br/>
        <a target="_blank" rel="noreferrer" href="https://www.martat.fi/">Marttajärjestö on monessa mukana | Martat</a><br/>
        <a target="_blank" rel="noreferrer" href="https://www.ruokatieto.fi/content/oka-uppskattning-av-finsk-matkultur">Ruokatieto Yhdistys</a>
      </ul>
    </div>
  );
};

export default HighschoolBreadRecipe_sv;
