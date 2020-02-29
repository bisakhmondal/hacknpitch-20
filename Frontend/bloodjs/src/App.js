import React from 'react';
import Navigation from './Components/Navigation/Navigation';
import SignIn from './Components/SignIn/Signin';

import './App.css';
import 'tachyons';
class App extends React.Component {
  constructor(){
    super();
    this.state={
      isSigned:false,
      route:'',
      identity:''

    }
  }
  onClickChangeRoute=(route)=>{
    if(route==='home'){
      this.setState({route:route,isSigned:false});
    }
    else if(route==='signin'){
      this.setState({route:route,isSigned:true});
    }
  }
  render(){
  return (
    <div className="App">
    <Navigation isSigned={this.state.isSigned} onClickChangeRoute={this.onClickChangeRoute} />
    <SignIn />
    </div>
    
  )
  }
}

export default App;
