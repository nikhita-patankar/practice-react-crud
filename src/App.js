import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserForm from './components/UserForm';
import UserData from './components/UserData';
import './assets/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
    <div className="App container-fluid">
        <UserForm />
        <UserData />
    </div>
    );
    }
  }
  

export default connect((store) => store)(App);