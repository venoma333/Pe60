import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import {
  Scene,
  Router
} from 'react-native-router-flux';
import Splash from './components/splash';
import Login from './components/login';
import Events from './components/events';
import EventDetails from './components/eventDetails';
import Categories from './components/categories';

class Pe60 extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar={true}>
          <Scene panHandlers={null} key="splash" component={Splash} initial={true} title="Volunteery" />
          <Scene panHandlers={null} key="login" component={Login} title="Login" />
          <Scene panHandlers={null} key="events" component={Events} title="Events" />
          <Scene panHandlers={null} key="details" component={EventDetails} title="EventDetails" />
          <Scene panHandlers={null} key="categories" component={Categories} title="Categories" />
        </Scene>
      </Router>
    );
  }
}

export default function register() {
  AppRegistry.registerComponent('Pe60', () => Pe60);
}
