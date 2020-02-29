import React from 'react';
import Particles from 'react-particles-js';
import './Register.css'

// import logo from 

const particleoptions={
  "particles": {
      "number": {
          "value": 100
      },
      "size": {
          "value": 3
      }
  },
  "interactivity": {
      "events": {
          "onhover": {
              "enable": true,
              "mode": "repulse"
          }
      }
  }
}
class Register extends React.Component{
  constructor(props){
    super(props);
    this.state={
      userEmail:'',
      userPassword1:'',
      userPassword2:'',
      name:'',
      userType:''
    }
  }
  onEmailChange=(event)=>{
    this.setState({userEmail:event.target.value})
  }
  onNameChange=(event)=>{
    this.setState({name:event.target.value})
  }
  onPasswordChange1=(event)=>{
    this.setState({userPassword1:event.target.value})
  }
  onPasswordChange2=(event)=>{
    this.setState({userPassword2:event.target.value})
  }

  authenticate=()=>{
    fetch("http://localhost:3001/register",{
      method:'post',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        email:this.state.userEmail,
        password:this.state.userPassword,
        name:this.state.name
      })
    })
    .then(response=>response.json())
    .then(user=>{
      if(user){
        this.props.loadProfile(user);
        this.props.onRouteChange('home');
      }
    })
    
    // console.log(this.state)

  }
  render(){
    const {onRouteChange}=this.props;
    return(
      <div className='sign'>
        <Particles className='particles'
          params={particleoptions} />
         {/* <img className=" logo" src={logo} height="450" width='400'  alt=''/>  */}
        <article className="articles br3 ba b--white-10 mv4 w-100 w-50-m w-30-l mw6 shadow-10 center">
        <div className="reg">
        <main className="pa4 white">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
                <input
                  className="pa2 input-reset ba bg-transparent white hover-black w-100"
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.onNameChange}
                />
              </div>
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
                  onChange={this.onPasswordChange1}
                />
              </div>

              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Confirm Password</label>
                <input
                  className="b pa2 input-reset ba bg-transparent white hover-black w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange2}
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
                value="Register"
              />
            </div>
            <div className="lh-copy mt3">
              <p  onClick={()=>onRouteChange('register')} className="f6 link dim white db pointer">Sign In</p>
            </div>
          </div>
        </main>
        </div>
      </article>
      </div>
    
    );
  }
}



export default Register;

// onClick={() => onRouteChange('register')}