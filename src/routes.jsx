import React from 'react';
import {
    Route, 
    Switch,
    withRouter
} from 'react-router-dom';
import {Splash} from 'lori-bites';

// wrapper splash around with router
const Home = withRouter(Splash);

const App = () => {
    return(
        <Switch>
            <Route exact component={Splash}/>
        </Switch>
    );
};

export default App;