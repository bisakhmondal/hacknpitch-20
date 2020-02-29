import React from 'react';
import Navigation from './Components/Navigation/Navigation';
import SignIn from './Components/SignIn/Signin';
import Register from './Components/Register/Register.js';
import Donor from './Components/Profile/Donor';
import {Route,Switch} from 'react-router-dom';
import 'tachyons'
const MainRouter=()=>{
    return(
        
        <div>
        <Navigation />
        <Switch>
            
            <Route exact path='/' component={SignIn} />
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/register/donor' component={Donor} />
        </Switch>
        </div>
    )
}
export default MainRouter;