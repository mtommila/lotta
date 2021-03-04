import React from 'react';
import translate from './translate';
import logo from './logo.jpg';

const Highschool_sv = (): JSX.Element => {
  return (
    <div>
      <h1> Vindens hemlighet </h1>
      <p><strong>Lotas mormors mörka vind har en gammal resväska som ingen ska röra vid. Vems resväska är det, och vad finns i det? Klättra in på vinden med Lotta-flickan och ta reda på vindens hemlighet med din klass.</strong></p>
      <img src={logo} alt={translate ('lotta_foundation')}/>
      <p>Kom med och ta reda på vad hemligheten på vinden är. Samtidigt är målet att lära känna och lära sig saker, t.ex. Finlands historia, traditioner och kultur genom olika funktionella uppgifter, som lärare kan studera, planera och genomföra tillsammans med eleverna med deltagande av alla.</p>
      <p>“<em>Organisationen Lotta var en kvinnlig frivillig, obeväpnad nationell försvarsorganisation som verkade från 1921-1944. Organisationen hade maximalt cirka 240 000 medlemmar, varav nästan 50 000 var 8-17-åringar.</em></p>
      <p><em>I tider av fred var ett av lotteriorganisationens huvudmål att erbjuda utbildning för sina medlemmar. Genom utbildningen lyckades lotteriorganisationen skapa en organisation som hade operativa förmågor under krigstidens exceptionella omständigheter. Under kriget manifesterades partiets sociala ansvar bland annat i att ta hand om de missgynnade, säkra resan för krigsflyktingar, hjälpa äldre och barn och ta hand om de sjuka.</em></p>
      <p><em>Lotteriorganisationen upplöstes hösten 1944 under Moskvas truc. Efter upplösningen av organisationen fortsatte lotorna att tillhandahålla underhålls- och hjälparbete på uppdrag av Finlands kvinnors välfärdsstiftelse. År 2004 ändrades namnet på Finlands kvinnors välfärdsstiftelse till Lotta Svärd Foundation. ”</em> <a target="_blank" rel="noreferrer" href="https://www.lottasvard.fi/">Hem - Lotta Svärd - Online Museum (lottasvard.fi)</a> </ p >
    </div>
  );
};

export default Highschool_sv;
