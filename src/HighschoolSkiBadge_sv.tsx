import React from 'react';
import translate from './translate';
import skiBadge from './ski_badge.png';

const HighschoolSkiBadge_sv = (): JSX.Element => {
  return (
    <div>
      <p><strong>Lotta Svärds gyllene skid- och gångmärke</strong></p>
      <img className="large" src={skiBadge} alt={translate ('ski_badge')}/>
      <p>Lotta Svärd ansåg, precis som man också gör idag, att en god fysisk och mental kondition förbättrar människors hälsa och livskvalitet. Träning uppmuntrades med olika nivåer av förtjänstmärken.<br/>Lottakåren hade sitt eget skid- och gångmärke som man kunde få genom att klara av olika utmaningar. Det gyllene gångmärket, som hade tre gyllene kottar hängande från det, var den högsta utmärkelsen.<br/><br/><strong>Reflektion / Uppgiftstips:</strong></p>
      <ul>
        <li>Designa ett gemensamt eller individuellt konditionsmärke för klassen. Vad bör man tänka på när man designar det? Kanske hur och var kan det fästas, vilket material ni använder (Obs! Fundera på hur ni kan använda återvunnet material), med vilka verktyg ni tillverkar det och på vilka sätt man kan förtjäna det? För vilka sportprestationer ska man få märket</li>
      </ul>
      <ul>
        <li>Hur skapar du ett konditionsmärke?
          <ul>
            <li>Ni kan använda trä eller metall. Ni kan till och med prova att 3D-printa ett märke, medan ni samtidigt övar på att använda Tinkercad när eleverna planerar märkets design.</li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>Fundera på hur märket eller annan feedback påverkar en. Vilken typ av feedback är konstruktiv och hur ska den ges och tas emot? I vilka situationer? Förmår du själv ge uppmuntrande feedback åt andra? Fundera på betydelsen av uppmuntran, till exempel inom idrottsträning.</li>
      </ul>
      <ul>
        <li>Ställ upp ett eller flera träningsmål för klassen eller för enskilda elever under till exempel en veckas eller en månads tid. Fundera på hur man följer upp att prestationerna övervakas, dokumenteras och utvärderas. Diskutera om det behövs externa belöningar för att motivera alla att nå målet, eller räcker det med den inre motivationen? Vad är priset om man uppnår målet?</li>
      </ul>
      <ul>
        <li>Ordna ett träningspass för åldringar eller yngre elever på skolan, eller ordna träningspass som kan streamas över nätet.</li>
      </ul>
      <ul>
        <li>Utmana en annan klass eller skola att filma en utmaningsvideo. Utmaningen skickas sedan vidare till andra (videon kan t.ex. innehålla rolig pausgymnastik eller dans). Vilka sociala medier eller digitala plattformar kan användas för att sprida videorna under distansundervisning? Hur kan videon ändå bidra till ökad samhörighet och samhällsanda fastän distansundervisning pågår? Hur beaktas integritet och personskydd när bilder och videor publiceras online?</li>
      </ul>
      <p>Glädjen att få röra på sig tillhör alla!</p>
    </div>
  );
};

export default HighschoolSkiBadge_sv;
