import React from 'react';
import './Signin.css'
import Particles from 'react-particles-js';
import {Link,withRouter} from 'react-router-dom';
import axios from 'axios';
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

class SignIn extends React.Component{
  constructor(props){
    super(props);
    this.state={
      userEmail:'',
      userPassword:'',
      userType:'',
      error:''
    }
  }
  componentDidMount(){
    if(localStorage.getItem('FBIdToken')!==null){
      this.props.history.push('/dashboard')
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
    const userData={
      email:this.state.userEmail,
      password:this.state.userPassword
    }
      axios.post('https://us-central1-blood-fb77e.cloudfunctions.net/api/login',userData).then(res=>{
        this.setAuthorizationHeader(res.data)
        console.log("hi")
        localStorage.setItem('type',this.state.userType)
      this.props.history.push('/dashboard');
      })
      .catch(err=>this.setState({error:err.response.data}));
  }
  setAuthorizationHeader = (token) => {
    const FBIdToken = `Bearer ${token}`;
    localStorage.setItem('FBIdToken', FBIdToken);
    axios.defaults.headers.common['Authorization'] = FBIdToken;
  };
  render(){

    
    return(
      <div className='sign'>
        <Particles className='particles'
          params={particleoptions} />
         {/* <img className=" logo" src={logo} height="450" width='400'  alt=''/>  */}
        <article className="articles br3 ba b--white-10 mv4 w-100 w-50-m w-25-l mw6 shadow-10 center">
        
        <main className="pa4 black">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input
                  className="pa2 input-reset ba bg-transparent black hover-blue w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                  className="b pa2 input-reset ba bg-transparent black hover-blue w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
              <div className="mv3">
                <label className="db  f3 pa3 fw6 lh-copy f6 black b" htmlFor="password">Please Select your Designation </label>
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
              {/* <input
                onClick={this.authenticate}
                className="b ph3 pv2 input-reset ba black btn btn-primary grow pointer f6 dib"
                type="submit"
                value="Sign in"
              /> */}
              <Link
                
                className="b ph3 pv2 input-reset ba black btn btn-primary grow pointer f6 dib"
                // type="submit"
                value="Sign in"
                to='/dashboard'
                onClick={this.authenticate}
              >Sign In</Link>
            </div>
            <div className="lh-copy mt3">
              <p className="f6  black center db" to='/register'>Don't have an account? <Link className="link dim pointer">Register</Link></p>
            </div>
          </div>
        </main>
      </article>
      </div>
    
    );
  }

}



export default withRouter(SignIn);