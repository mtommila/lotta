import React from 'react';
import translate from './translate';
import theatrePermit from './theatre_permit.png';

const HighschoolTheatrePermit_sv = (): JSX.Element => {
  return (
    <div>
      <p><strong>Tillstånd att gå på teaterövningar</strong></p>
      <img className="large" src={theatrePermit} alt={translate ('theater_permit')}/>
      <p>”De små lotterierna samlades för arbetskvällar, där de, förutom hantverk, läste och sjöng. Flickorna övade och framförde låtar, spelar och reciterade på sina egna och vuxna kvällar. ” (Pikkulota Games, Tradition Games Association & Lottamuseo, 2017)</p>
      <p>“... <em>små lotterier organiserade kvällar för barn till migranter och reservister ...”</em></p>
      <p>(Little Games, Tradition Games Association & Lottamuseo, 2017)</p>
      <p><strong>Reflektion / uppgiftstips:</strong></p>
      <ul>
        <li>Diskutera i klassen om eleverna har varit på teatern? Vad betyder teater egentligen? Ta reda på teaterhistorien. Vilka är de olika typerna av teaterformer? (t.ex. dockteater, skuggteater, bordsteater osv.) Vilka teaterstilar finns?</li>
      </ul>
      <ul>
        <li>Har du någonsin spelat någonstans?</li>
      </ul>
      <ul>
        <li>Planera och utför en föreställning (dockteater, fingerdockateater, lek, video, animering, musikal etc.) tillsammans / i små grupper.
          <ul>
            <li>Tänk tillsammans vad ett manus är. Gör din egen eller välj till exempel en bekant saga som du kan göra en presentation från. Har presentationen tal eller presenteras saker i rörelse, med bilder eller med musik / ljudeffekter?</li>
            <li>Vilka material behövs för att göra karaktärerna? Eller agerar du själv?</li>
            <li>Var kommer presentationen att vara? Hur gör man produktioner för olika typer av teaterformer? Kan presentationen vara utanför?</li>
            <li>Har showen musik, ljudeffekter etc.? Hur får man dem? (skolinstrument, hemlagade instrument, datorer etc.)</li>
            <li>Tänk på vem presentationen skulle kunna presenteras för (t.ex. i din egen klass eller för andra klasser i skolan, vårdhem i grannskapet, daghem / skolor, föräldrar, fjärrstyrt via video etc.).</li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>Besök teatern. (t.ex. närliggande amatörteatrar, barnklubbar etc.)</li>
      </ul>
      <ul>
        <li><a target="_blank" rel="noreferrer" href="https://mieli.fi/fi/kirjat/el%C3%A4inlasten-el%C3%A4m%C3%A4%C3%A4 - mental hälsa färdigheter-p% C3% B6yt% C3% A4theatrical means">Animal life - Mental health skills through table theater | MIND Finnish Mental Health Association</a></li>
      </ul>
      <ul>
        <li><a target="_blank" rel="noreferrer" href="https://www.teatterimuseo.fi/">Theatre Museum</a></li>
      </ul>
    </div>
  );
};

export default HighschoolTheatrePermit_sv;
