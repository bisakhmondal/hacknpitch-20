import React from 'react';


import Navigation from './Components/Navigation/Navigation';
import SignIn from './Components/SignIn/Signin';
import Driver from './Components/Driver/driver';
import UserMap from "./Components/Driver/usermap.js"

// import './App.css';
// import 'tachyons';

// import Navigation from './Components/Navigation/Navigation';
// import SignIn from './Components/SignIn/Signin';
// import Driver from './Components/Driver/driver';

// // import './App.css';
// // import 'tachyons';
// class App extends React.Component {
//   constructor(){
//     super();
//     this.state={
//       isSigned:false,
//       route:'',
//       identity:''

//     }
//   }
//   onClickChangeRoute=(route)=>{
//     if(route==='home'){
//       this.setState({route:route,isSigned:false});
//     }
//     else if(route==='signin'){
//       this.setState({route:route,isSigned:true});
//     }
//   }
//   render(){
//   return (
//     <React.Fragment>
//     {/* <Navigation isSigned={this.state.isSigned} onClickChangeRoute={this.onClickChangeRoute} />
//     <SignIn /> */}
//     <Driver/>
//     </React.Fragment>



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
  // }/
  <div>
    <UserMap />
  </div>


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
