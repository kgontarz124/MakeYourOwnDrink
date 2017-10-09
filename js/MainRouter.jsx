import React from 'react';
import { Router,
    Route,
    hashHistory,
    IndexRoute,
    IndexLink
  } from 'react-router';


import {MainIntroduction} from './Components/Pages/MainIntroduction.jsx';
import {Template} from './Components/Pages/Template.jsx'
import {MainHeader} from './Components/Pages/MainHeader.jsx'
import {Direction} from './Components/Pages/Direction.jsx'
import {ListOfRecipes} from './Components/Pages/ListOfRecipes.jsx'
// import {Footer} from './Components/Pages/Footer.jsx'



class MainRouter extends React.Component {
    render()  {
        return  <Router history={hashHistory}>
            <Route path="/" component={MainIntroduction}/>
            <Route path="/main_header" component={Template}>
                <Route path="/main_header/:category" component={ListOfRecipes}/>
            </Route>
         </Router>

    }
}

export {MainRouter}
