import React from 'react';
import './Signin.css'
import Particles from 'react-particles-js';
import logo from './blood-drop-red-512.png'
const particleoptions={
  "particles": {
      "number": {
          "value": 160,
          "density": {
              "enable": false
          }
      },
      "size": {
          "value": 10,
          "random": true
      },
      "move": {
          "direction": "bottom",
          "out_mode": "out"
      },
      "line_linked": {
          "enable": false
      }
  },
  "interactivity": {
      "events": {
          "onclick": {
              "enable": true,
              "mode": "remove"
          }
      },
      "modes": {
          "remove": {
              "particles_nb": 10
          }
      }
  }
}

class SignIn extends React.Component{
  constructor(props){
    super(props);
    this.state={
      userEmail:'',
      userPassword:'',
      userType:''
    }
  }
  onEmailChange=(event)=>{
    this.setState({userEmail:event.target.value})
  }
  onPasswordChange=(event)=>{
    this.setState({userPassword:event.target.value})
  }
  onRadio=(event)=>{
    this.setState({userType:event.target.value})
  }

  authenticate=()=>{
    fetch("http://localhost:3001/signin",{
      method:'post',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        email:this.state.userEmail,
        password:this.state.userPassword
      })
    })
    .then(response=>response.json())
    .then(data=>{
      if(data==='success'){
        this.props.onRouteChange('home');
      }
        else{
          alert("Invalid Credential");
          this.setState({userEmail:'',userPassword:''})
        }
    })
    
    // console.log(this.state)

  }
  render(){
    console.log(this.state);
    
    const {onRouteChange}=this.props;
    return(
      <div className='sign'>
        <Particles className='particles'
          params={particleoptions} />
         <img className=" logo" src={logo} height="450" width='400'  alt=''/> 
        <article className="articles br3 ba b--white-10 mv4 w-100 w-50-m w-35-l mw6 shadow-10 center">
        
        <main className="pa4 white">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input
                  className="pa2 input-reset ba bg-transparent white hover-black w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                  className="b pa2 input-reset ba bg-transparent white hover-black w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
              <div className="mv3">
                <label className="db  f3 pa3 fw6 lh-copy f6 white b" htmlFor="password">Please Select your Designation </label>
                <input
                // className='center b pa2 radio'
                  // className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white"
                  type="radio"
                  name="type"
                  value='donor'
                  onChange={this.onRadio}
    
                /> <label className='radio'>Donor</label>
                <input
                style={{justifyContents:"left"}}
                // className='center b pa2'
                  // className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white "
                  type="radio"
                  name="type"
                  value='receiver'
                  onChange={this.onRadio}
                /><label className='radio'>Receiver</label>
                <input
                // className='center b pa2'
                  // className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white "
                  type="radio"
                  name="type"
                  value='driver'
                  onChange={this.onRadio}
                /><label className='radio'>Driver</label>
                <input
                // className=" b pa2"
                  // className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white "
                  type="radio"
                  name="type"
                  value='company'
                  onChange={this.onRadio}
                /><label className='radio'>Company</label>
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.authenticate}
                className="b ph3 pv2 input-reset ba b--white white bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"black
              />
            </div>
            <div className="lh-copy mt3">
              <p  onClick={()=>onRouteChange('register')} className="f6 link dim white db pointer">Register</p>
            </div>
          </div>
        </main>
      </article>
      </div>
    
    );
  }

}



export default SignIn;