import React, { Component } from 'react'
import axios from 'axios'

const emotionsAPI = "http://localhost:3000/emotions"
class Home extends Component {

  componentDidMount() {
    this.getEmotions()
    console.log('@@ZL hi')
  }
  
  async getEmotions() {
    const response = await axios.get(emotionsAPI)
    console.log(response , '@@ZL response')
  }


  render() {
    return(
      <div>
        <div id="home-container">
          <h1 id="title">Emotions</h1>
        </div>
      </div>
    );
  }
};

export default Home;
