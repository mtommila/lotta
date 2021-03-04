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

const Kindergarten_sv = (): JSX.Element => {
  return (
    <div>
      <h1> Hemligheten med vinden äventyr </h1>
      <p><strong>Det finns en gammal resväska på Lotas mormors mörka vind som ingen har fått röra vid. Vem har den resväskan och vad finns inuti? Klättra upp på vinden med Lotta-flickan och ta reda på vindens hemlighet med din grupp barn. Som hjälpare har du också Harmonia-Mouse och Oodi-ekorre som bor på vinden.</strong></p>
      <img className = {styles.coloring} src={girl} alt={translate ('Lotta')}/>
      <img className = {styles.coloring} src={mouse} alt={translate ('harmony')}/>
      <img className = {styles.coloring} src={squirrel} alt={translate ('oodi')}/>
      <p>Kom med och ta reda på vad hemligheten på vinden är. Samtidigt är målet att lära känna och lära sig saker, t.ex. Finlands historia, traditioner och kultur genom olika funktionella uppgifter som du kan studera, planera och genomföra tillsammans med allas deltagande. Idén med detta uppgiftspaket har varit att ta hänsyn till så många olika områden med bred kompetens som möjligt. Det finns tre olika avsnitt i paketet (dagis, grundskola och gymnasium) vars uppgifter riktar sig till olika åldersgrupper. Från alla sektioner kan du välja uppdrag för din egen undervisning.</p>
      <p><mark>Det finns också en koduppgift i slutet av de fem sektionerna. Efter att ha löst koden avslöjas äntligen den ultimata hemligheten på vinden. Ordna kodbokstäverna så att de bildar ett ord. Lägg detta ord i det utrymme som anges i koden i din resväska.</mark></p>
      <p><strong>Hemligheten för dagisvinden börjar här:</strong></p>
      <Link to="/paivakoti/lotta"><img className = {styles.coloring} src={coloringGirl} alt={translate ('coloring_image')}/></Link>
      <Link to="/paivakoti/harmonia"><img className = {styles.coloring} src={coloringMouse} alt={translate ('coloring_image')}/></Link>
      <Link to="/paivakoti/oodi"><img className = {styles.coloring} src={coloringSquirrel} alt={translate ('coloring_image')}/></Link>
      <p>Innan ett äventyr påbörjas kan alla skapa sin egen reseguide eller resekamrat. Endast fantasin är gränsen för hur karaktärerna kan utföras och dekoreras. Du kan välja Lota, Oodi eller Harmonia som karaktärer, eller så kan du komma med någon egen.<br/><br/>Tecken kan skapas:</p>
      <ul>
        <li>genom att rita</li>
        <li>Måla (laminat för att göra dem mer hållbara)</li>
        <li>Genom att tillverka (2- eller tredimensionellt t.ex. lera, kartong, toalettrullar, naturmaterial)</li>
        <li>Sömnad (filt, tyger, gamla strumpor, handskar och vantar)</li>
        <li>genom att arbeta med trä (plywood + bladsåg, bräda + såg, spik, hammare + multimaterial för dekoration)</li>
      </ul>
      <p>Innan du startar projektet / åker på äventyr kan det vara bra att tänka i din egen grupp barn, t.ex. saker som detta:</p>
      <ul>
        <li>Tänk på vilken typ av resekompis du vill ha och behöver ta på dig uppgifter? Varför är det bra om någon är inblandad? Vilka säkerhetsfrågor och egenvårdskunskap skulle vara bra att veta och veta? Vad mer skulle du ta med dig när du åker på äventyr / löser uppdrag? Vad behöver du tänka på innan du packar något?</li>
      </ul>
      <p><em>Vid denna punkt kan diskussionen utvidgas till att omfatta hur man förbereder sig för resan.</em></p>
      <ul>
        <li>Har din resekompis några speciella färdigheter eller kompetenser? Hur är det med dig? Vilka färdigheter har du? Vad betyder färdigheter egentligen? Varför behöver vi olika färdigheter? Har vi någon skicklighet så snart vi är födda? Vad sägs om innan det? Kan jag förlora en färdighet?</li>
        <li>Några färdigheter som du vill öva under ditt äventyr?</li>
        <li>Du kan också namnge din resekompis och tänka på hur du träffade honom, hittade honom eller hittade han dig? <strong>Vi har var och en vår historia, historia.</strong> Vad är din historik?</li>
      </ul>
      <p>Du kan ta itu med dessa frågor som du vill i gruppen, till exempel genom att prata, berätta, rita, flytta, använda musik / låtar.</p>
      <p>Tänk också på och bestäm tillsammans hur du planerar att dokumentera din grupps resa på vinden.</p>
    </div>
  );
};

export default Kindergarten_sv;
