import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../pages/Home';
import Error from '../pages/Error';
import LitteraProvider from "react-littera";
import { ThemeProvider } from 'react-jss'
import theme from "../theme.js"

function App() {
  const [language, setLanguage] = React.useState("en_US");

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <LitteraProvider language={language} setLanguage={setLanguage}>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route component={Error} />
            </Switch>
          </Router>
        </LitteraProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
