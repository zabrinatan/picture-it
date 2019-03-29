import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {

  render() {
    return(
      <div>
        <div id="home-container">
          <h1 id="title">Picture it</h1>
          <Link to={`/emotions`} className='navlink'>Emotions</Link>
        </div>
      </div>
    );
  }
};

export default Home;
