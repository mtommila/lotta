import React from 'react';
import {Link} from 'react-router-dom';
import translate, {translateComponent} from './translate';
import styles from './Elementary.module.css';
import suitcaseClosed from './suitcase_closed.jpg';
import suitcaseOpen from './suitcase_open.jpg';
import skiBadge from './ski_badge.png';
import beeBadge from './bee_badge.png';
import breadRecipe from './bread_recipe.png';
import mailPile from './mail_pile.png';
import theatrePermit from './theatre_permit.png';
import lottaPin from './lotta_pin.png';

const Elementary = (): JSX.Element => {
  const [isSuitcaseOpen, setSuitcaseOpen] = React.useState(false);
  const suitcaseAudio = new Audio(process.env.PUBLIC_URL + '/suitcase.mp3');
  const ElementaryLang = translateComponent('Elementary');
  return (
    <div>
      <div className="center">
        {
          isSuitcaseOpen ?
            <div className={styles.full + ' ' + styles.base}>
              <img className={styles.background + ' ' + styles.full} src={suitcaseOpen} alt={translate('suitcase')}/>
              <span className={styles.foreground + ' ' + styles.cover}><Link to="/ala-aste/alku">{translate('introduction')}</Link></span>
              <Link to="/ala-aste/hiihtomerkki"><img className={styles.foreground + ' ' + styles.item1} src={skiBadge} alt={translate('ski_badge')} width="7.0%" height="8.175%"/></Link>
              <Link to="/ala-aste/talkoomerkki"><img className={styles.foreground + ' ' + styles.item2} src={beeBadge} alt={translate('bee_badge')} width="8.88%" height="9.45%"/></Link>
              <Link to="/ala-aste/resepti"><img className={styles.foreground + ' ' + styles.item3} src={breadRecipe} alt={translate('bread_recipe')} width="19.76%" height="11.13%"/></Link>
              <Link to="/ala-aste/lottamerkki"><img className={styles.foreground + ' ' + styles.item4} src={lottaPin} alt={translate('lotta_pin')} width="10%" height="7.5%"/></Link>
              <Link to="/ala-aste/posti"><img className={styles.foreground + ' ' + styles.item5} src={mailPile} alt={translate('mail_pile')} width="33%" height="27%"/></Link>
              <Link to="/ala-aste/teatterilupa"><img className={styles.foreground + ' ' + styles.item6} src={theatrePermit} alt={translate('theatre_permit')} width="18.6%" height="19.5975%"/></Link>
              <span className={styles.foreground + ' ' + styles.item7}><Link to="/ala-aste/koodi">{translate('code')}</Link></span>
            </div>
            :
            <img className={styles.full} src={suitcaseClosed} alt={translate('suitcase')}
              onClick={() => suitcaseAudio.play().then(() => setSuitcaseOpen(true))}/>
        }
      </div>
      <div className="main">
        <ElementaryLang/>
      </div>
    </div>
  );
};

export default Elementary;
