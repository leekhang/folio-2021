import React, {useState, useEffect} from 'react';
import { BrowserRouter,Redirect, Route, Switch } from 'react-router-dom';

import IntroPage from './components/IntroPage';
import WorkPage from './components/WorkPage';
import AboutPage from './components/AboutPage';

function App(props) {
  const [initial, setInitial] = useState(false);

  useEffect(() => setInitial(true), []);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={ routerProps => (<IntroPage {...routerProps}/>) } />
          <Route path="/work" render={ routerProps => (<WorkPage { ...routerProps } />) }/>
          <Route path="/about" render={ routerProps => (<AboutPage { ...routerProps } />) }/>
        
          <Redirect to="/"/>
        </Switch>
        </BrowserRouter>
    </div>
  );
}


export default App;
