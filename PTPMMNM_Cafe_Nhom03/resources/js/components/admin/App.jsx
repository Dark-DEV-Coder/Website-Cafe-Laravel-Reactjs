import React from "react";

import LoginContainer from "./login_container";
// import { Route, Switch } from 'react-router-dom';
// import Home from "./home";


const App = () => {
    return (
        <>
            <div>
                <LoginContainer />
                {/* <Home /> */}
            </div>

        </>

        // <>
        //     <div><LoginContainer /></div>
        //     {/* <Switch>
        //         <Route path="/home" component={Home} />
        //     </Switch> */}
        // </>
    )
}

export default App