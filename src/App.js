//import logo from './logo.svg';
import React, { Component } from 'react'; 
import './App.css';
import Tabletop from 'tabletop';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    Tabletop.init({
      key: '11bUYYNIsEr4VTvAOTDorYIiOzTK98xuP5ANjqPeb9j4',
      callback: googleData => {
        console.log('google sheet data --->', googleData)
        this.setState({
          data:googleData
        })
      },
      simpleSheet: true
    })
  }
  render() {
    const {data} =this.state
    console.log('update state --->',this.state)
    return (
      <div className="App">
        <header className="App-header">
        
          <h1 className="App-title">React + Google Sheets Demo</h1>
       
        <div id="emplyee-details">
          {
          data.map(obj=>{

        
          return(
            <div key={obj.employee}>
              <p>{obj.employee}</p>
              <p>{obj.favDog}</p>
              <img alt={obj.favDog} src={obj.img}/>
            </div>
          )
        })
      }
        </div>
        </header>
      </div>
      
    );
  }
}

export default App;