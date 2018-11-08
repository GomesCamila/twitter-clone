import React, { Component } from 'react';
import './App.css';

import {Col} from 'react-bootstrap'

class App extends Component {
  render() {
    return (
        <Col xs={4}>
            <Col xs={12} className="light-blue">New Card</Col>
        </Col>
    ) 
  }
}

export default App;
