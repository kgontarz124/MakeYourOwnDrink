import React from 'react';
import { Router,
    Route,
    hashHistory,
    IndexRoute,
    IndexLink
  } from 'react-router';


class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clickBack: false
        }
    }
    moveToMainHeader = (event) => {
        this.setState({
            clickBack: false
        })
    }


    render() {
        if(this.state.clickBack) {


        }


        return (
            <div className="main-footer">
                <div className="container">
                        <IndexLink to="/main_header">
                            <button onClick={this.moveToMainHeader} className="btn" type="button" name="button">Back to up!</button>
                        </IndexLink>
                </div>
            </div>
        )
    }
}

export {Footer}
