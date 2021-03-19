import React from 'react';
import translate from './translate';
import theatrePermit from './theatre_permit.png';

const HighschoolTheatrePermit_sv = (): JSX.Element => {
  return (
    <div>
      <p><strong>Tillstånd att gå på teaterövningar</strong></p>
      <img className="large" src={theatrePermit} alt={translate ('theater_permit')}/>
      <p>”Smålottorna samlades till handarbetskvällar där de, förutom att handarbeta, också läste och sjöng. Flickorna övade och framförde sånger, skådespel och läste både sina egna och vuxnas dikter.”</em> (Pikkulotan leikit, Perinneleikit r.y. & Lottamuseo, 2017)</p>
      <p><strong>Förslag på uppgifter:</strong></p>
      <ul>
        <li>Diskutera i klassen om eleverna har gått på teater? Vad är egentligen teater? Utforska teaterhistorien och ta reda på vilka olika teaterformer som finns (t.ex. dockteater, skuggteater, bordsteater osv). Vilka olika teaterstilar finns?</li>
      </ul>
      <ul>
        <li>Har du själv spelat teater någonstans?</li>
      </ul>
      <ul>
        <li>Planera och framför en liten föreställning i smågrupper (dockteater, fingerdocksteater, drama, etc.)
          <ul>
            <li>Fundera tillsammans på vad ett manus är. Skapa ditt eget manus genom att hitta på en berättelse, eller välj en bekant berättelse som det går att göra en föreställning av. Ska man tala under föreställningen, eller visar man handlingen genom rörelser, bilder eller med musik och ljudeffekter?</li>
            <li>Vilka material behövs för att tillverka karaktärerna? Eller agerar ni själva?</li>
            <li>Var kommer föreställningen att visas? Hur tillverkar man rekvisita för olika teaterformer? Kan föreställningen göras utomhus?</li>
            <li>Ska showen innehålla musik eller ljudeffekter? Hur gör man det? (man kan t.ex. använda kroppen som instrument, spela på musikinstrument, göra hemlagade instrument, använda dator...)</li>
            <li>Fundera på vem man kan visa föreställningen åt (t.ex. åt andra barn i samma grupp eller andra dagisgrupper i samma dagis, på vårdhem eller skolor i närheten, åt föräldrar, eller via videolänk...)</li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>Gör ett besök på en teater. (t.ex. närliggande amatörteatrar, konstklubbar för barn...)</li>
      </ul>
      <ul>
        <li><a target="_blank" rel="noreferrer" href="https://mieli.fi/fi/kirjat/el%C3%A4inlasten-el%C3%A4m%C3%A4%C3%A4 - mental hälsa färdigheter-p% C3% B6yt% C3% A4theatrical means">Eläinlasten elämää - Mielenterveystaitojen pöytäteatterin keinoin / MIELI Suomen Mielenterveys ry.</a></li>
      </ul>
      <ul>
        <li><a target="_blank" rel="noreferrer" href="https://www.teatterimuseo.fi/">Teatterimuseo</a></li>
      </ul>
    </div>
  );
};

export default HighschoolTheatrePermit_sv;
