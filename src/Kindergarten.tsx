import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';
import translate, {translateComponent} from './translate';
import './Kindergarten.css';
import suitcaseClosed from './suitcase_closed.jpg';
import suitcaseOpen from './suitcase_open.jpg';
import skiBadge from './ski_badge.png';
import beeBadge from './bee_badge.png';
import breadRecipe from './bread_recipe.png';
import mailPile from './mail_pile.png';
import theatrePermit from './theatre_permit.png';

const Kindergarten = () => {
  const [isSuitcaseOpen, setSuitcaseOpen] = React.useState(false);
  const suitcaseAudio = new Audio(process.env.PUBLIC_URL + '/suitcase.mp3');
  const KindergartenLang = translateComponent('Kindergarten');
  return (
    <div>
      {
        isSuitcaseOpen ?
          <div className="full base">
            <img className="background full" src={suitcaseOpen} alt={translate('suitcase')}/>
            <span className="foreground cover"><Link to="/paivakoti/alku">{translate('introduction')}</Link></span>
            <Link to="/paivakoti/hiihtomerkki"><img className="foreground item1" src={skiBadge} alt={translate('ski_badge')} width="7.0%" height="8.175%"/></Link>
            <Link to="/paivakoti/talkoomerkki"><img className="foreground item2" src={beeBadge} alt={translate('bee_badge')} width="8.88%" height="9.45%"/></Link>
            <Link to="/paivakoti/resepti"><img className="foreground item3" src={breadRecipe} alt={translate('bread_recipe')} width="19.76%" height="11.13%"/></Link>
            <Link to="/paivakoti/posti"><img className="foreground item4" src={mailPile} alt={translate('mail_pile')} width="33%" height="27%"/></Link>
            <Link to="/paivakoti/teatterilupa"><img className="foreground item5" src={theatrePermit} alt={translate('theatre_permit')} width="18.6%" height="19.5975%"/></Link>
            <span className="foreground item6"><Link to="/paivakoti/koodi">{translate('code')}</Link></span>
          </div>
          :
          <img className="full" src={suitcaseClosed} alt={translate('suitcase')}
            onClick={() => suitcaseAudio.play().then(() => setSuitcaseOpen(true))}/>
      }
      <KindergartenLang/>
    </div>
  );
};

export default Kindergarten;
