import React from 'react';

import {Router,BrowserRouter, withRouter} from 'react-router-dom';
import MainRouter from './MainRouter'
import './App.css';
import 'tachyons';
const App =() =>(
  // constructor(){
  //   super();
  //   this.state={
  //     isSigned:false,
  //     route:'',
  //     identity:''

  //   }
  // }
  <BrowserRouter>
    <MainRouter />
   </BrowserRouter>


  // onClickChangeRoute=(route)=>{
  //   if(route==='home'){
  //     this.setState({route:route,isSigned:false});
  //   }
  //   else if(route==='signin'){
  //     this.setState({route:route,isSigned:true});
  //   }
  // }
  // render(){
  // return (
  //   <div className="App">
  //   <Navigation isSigned={this.state.isSigned} onClickChangeRoute={this.onClickChangeRoute} />
  //   {/* <SignIn />
  //    */}
  //    {/* <Register />
  //     */}
  //     <Donor />
  //   </div>
    
  // )
  // }
)

export default App;
