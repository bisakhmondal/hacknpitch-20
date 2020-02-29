import React from 'react';


export default class Navigation extends React.Component{
    render(){
      
            return(
                <nav  style={{display:'flex',justifyContent:'flex-end'}}>
                <p onClick={()=>this.props.onRouteChange('signin')} className="pointer f3 dim black link pa3 underline">Sign In </p>
                <p onClick={()=>this.props.onRouteChange('register')} className="pointer f3 dim black link pa3 underline">Register </p>
                </nav>
        );
    
        
    }
}

// onClick={()=>this.props.onRouteChange('signin')}

// onClick={()=>this.props.onRouteChange('register')}