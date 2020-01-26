import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

const WelcomeSpan = styled.span``;

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">
          <span>Welcome</span>
        </Link>

        <Link to="/characters">Characters</Link>
      </nav>

      <main>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <WelcomePage />
          </Route>
          <Route path="/characters">
            <CharacterList />
          </Route>
        </Switch>
      </main>
    </div>
  );
}
