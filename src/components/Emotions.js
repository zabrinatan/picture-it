import React, { Component } from 'react'
import axios from 'axios'

const emotionsAPI = "http://localhost:3000/emotions"
class Emotions extends Component {
  constructor() {
    super()
    this.state = {
      emotions: [],
    }
  }

  componentDidMount() {
    this.getEmotions()
    console.log('@@ZL hi')
  }
  
  async getEmotions() {
    const response = await axios.get(emotionsAPI)
    this.setState({emotions: response.data})
    console.log(response , '@@ZL response')
  }


  render() {
    return(
      <div>
          <h1 id="title">Emotions</h1>
          {this.state.emotions.map((emotion) => {
            return <div>
              <h1>{emotion.emotion_name}</h1>
              <img src={emotion.image}/>

            </div>
          })}
      </div>
    )
  }
};

export default Emotions
