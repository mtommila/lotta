import React from 'react';
import translate from './translate';
import logo from './logo.jpg';

const Highschool_sv = (): JSX.Element => {
  return (
    <div>
      <h1> Vindens hemlighet </h1>
      <p><strong>Uppe på den mörka vinden hos Lottas mormor finns en gammal kappsäck som ingen får röra. Vems är kappsäcken, och vad finns i den? Klättra tillsammans med din klass upp på vinden i lilla Lottas sällskap och ta reda på vindens hemlighet.</strong></p>
      <img src={logo} alt={translate ('lotta_foundation')}/>
      <p>Kom med och utforska vindens hemlighet. Målet är att lära känna och bekanta sig med Finlands historia, traditioner och kultur genom olika funktionella uppgifter. Lärare och elever får tillsammans undersöka, planera och genomföra uppgifterna som är planerade så att alla kan delta.</p>
      <p>“<em>Lottarörelsen var en frivillig, vapenlös nationell försvarsorganisation för kvinnor. Den verkade från 1921-1944. Rörelsen hade som mest cirka 240 000 medlemmar, varav nästan 50 000 var 8-17-åringar.</em></p>
      <p><em>Under fredstid var ett av lottarörelsens huvudmål att erbjuda utbildning åt sina medlemmar. Genom utbildningen lyckades lottarörelsen skapa en organisation med stark handlingsförmåga under krigstidens exceptionella omständigheter. Under kriget syntes rörelsens sociala ansvar bland annat i att ta hand om de svagaste i samhället, genom skapa säkra flyktvägar för kringsflyktingar, hjälpa äldre och barn och omsorgen om sjuka.</em></p>
      <p><em>Lottarörelsen upplöstes hösten 1944 i och med mellanfreden i Moskva. Efter att organisationen upplösts fortsatte lottorna att tillhandahålla underhålls- och hjälparbete under namnet Vårdstiftelsen för Finlands Kvinnor. År 2004 ändrades namnet på Vårdstiftelsen för Finlands Kvinnor till Lotta Svärd -Stiftelsen. ”</em> <a target="_blank" rel="noreferrer" href="https://www.lottasvard.fi/">Etusivu - Lotta Svärd - Verkkomuseo (lottasvard.fi)</a> </ p >
    </div>
  );
};

export default Highschool_sv;
