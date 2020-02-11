/* eslint-disable react/jsx-one-expression-per-line */
import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { render } from '@testing-library/react';

import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';


class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      // name: null,
    };
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/">Главная</Link>
            <Link to="/about">О нас</Link>
            <Link to="/contacts">Контакты</Link>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contacts" component={Contacts} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export interface IAppProps {}

export interface IAppState {
  // name: string;
}

export default App;
