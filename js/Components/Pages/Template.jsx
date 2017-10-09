import React from 'react';

import {MainHeader} from './MainHeader.jsx'
import {Direction} from './Direction.jsx'
import {ListOfRecipes} from './ListOfRecipes.jsx'
import {Footer} from './Footer.jsx'


class Template extends React.Component {
    render()  {
        return <div>
            <MainHeader/>
            {this.props.children}
        </div>
    }
}

export {Template}
