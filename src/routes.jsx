import React from 'react';
import {
    Route, 
    Switch
} from 'react-router-dom';
import Splash from './modules/lori/components/splash.jsx';

const App = () => {
    return(
        <Switch>
            <Route exact component={Splash}/>
        </Switch>
    );
};

export default App;