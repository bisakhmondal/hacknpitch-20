import React from 'react';
import { withRouter,Link } from 'react-router-dom';

const isAuth=()=>{
    return false;
}
const Navigation = ({history}) =>(
    <div>
        {!isAuth() &&(
            <nav  style={{display:'flex',justifyContent:'flex-end'}}>
                <Link className="pointer f3 dim black link pa3 underline" to="/signin">Sign In </Link>
                <Link className="pointer f3 dim black link pa3 underline" to='/register'>Register </Link>
            </nav>
        )}
        {isAuth() && (
            <nav  style={{display:'flex',justifyContent:'flex-end'}}>
                <Link className="pointer f3 dim black link pa3 underline" to='/'>Sign Out </Link>
            </nav>
        )}
    </div>
)
export default withRouter(Navigation);
