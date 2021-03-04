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
      <h1> Hemligheten med vinden äventyr </h1>
      <p><strong>Lotas mormors mörka vind har en gammal resväska som ingen ska röra vid. Vems resväska är det, och vad finns i det? Klättra upp på vinden med Lotta-flickan och ta reda på vindens hemlighet med dina barns grupp / klass. Som assistenter har du också Harmonia-Mouse och Oodi-Squirrel som bor på vinden i sektionerna för yngre barn.</strong></p>
      <img className = {styles.coloring} src={girl} alt={translate ('Lotta')}/>
      <img className = {styles.coloring} src={mouse} alt={translate ('harmony')}/>
      <img className = {styles.coloring} src={squirrel} alt={translate ('oodi')}/>
      <p>Kom med och ta reda på vad hemligheten på vinden är. Samtidigt är målet att lära känna och lära sig saker, t.ex. Finlands historia, traditioner och kultur genom olika funktionella uppgifter som lärare kan studera, planera och genomföra tillsammans med sina barn med deltagande av alla. Det finns tre olika avsnitt i paketet för olika åldersgrupper:</p>
      <p><mark>Det finns också en koduppgift i slutet av de fem sektionerna. Efter att ha löst koden avslöjas äntligen den ultimata hemligheten på vinden. Ordna kodbokstäverna så att de bildar ett ord. Lägg detta ord i det utrymme som anges i koden i din resväska.</mark></p>
      <p><strong>Hemligheten för grundskolan i grundskolan börjar här:</strong></p>
      <Link to="/ala-aste/lotta"><img className = {styles.coloring} src={coloringGirl} alt={translate ('coloring_image')}/></Link>
      <Link to="/ala-aste/harmonia"><img className = {styles.coloring} src={coloringMouse} alt={translate ('coloring_image')}/></Link>
      <Link to="/ala-aste/oodi"><img className = {styles.coloring} src={coloringSquirrel} alt={translate ('coloring_image')}/></Link>
      <p>Innan ett äventyr påbörjas kan alla skapa sin egen reseguide eller resekamrat. Endast fantasin är gränsen för hur karaktärerna kan utföras och dekoreras. Karaktärerna kan antingen vara desamma som i materialpaketet eller så kan du välja en annan karaktär eller komma på något helt annat för dig själv.</p>
      <ul>
        <li>genom att rita</li>
      </ul>
      <ul>
        <li>Genom att måla (Tecken kan skäras och lamineras för att göra dem mer hållbara.)</li>
      </ul>
      <ul>
        <li>Genom att tillverka (2- eller tredimensionellt t.ex. lera, kartong, toalettrullar, naturmaterial)</li>
      </ul>
      <ul>
        <li>Sömnad (filt, tyger, gamla strumpor, handskar och vantar)</li>
      </ul>
      <ul>
        <li>Bearbetning av en träfigur (plywood + bladsåg, bräda + såg, spik, hammare + multimaterial för dekoration)</li>
      </ul>
      <ul>
        <li>Bekanta dig med ett designprogram (som Tinkercad) och förvandla karaktärerna till 3D-utskrifter</li>
      </ul>
      <ul>
        <li>Skapa en virtuell karaktär, t.ex. för att ingå i en elektronisk portfölj</li>
      </ul>
      <p>Innan du startar projektet / går på äventyr kan det vara en bra idé att tänka i din egen klass, t.ex. saker som detta:</p>
      <ul>
        <li>Tänk på vilken typ av resekompis du vill ha och behöver ta på dig uppgifter? Varför är det bra om någon är inblandad? Vilka säkerhetsfrågor och egenvårdskunskap skulle vara bra att veta och veta? Vad mer skulle du ta med dig när du åker på äventyr / löser uppdrag? Vad måste övervägas innan du packar något i? Vid denna tidpunkt kan diskussionen utvidgas till att omfatta hur man förbereder sig för resan.</li>
      </ul>
      <ul>
        <li>Har din resekompis några speciella färdigheter eller kompetenser? Hur är det med dig? Vilka färdigheter har du? Vad betyder färdigheter egentligen? Varför behöver vi olika färdigheter? Har vi någon skicklighet så snart vi är födda? Vad sägs om innan det? Kan jag förlora en färdighet?</li>
      </ul>
      <ul>
        <li>Finns det några färdigheter som du vill öva under äventyret / projektet?</li>
      </ul>
      <ul>
        <li>Du kan också namnge din resekompis och tänka på hur du träffade honom, hittade honom eller hittade han dig? Vi har var och en vår historia, historia. Vad är din historia? Skapa ditt eget släktträd.</li>
      </ul>
      <p>Du kan ta itu med dessa frågor som du vill i klassen, till exempel genom att diskutera, berätta, rita, flytta, använda musik / låtar, söka efter information du behöver från en mängd olika källor</p>
    </div>
  );
};

export default Elementary_sv;
