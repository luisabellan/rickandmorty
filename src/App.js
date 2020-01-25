import React from "react";
import Header from "./components/Header.js";
import CharacterList from  "../src/components/CharacterList"
import WelcomePage from  "../src/components/WelcomePage"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
  
} from "react-router-dom";


export default function App() {
  return (
    <div>
      <nav>
      <ul>
        <li>
          <Link to="/">Welcome</Link>
        </li>
        <li>
          <Link to="/characters">Characters</Link>
        </li>
      </ul>
    </nav>
        
      <main>


      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <WelcomePage />
          </Route>
          <Route   path="/characters">
            <CharacterList />
          </Route>
        </Switch>
        </main>
    </div>
  );
         




}


