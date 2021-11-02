import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

// class Waktu extends Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       detikku : props.start
//     }
//   }
//   componentDidMount(){
//     this.addInterval = setInterval( () => this.increase(), 1000)
//   }
//   componentWillUnmount(){
//     clearInterval(this.addInterval)
//   }

//   increase(){
//       this.setState((state,props) => ({
//         detikku: parseInt(state.detikku) + 2
//       }))
//   }

//   render(){
//     return(
//       <div>
//         <p> {this.state.detikku} Detik</p>
//       </div>
//     )
//   }
// }

class Timer extends Component{
  constructor(props){
    super(props)
    this.state = {
      time : props.start
    }
  }

  componentDidMount(){
    this.addInterval = setInterval( () => this.increase(),1000)
  }

  componentWillUnmount(){
    clearInterval(this.addInterval)
  }

  increase() {
    // update statenya
    this.setState((state,props) => ({
      time: parseInt(state.time) + 1
    }))
  }
  render(){
    return(
      <div>
       <p>{this.state.time} Detik</p>
      </div>
    )
  }
  
  
}

function Biodata(props){
  return <span> umurnya {props.age} </span>;
}


function Greeting(props){
  return <h1> Halo {props.name} - <Biodata age={props.age}/> </h1>;
}
// Components
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <Greeting name="Alfan" age="25" /> 
        <Greeting name="Davi" age="20" /> 
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Timer start="0"/>
        {/* <Waktu start="0" /> */}
      </header>
    </div>
  );
}

export default App;
