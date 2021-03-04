import React from 'react';
import translate from './translate';
import skiBadge from './ski_badge.png';

const HighschoolSkiBadge_sv = (): JSX.Element => {
  return (
    <div>
      <p><strong>Golden Ski and Walk Badge</strong></p>
      <img className="large" src={skiBadge} alt={translate ('ski_badge')}/>
      <p>Precis som idag ansåg Lotta Svärd att god fysisk och mental kondition förbättrade människors hälsa och livskvalitet. Träning uppmuntrades med olika nivåer av konditionstecken.<br/>Det stora partiet hade sitt eget skid- och vandringsmärke som det förvärvade genom att genomföra en viss utmaning. Det bästa var ett gyllene gångskylt med tre gyllene kottar hängande från det.<br/><br/><strong>Reflektion / Uppgiftstips:</strong></p>
      <ul>
        <li>Designa ditt eget fitnessmärke för dig själv eller som en liten grupp. Vad bör beaktas i designen? Till exempel, hur och var kan det fästas, från vilket material (notera: mångfald och användning av återvunnet material), med vilka verktyg och på vilka sätt kan det bearbetas och implementeras? Vilka sporter kan få ett sådant märke?</li>
      </ul>
      <ul>
        <li>Till exempel, hur skapar du dessa karaktärer?
          <ul>
            <li>Bearbeta en karaktär av trä eller tvinga metall, eller till och med prova en 3D-skrivare för att skapa en karaktär, medan du övar på att använda Tinkercad till exempel för att designa en karaktär.</li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>Tänk på vikten av att uppmuntra ett varumärke eller annan feedback. Vilken typ av feedback är användbar och hur ska den ges / tas emot? I vilka situationer? Kan du ge uppmuntrande feedback själv? Tänk på vikten av peer review, till exempel i träningsprestanda.</li>
      </ul>
      <ul>
        <li>Ange personligen ett eller flera träningsmål för en klass eller elev, till exempel en vecka / månad. Tänk på hur uppnåendet av målet övervakas, dokumenteras, utvärderas. Diskutera om externa belöningar behövs för att motivera att nå målet, eller är intern motivation tillräcklig? Vad kan priset vara?</li>
      </ul>
      <ul>
        <li>Ha en träningspass för äldre / yngre studenter eller strömma från träningstillfället.</li>
      </ul>
      <ul>
        <li>Utmana en annan klass / skola, etc., skapa en utmaningsvideo och skicka den till andra (uppdelningsvideo, dansföreställning). Vilka sociala medier / plattformar kan användas för att implementera videor också under distansundervisning? Samtidigt, hur skulle dessa kunna öka samhällsandan under distansundervisning? Vilka integritetshänsyn bör beaktas när bilder och videor publiceras?</li>
      </ul>
      <p>Glädjen att flytta för alla!</p>
    </div>
  );
};

export default HighschoolSkiBadge_sv;
