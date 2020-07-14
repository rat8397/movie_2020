import React from 'react';
import Potato from './Potato'
import PropTypes from "prop-types";
class App extends React.Component{
  constructor(props){
    super(props)
    console.log("CONSTRUCTOR");
  }
  state = {
    count : 0
  }
  add =()=> {
    this.setState(current=>({count:current.count+1}));

  }
  minus=()=>{
    this.setState(current=>({count:current.count-1}));

  }
  componentDidMount(){
    console.log("component DID MOUNT")
  }
  componentDidUpdate(){
    console.log("component DID UPDATE")
  }
  render(){
    console.log("render");

    return (
      <>
        <h1> JUNZZI APP </h1>
        <h2> {this.state.count}</h2>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
      </>
    );
  }
}
//Potato -> external component
//F -> Internal component
export default App;
