import React from 'react';
import {Link} from 'react-router-dom';
import translate from './translate';
import styles from './Child.module.css';
import girl from './coloring_girl_color.jpg';
import mouse from './coloring_mouse_color.jpg';
import squirrel from './coloring_squirrel_color.jpg';
import coloringGirl from './coloring_girl.png';
import coloringMouse from './coloring_mouse.png';
import coloringSquirrel from './coloring_squirrel.png';

const Elementary_sv = (): JSX.Element => {
  return (
    <div>
      <h1> Äventyret med hemligheten på vinden </h1>
      <p><strong>Uppe på Lottas mormors mörka vind finns en gammal kappsäck som ingen får röra. Vems är kappsäcken, och vad finns i den? Klättra upp på vinden tillsammans med lilla Lotta och utforska vindens hemlighet i din grupp eller med din skolklass. Som hjälpredor åt de mindre barnen har du också Harmonia Mus och Oodi Ekorre som bor uppe på vinden.</strong></p>
      <img className = {styles.coloring} src={girl} alt={translate ('Lotta')}/>
      <img className = {styles.coloring} src={mouse} alt={translate ('harmony')}/>
      <img className = {styles.coloring} src={squirrel} alt={translate ('oodi')}/>
      <p>Kom med och ta reda på vad vindens hemlighet är! Målet är att barnen ska bekanta sig med och lära sig om bland annat Finlands historia, traditioner och kultur. Som lärare kan du tillsammans med dina elever studera, planera och genomföra olika uppgifter, vilka är utformade så att alla kan delta i dem. Det finns tre olika nivåer i paketet, anpassade för olika åldersgrupper.</p>
      <p><strong>Genom att klicka på kappsäckens bild kan du läsa inledningsberättelsen och utforska alla uppgiftsavsnitt som finns bakom de olika föremålen i resväskan.</strong></p>
      <p><mark>Det finns också en koduppgift i slutet av varje av de fem delarna. Efter att du knäckt koden avslöjas den spännande hemligheten på vinden. Ordna kodbokstäverna så att de bildar ett ord. Skriv in detta ord i det utrymme som anges i koden i din resväska.</mark></p>
      <p><strong>Äventyret med vindens hemlighet för grundskolan börjar här:</strong></p>
      <Link to="/ala-aste/lotta"><img className = {styles.coloring} src={coloringGirl} alt={translate ('coloring_image')}/></Link>
      <Link to="/ala-aste/harmonia"><img className = {styles.coloring} src={coloringMouse} alt={translate ('coloring_image')}/></Link>
      <Link to="/ala-aste/oodi"><img className = {styles.coloring} src={coloringSquirrel} alt={translate ('coloring_image')}/></Link>
      <p>Innan äventyret påbörjas kan alla skapa sin egen reseguide eller resekamrat. Endast fantasin är gränsen för hur karaktärerna kan utformas och dekoreras. Figurerna kan antingen vara desamma som i materialpaketet eller så kan du välja en annan karaktär eller hitta på något helt nytt.</p>
      <ul>
        <li>Genom att rita</li>
      </ul>
      <ul>
        <li>Genom att måla (figurerna kan lamineras och klippas ut för att göra dem mer hållbara.)</li>
      </ul>
      <ul>
        <li>Genom olika hantverksmetoder (två- eller tredimensionellt av t.ex. lera, kartong, toalettrullar, naturmaterial)</li>
      </ul>
      <ul>
        <li>Genom att sy (av t.ex. filt, tyg, gamla strumpor, handskar eller vantar)</li>
      </ul>
      <ul>
        <li>Genom att snickra en träfigur (plywood + bladsåg, bräda + såg, spik, hammare + material för dekoration)</li>
      </ul>
      <ul>
        <li>Bekanta dig med ett designprogram (som Tinkercad) och gör figurerna genom att skriva ut dem med en 3D-printer</li>
      </ul>
      <ul>
        <li>Skapa en virtuell karaktär, som man kan spara i barnets elektroniska portfolio</li>
      </ul>
      <p>Innan du inleder projektet och går ut på äventyr kan det vara en bra idé att fundera bl.a. på följande med din klass:</p>
      <ul>
        <li>Fundera på vilken typ av resekompis du vill ha och behöver när du löser uppgifterna? Varför är det bra att ha någon med sig? Fundera på varför det blir säkrare och enklare att ta hand om sig själv om man har sällskap. Vad mer är bra att ha när man far på äventyr och löser mysterier? Vad ska man tänka på när man packar? Diskussionen kan också utvidgas till att omfatta hur man förbereder sig för en resa.</li>
      </ul>
      <ul>
        <li>Har din resekompis några speciella förmågor eller kunskaper? Hur är det med dig? Vilka färdigheter har du? Vad betyder det egentligen att ha färdigheter? Varför behöver vi olika färdigheter? Är vi skickliga på något redan från att vi föds? Kanske rent av innan vi föds? Kan man förlora en färdighet?</li>
      </ul>
      <ul>
        <li>Finns det några färdigheter som du vill öva på eller lära dig under äventyret?</li>
      </ul>
      <ul>
        <li>Du kan hitta på ett namn åt din resekompis och fundera ut en historia om hur du träffade honom/henne, hittade honom/henne eller var det resekompisen som hittade dig? Vi har var och en vår egen historia och berättelse. Vad är din historia? Rita ditt eget släktträd.</li>
      </ul>
      <p>Du kan introducera dessa frågor som du vill i klassen, till exempel genom att diskutera, berätta, rita, använda dans och rörelse, använda musik eller sånger, eller genom att söka efter den information du behöver från en mängd olika källor</p>
    </div>
  );
};

export default Elementary_sv;
