import React from 'react';
import translate from './translate';
import breadRecipe from './bread_recipe.png';

const ElementaryBreadRecipe_sv = (): JSX.Element => {
  return (
    <div>
      <p>Matleverans</p>
      <p>“<em>Hösten 1938 planerade försvarsdepartementets militära ekonomiavdelning hushållningen i krigstid. Under planeringen märkte man att det kommer att vara omöjligt att leverera tillräckligt med bröd till armén ute i fält om de stora bageriernas arbete störs, till exempel om det blir strömavbrott. För att säkra tillgången på bröd bad den militärekonomiska avdelningen vid försvarsministeriet Lottakåren om hjälp. Lottorna bakade bröd som användes under extra repetitionsövningar och under vinterkriget. Som ett exempel kan nämnas att under vintern 1939 bakade lottadistrikten totalt 81 000 kilo bröd per dag. I början av vintern till och med upp till 103 000 kilo per dag. Denna otroliga bakningsinsats var gratisarbete som lottorna utförde. Försvarsmakten ersatte kostnaderna för att baka brödet.</em> ”<a target ="_blank" rel="noreferrer" href="https://www.lottasvard.fi/lottagalleria/lottajarjeston-jaostot/#!/muonitusjaosto">Lottajärjestön jaostot - Lotta Svärd - Verkkomuseo lottasvard.fi</a></p>
      <p>Smålottorna ”<em>deltog i matlagningen. Arbetet innebar att laga maten och att duka bord. De fick också lära sig grunderna i hur man serverar.</em>.” <a target="_blank" rel="noreferrer" href="https://www.lottasvard.fi/lottagalleria/lottajarjeston-jaostot/#!/pikkulotat">Lottajärjestön jaostot - Lotta Svärd - Verkkomuseo lottasvard.fi</a></p>
      <p><mark>Det pågår talko i grannskapet. Just nu håller talkofolket matpaus. De grillar korv och den goda doften letar sig upp på vinden. Lotta hittar ett gammalt häfte i kappsäcken. Hon öppnar det tillsammans med Harmonia och Oodi. ”Rågknäckebröd,” läser Lotta högt. ”Det här är mormors gamla recepthäfte!” Lottas mage börjar kurra.</mark></p>
      <p><strong>Massor av knäckebrödrecept</strong></p>
      <img className="large" src={breadRecipe} alt={translate ('bread_recipe')}/>
      <p><strong>Förslag på uppgifter:</strong></p>
      <ul>
        <li>Fundera med gruppen på varför vi äter mat och varför mat är viktigt?</li>
      </ul>
      <ul>
        <li>Som hjälp under samtalet kan en tallriksmodell användas när ni diskuterar vilka olika livsmedel det finns (kött, fisk, mejeriprodukter, spannmål etc.)
          <ul>
            <li>Skapa din egen tallriksmodell med olika sorters mat. Du kan klippa bilder från tidningar, rita mat, eller tillverka av trolldeg (instruktioner för trolldeg hittas enkelt online), etc.</li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>Varifrån kommer vår mat? Utforska hur maten hittar till våra tallrikar, till exempel från dessa websidor</li>
      </ul>
      <ul>
        <li><a target="_blank" rel="noreferrer" href="https://www.ruokatieto.fi/ruokakasvatus/ruuan-reitti-ruokakasvatusta-alakouluille">https://www.ruokatieto.fi/ruokakasvatus/ruuan-reitti-ruokakasvatusta-alakouluille</a></li>
        <li>Ta reda hur maten transporteras genom människokroppen (t.ex. genom Heureka-utställningar)</li>
        <li><a target="_blank" rel="noreferrer" href="https://www.ruokatieto.fi/ruokakasvatus/ruokaketju-ruuan-matka-pellolta-poytaan/ravitsemus-ja-ruuan-valinta/ruuansulatus">Ruuansulatus | Ruokatieto Yhdistys</a></li>
        <li><a target="_blank" rel="noreferrer" href="https://peda.net/lahti/koulut/karpanen/oppiaineet/biologia/ihminen/ruuansulatus">Ruuansulatus (peda.net)</a></li>
      </ul>
      <ul>
        <li>Vilka livsmedel kan du odla själv?
          <ul>
            <li>Följ tillväxten hos en enkel växt genom att plantera till exempel en kidneyböna eller ett korn</li>
            <li>Skapa ditt eget lilla grönsaksland (i t.ex. en filburk eller frysburk).</li>
            <li>Hemma kan du plantera en köpt kruksallad i en burk och se den växa.</li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>Har du själv lagat mat, hjälpt till att laga mat eller bakat något? Vad har du lagat? Med vem? Du kan rita eller måla för att visa vad du lagat.</li>
      </ul>
      <ul>
        <li>Vad är ett recept? Vilken information finns i receptet? (T.ex. siffror, bokstäver, mängd, tider och olika beskrivningar hur man hanterar mat) Var hittar man recept? Kan man göra sina egna recept? Vid behov kan man förklara skillnaden mellan ett matrecept och ett läkarrecept.</li>
      </ul>
      <ul>
        <li>Lär dig mer om matkulturen i olika hem, till exempel genom att ta med foton eller recept på dina favoriträtter. Du kan berätta om dina egna eller dina föräldrars matminnen.</li>
      </ul>
      <ul>
        <li>Vilka bestick behövs för att äta? Hur dukar man ett bord? Vad betyder det att duka ett bord? Hur placerar man besticken när man dukar?
          <ul>
            <li>Skapa ditt eget tallriksunderlägg som visar var föremål såsom besticken ska vara, eller bilder som gör det lättare att äta. Laminera gärna underläggen så håller de länge.</li>
            <li>Öva på att vika servetter. Vad är en servett och vad är syftet med den?</li>
          </ul>
        </li>
      </ul>
      <p><strong>KODUPPGIFT 3: Vilken bokstav är den femte bokstaven i receptets andra ingrediens?</strong></p>
    </div>
  );
};

export default ElementaryBreadRecipe_sv;
