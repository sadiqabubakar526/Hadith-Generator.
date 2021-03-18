import React, { Component } from 'react'
import data from './data.json'
import HadithContainer from './components/HadithContainer'
export default class App extends Component {
  state={
    
  }
  generateRandomHadith=()=>{
    let random1 = Math.floor(Math.random()*data.Hadiths.length)
    let random2 = Math.floor(Math.random()*data.colors.length)

    let randomHadith= data.Hadiths[random1]
    let randomColor = data.colors[random2];
    this.setState({
      hadith:randomHadith.hadith,
      reference:randomHadith.reference,
      color:randomColor
    })
  }
  componentDidMount(){
    this.generateRandomHadith();
    console.log(this.state)
  }
  render() {
    const {hadith, reference, color}= this.state;
    return (
      <div className="App" style={{background:color}}>
        <HadithContainer hadith={hadith}
          reference={reference}
          color={color}
          onsubmit={this.generateRandomHadith}
          />
    </div>

    )
  }
}
