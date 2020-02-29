import React from 'react';
import Navigation from './Components/Navigation/Navigation'
import './App.css';
import 'tachyons'
class App extends React.Component {
  constructor(){
    super();
    this.state={
      isSigned:false,
      route:''
    }
  }
  onClickChangeRoute=(route)=>{
    if(route==='home'){
      this.setState({route:'home',isSigned:false});
    }
    else if(route==='signin'){
      this.setState({route:'signin',isSigned:true});
    }
  }
  render(){
  return (
    <Navigation />
  );
  }
}

export default App;
