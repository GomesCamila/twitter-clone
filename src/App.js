import React, { Component } from 'react';
import './App.css';

import {Row, Col} from 'react-bootstrap'

import Header from './Header.js';
import NewCard from './NewCard';
import Card from './Card';
import Follow from './Follow';
import Profile from './Profile';
import Trends from './Trends';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Row>
          
          <Header />

          <Col xs={4}>
            <Row>
              <Profile />
            </Row>
            <Row>
              <Trends />
            </Row>
          </Col>
          
          <Col xs={4}>
          <Row>
          <NewCard />
          </Row>
          <Row>
            <Card />
            <Card />
            <Card />
          </Row>
          </Col>

          <Col xs={4}>
            <Follow />
          </Col>

        </Row>
      </div>
    ) 
  }
}

export default App;
