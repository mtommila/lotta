import React from 'react';
import { IntlProvider } from "react-intl";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import translate, { changeLanguage, messages } from "./translate";
import './App.css';
import Lotta from './Lotta';
import Welcome from './Welcome';
import Info from './Info';
import Kindergarten from './Kindergarten';
import Elementary from './Elementary';
import Highschool from './Highschool';

const App = () => {
  const [lang, setLang] = React.useState("fi");
  return (
    <IntlProvider locale={lang} messages={messages[lang]}>
      <div className="switcher">
        <button
          onClick={() => {
            setLang("fi");
            changeLanguage("fi");
          }}
          disabled={lang === "fi"}
        >
          <span aria-label="fi-flag" role="img">
            FI
          </span>
          fi
        </button>
        <button
          onClick={() => {
            setLang("sv");
            changeLanguage("sv");
          }}
          disabled={lang === "sv"}
        >
          <span aria-label="se-flag" role="img">
            SE
          </span>
          sv
        </button>
      </div>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">{translate("homepage_linktext")}</Link>
            </li>
            {/*
            <li>
              <Link to="/paivakoti">{translate("kindergarten_linktext")}</Link>
            </li>
            <li>
              <Link to="/ala-aste">{translate("lower_elementary_linktext")}</Link>
            </li>
            <li>
              <Link to="/ylaaste">{translate("junior_highschool_linktext")}</Link>
            </li>
            */}
          </ul>
        </nav>
        <Switch>
          <Route path="/tervetuloa">
            <Welcome/>
          </Route>
          <Route path="/info">
            <Info/>
          </Route>
          <Route path="/paivakoti">
            <Kindergarten/>
          </Route>
          <Route path="/ala-aste">
            <Elementary/>
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
}

export default App;
