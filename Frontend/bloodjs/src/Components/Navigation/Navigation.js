import React from 'react';
import { withRouter,Link } from 'react-router-dom';



class Navigation extends React.Component {   
    constructor(){
        super();
        this.state={
            signed:false
        }
    }
    isAuth=()=>{
        if(localStorage.getItem('FBIdToken')){
            this.setState({signed:true})
            return true;
        }
        return false;
    }
    SignOut=()=>{
        localStorage.removeItem('FBIdToken');
        localStorage.removeItem('type');
        this.props.history.push('/signin')
    
    }
    render(){
        
    return (
    <div>
        {!localStorage.getItem('FBIdToken') &&(
            <nav  style={{display:'flex',justifyContent:'flex-end'}}>
            <a href="file:///home/bisakh/Desktop/expert/index.html#home-section" className="pointer f5 dim black link pa2 underline">Home </a>
            <Link className="pointer f5 dim black link pa2 underline" to="/Driver">Driver </Link>
                <Link className="pointer f5 dim black link pa2 underline" to="/signin">Sign In </Link>
                <Link className="pointer f5 dim black link pa2 underline" to='/register'>Register </Link>
                
            </nav>
        )}
        {localStorage.getItem('FBIdToken') && (
            <nav  style={{display:'flex',justifyContent:'flex-end'}}>

            <a href="file:///home/bisakh/Desktop/expert/index.html#home-section" className="pointer f5 dim black link pa2 underline">Home </a>
            <Link className="pointer f5 dim black link pa2 underline" to="/Driver">Driver </Link>
            <Link className="pointer f5 dim black link pa2 underline" to='/update/donor'>Profile Update</Link>
            <Link className="pointer f5 dim black link pa2 underline" to='/dashboard'>Dashboard </Link>
                <Link className="pointer f5 dim black link pa2 underline" onClick={this.SignOut} >Sign Out </Link>
                
            </nav>
        )}
    </div>
    );
        }
}
export default withRouter(Navigation);
