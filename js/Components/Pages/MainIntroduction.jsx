import React from 'react';
import { Router,
    Route,
    hashHistory,
    IndexRoute,
    IndexLink
  } from 'react-router';

import {Template} from './Template.jsx'


class MainIntroduction extends React.Component {

    moveToMainHeader = (event) => {
        return <div>
            <Template/>
        </div>

    }

    render() {

        return (
            <div className="main-introduction">
                <div className="container">
                    <section className="introduction">
                        <div className="row">
                            <div className="col-6-12">
                                <div className="main-cocktail">
                                    <div className="dots">
                                        <img className="dot-1" src="images/dot.png" alt="dot"/>
                                        <img className="dot-2" src="images/dot.png" alt="dot"/>
                                        <img className="dot-3" src="images/dot.png" alt="dot"/>
                                        <img className="dot-4" src="images/dot.png" alt="dot"/>
                                        <img className="dot-5" src="images/dot.png" alt="dot"/>
                                        <img className="dot-6" src="images/dot.png" alt="dot"/>
                                        <img className="dot-7" src="images/dot.png" alt="dot"/>
                                        <img className="dot-8" src="images/dot.png" alt="dot"/>
                                    </div>

                                    <img className="cocktail" src="images/main_cocktail.png" alt="main_cocktail"/>
                                </div>
                            </div>
                            <div className="col-6-12">
                                <div className="text-introduction">
                                    <h1 className="main-title">Would you like something special to drink?</h1>
                                        <IndexLink to="/main_header" className="choose-btn">
                                            <button className="btn" type="button" name="button" onClick={this.moveToMainHeader}>Check how to do it  &gt;</button>
                                    </IndexLink>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export {MainIntroduction}
