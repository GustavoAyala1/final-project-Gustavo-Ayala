
import React from 'react';
import Home from './pages/home';
import { parseRoute } from './lib';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', e => {
      this.setState({ route: parseRoute(window.location.hash) });
    }, false);
  }

  render() {
    // console.log(this.state);
    return <>
      <Home />
      </>;
  }
}
