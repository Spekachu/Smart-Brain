import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import CurrentRoute from './components/CurrentRoute/CurrentRoute';

const particlesOptions = {
  particles: {
    "number": {
      "value": 30,
      "density": {
        "enable": true,
        "value_area": 800
      }
    }
  }
};

const initialState = {
  isSignedIn: false,
  input: '',
  imageSrc: '',
  responseData: {},
  regions: [],
  route: 'signin',
  routes: {
    home: 'home',
    register: 'register',
    signin: 'signin',
    signout: 'signout'
  },
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  },
  backend: `https://young-wildwood-34345.herokuapp.com/`
}
class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  increaseUserEntries = () => {
    fetch(`${this.state.backend}image`, {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: this.state.user.id,
      })
    })
      .then(res => res.json())
      .then(entries => {
        if (entries) {
          this.setState(Object.assign(this.state.user, { entries }));
        }
      })
      .catch(console.log)
  }
  onDetectButtonSubmit = () => {
    fetch(`${this.state.backend}imageurl`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        input: this.state.imageSrc
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response) {
          this.increaseUserEntries();
        }
        this.setState({ responseData: response })
        this.setState({ regions: response.outputs[0].data.regions })
      }
      ).catch(err => console.log(err));

  }

  onRouteChange = (route) => {
    if (route === "signout") {
      this.setState(initialState)
      route = "signin";
    } else if (route === "home") {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route: route })
  }

  loadUser = (userToLoad) => {
    this.setState({
      user: {
        ...userToLoad
      }
    });
  }

  render() {
    return (
      <div className="App pb5">
        <Particles className="particles fixed w-100 h-100 top-0 left-0" params={particlesOptions} />
        <header className="flex justify-between pa3">
          <Logo />
          <Navigation routes={this.state.routes} onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn} />
        </header>
        <CurrentRoute app={this} state={this.state} onRouteChange={this.onRouteChange} onDetectButtonSubmit={this.onDetectButtonSubmit} />
      </div>

    );
  }
}

export default App;
