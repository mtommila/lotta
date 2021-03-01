import React from 'react';
import { Link } from "react-router-dom";
import { FormattedMessage, useIntl } from "react-intl";
import translate, {translateComponent} from "./translate";
import Code from './Code';
import './Kindergarten.css';
import suitcaseClosed from './suitcase_closed.jpg';
import suitcaseOpen from './suitcase_open.jpg';
import skiBadge from './ski_badge.png';
import beeBadge from './bee_badge.png';
import breadRecipe from './bread_recipe.png';
import mailPile from './mail_pile.png';
import theatrePermit from './theatre_permit.png';

const Kindergarten = () => {
  let [isSuitcaseOpen, setSuitcaseOpen] = React.useState(false);
  let suitcaseAudio = new Audio(process.env.PUBLIC_URL + '/suitcase.mp3');
  const KindergartenLang = translateComponent('Kindergarten');
  return (
    <div>
      <h1>Mitä pikkulotat tekivät</h1>
      {
        isSuitcaseOpen ?
          <div className="full base">
            <img className="background full" src={suitcaseOpen} alt={translate('suitcase')}/>
            <Link to="/paivakoti/hiihtomerkki"><img className="foreground item1" src={skiBadge} alt={translate('ski_badge')} width="7.0%" height="8.175%"/></Link>
            <img className="foreground item2" src={beeBadge} alt={translate('bee_badge')} width="8.88%" height="9.45%"/>
            <img className="foreground item3" src={breadRecipe} alt={translate('bread_recipe')} width="19.76%" height="11.13%"/>
            <img className="foreground item4" src={mailPile} alt={translate('mail_pile')} width="33%" height="27%"/>
            <img className="foreground item5" src={theatrePermit} alt={translate('theatre_permit')} width="18.6%" height="19.5975%"/>
          </div>
          :
          <img className="full" src={suitcaseClosed} alt={translate('suitcase')}
               onClick={() => suitcaseAudio.play().then(() => setSuitcaseOpen(true))}/>
      }
      <KindergartenLang/>
      <Code/>
    </div>
  );
}

export default Kindergarten;
