import React from 'react';
import {IntlProvider} from 'react-intl';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import translate, {changeLanguage, messages} from './translate';
import './App.css';
import Lotta from './Lotta';
import Welcome from './Welcome';
import Info from './Info';
import Kindergarten from './Kindergarten';
import Elementary from './Elementary';
import Highschool from './Highschool';
import Child from './Child';
import ColoringImage from './ColoringImage';
import logo from './logo.jpg';
import coloringGirl from './coloring_girl.png';
import coloringMouse from './coloring_mouse.png';
import coloringSquirrel from './coloring_squirrel.png';

const App = (): JSX.Element => {
  const [lang, setLang] = React.useState('fi');
  return (
    <IntlProvider locale={lang} messages={messages[lang]}>
      <div className="switcher noprint">
        <button
          onClick={() => {
            setLang('fi');
            changeLanguage('fi');
          }}
          disabled={lang === 'fi'}
        >
          <span aria-label="Valitse suomen kieli" role="img">
            <svg width="1.8em" height="1.1em" viewBox="0 0 18 11">
              <rect width="18" height="11" fill="#fff"/>
              <rect width="18" height="3" y="4" fill="#003580"/>
              <rect width="3" height="11" x="5" fill="#003580"/>
            </svg>
          </span>
          Suomeksi
        </button>
        <button
          onClick={() => {
            setLang('sv');
            changeLanguage('sv');
          }}
          disabled={lang === 'sv'}
        >
          <span aria-label="På svenska" role="img">
            <svg width="1.6em" height="1.0em" viewBox="0 0 16 10">
              <rect width="16" height="10" fill="#006aa7"/>
              <rect width="2" height="10" x="5" fill="#fecc00"/>
              <rect width="16" height="2" y="4" fill="#fecc00"/>
            </svg>
          </span>
          På svenska
        </button>
      </div>
      <Router>
        <nav className="noprint">
          <ul>
            <li>
              <img src={logo} alt={translate('lotta_foundation')}/>
              <Link to="/">{translate('homepage_linktext')}</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/tervetuloa">
            <Welcome/>
          </Route>
          <Route path="/info">
            <Info/>
          </Route>
          <Route path="/paivakoti/alku">
            <Child component="KindergartenIntro" returnUrl="/paivakoti"/>
          </Route>
          <Route path="/paivakoti/lotta">
            <ColoringImage image={coloringGirl} returnUrl="/paivakoti"/>
          </Route>
          <Route path="/paivakoti/harmonia">
            <ColoringImage image={coloringMouse} returnUrl="/paivakoti"/>
          </Route>
          <Route path="/paivakoti/oodi">
            <ColoringImage image={coloringSquirrel} returnUrl="/paivakoti"/>
          </Route>
          <Route path="/paivakoti/hiihtomerkki">
            <Child component="KindergartenSkiBadge" returnUrl="/paivakoti"/>
          </Route>
          <Route path="/paivakoti/talkoomerkki">
            <Child component="KindergartenBeeBadge" returnUrl="/paivakoti"/>
          </Route>
          <Route path="/paivakoti/resepti">
            <Child component="KindergartenBreadRecipe" returnUrl="/paivakoti"/>
          </Route>
          <Route path="/paivakoti/posti">
            <Child component="KindergartenMailPile" returnUrl="/paivakoti"/>
          </Route>
          <Route path="/paivakoti/teatterilupa">
            <Child component="KindergartenTheatrePermit" returnUrl="/paivakoti"/>
          </Route>
          <Route path="/paivakoti/koodi">
            <Child component="KindergartenCode" returnUrl="/paivakoti"/>
          </Route>
          <Route path="/paivakoti">
            <Kindergarten/>
          </Route>
          <Route path="/ala-aste/alku">
            <Child component="ElementaryIntro" returnUrl="/ala-aste"/>
          </Route>
          <Route path="/ala-aste/lotta">
            <ColoringImage image={coloringGirl} returnUrl="/ala-aste"/>
          </Route>
          <Route path="/ala-aste/harmonia">
            <ColoringImage image={coloringMouse} returnUrl="/ala-aste"/>
          </Route>
          <Route path="/ala-aste/oodi">
            <ColoringImage image={coloringSquirrel} returnUrl="/ala-aste"/>
          </Route>
          <Route path="/ala-aste/hiihtomerkki">
            <Child component="ElementarySkiBadge" returnUrl="/ala-aste"/>
          </Route>
          <Route path="/ala-aste/talkoomerkki">
            <Child component="ElementaryBeeBadge" returnUrl="/ala-aste"/>
          </Route>
          <Route path="/ala-aste/resepti">
            <Child component="ElementaryBreadRecipe" returnUrl="/ala-aste"/>
          </Route>
          <Route path="/ala-aste/posti">
            <Child component="ElementaryMailPile" returnUrl="/ala-aste"/>
          </Route>
          <Route path="/ala-aste/teatterilupa">
            <Child component="ElementaryTheatrePermit" returnUrl="/ala-aste"/>
          </Route>
          <Route path="/ala-aste/lottamerkki">
            <Child component="ElementaryLottaPin" returnUrl="/ala-aste"/>
          </Route>
          <Route path="/ala-aste/koodi">
            <Child component="ElementaryCode" returnUrl="/ala-aste"/>
          </Route>
          <Route path="/ala-aste">
            <Elementary/>
          </Route>
          <Route path="/ylaaste/hiihtomerkki">
            <Child component="HighschoolSkiBadge" returnUrl="/ylaaste"/>
          </Route>
          <Route path="/ylaaste/talkoomerkki">
            <Child component="HighschoolBeeBadge" returnUrl="/ylaaste"/>
          </Route>
          <Route path="/ylaaste/resepti">
            <Child component="HighschoolBreadRecipe" returnUrl="/ylaaste"/>
          </Route>
          <Route path="/ylaaste/posti">
            <Child component="HighschoolMailPile" returnUrl="/ylaaste"/>
          </Route>
          <Route path="/ylaaste/teatterilupa">
            <Child component="HighschoolTheatrePermit" returnUrl="/ylaaste"/>
          </Route>
          <Route path="/ylaaste/lottamerkki">
            <Child component="HighschoolLottaPin" returnUrl="/ylaaste"/>
          </Route>
          <Route path="/ylaaste">
            <Highschool/>
          </Route>
          <Route path="/">
            <Lotta/>
          </Route>
        </Switch>
      </Router>
    </IntlProvider>
  );
};

export default App;
