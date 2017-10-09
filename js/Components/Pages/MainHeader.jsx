import React from 'react';
import { Router,
    Route,
    hashHistory,
    IndexRoute,
    IndexLink
} from 'react-router';

import {Direction} from './Direction.jsx'
import {ListOfRecipes} from './ListOfRecipes.jsx'
import {Footer} from './Footer.jsx'


class MainHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: [],
            activeSlide: 0,
            click: false

        }
    }

    componentDidMount() {
        const urlCategory = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
        fetch(urlCategory).then( resp => {
         return resp.json();
    }).then( response   =>  {
         console.log("response"), response;

            this.setState({
                tab: response.drinks
                })
            }).catch( err   =>  {
         console.log('Błąd!', err);
        });
    }


    clickLeftBtn = (event) => {
        let activeSlide = this.state.activeSlide - 1;

        if (activeSlide < 0) {
            activeSlide = this.state.tab.length - 1;
        }

        this.setState({
            activeSlide,
            click: false
        })
    }


    clickRightBtn = (event) => {
        let activeSlide = this.state.activeSlide + 1;

        if (activeSlide > this.state.tab.length -1) {
            activeSlide = 0;
        }

        this.setState({
            activeSlide,
            click: false
        })
    }


    clickCheckBtn = (event) => {
        this.setState({
            click: true
        })
    }

    showButtonBackToHeader = (displayFromChildren) => {
        console.log("w bjdjdfsjdfkj")
        this.setState({
            display: displayFromChildren
        })
    }

    render() {
        let listOfDrinks = [];
        if(this.state.tab.length > 0) {
            listOfDrinks = this.state.tab.map((element, i) => {
                let name = "images/" + element.strCategory.replace(/\//g, ' ').split(" ")[0].toLowerCase() + ".png";
                let myclassName = "slide"
                if( i === this.state.activeSlide ) {
                    myclassName = myclassName + " active"
                }

                let url = element.strCategory.replace(/\//g, ' ').split(" ")[0].toLowerCase()
                return <div key={i} className={myclassName} key={i}>
                    <div className="category-icon">
                        <img src={name} alt={element.strCategory} width="256px" height="256px"/>
                    </div>
                    <div className="category-name">
                        <h2 >{element.strCategory}</h2>
                        <IndexLink to={`/main_header/${url}`} >
                        <button onClick={this.clickCheckBtn} className="btn">Check it</button>
                        </IndexLink>
                    </div>
                </div>
            })
        }


        let tagOfDrinks = [];
            if(this.state.tab.length > 0) {
                tagOfDrinks = this.state.tab.map((element, i) => {
                let myclassName;
                if( i === this.state.activeSlide ) {
                    myclassName = "activee";
                }

                return <li className={myclassName} key={i}>{element.strCategory}</li>
            })
        }

        let list = []
        if(this.state.click) { /// jak uzytkownik cokolwiek innego kliknie na stronie to ustawiac state.click na false
            list = <div>
                <Direction/>
                <ListOfRecipes
                    tab={this.state.tab}
                    activeSlide={this.state.activeSlide}
                />
            <Footer/>
            </div>
        }

        return (
            <div>
                <div className="main-header">
                    <div className="container">
                        <h1 className="main-title">What kind of drink do you want?</h1>
                        <section className="main-slider">
                            <div className="row">
                                <div className="col-2-12">
                                    <button onClick={this.clickLeftBtn} type="button" className="left" ><img src="images/left_arrow.png" alt="left_arrow" width="90px" height="90px"/></button>
                                </div>

                                <div className="col-8-12">
                                    <div className="slider">
                                        {listOfDrinks}
                                    </div>
                                </div>

                                <div className="col-2-12">
                                    <button onClick={this.clickRightBtn} type="button" className="right"><img src="images/right_arrow.png" alt="right_arrow" width="90px" height="90px"/></button>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="main-nav">
                    <div className="container">
                        <ul>
                            {tagOfDrinks}
                        </ul>
                    </div>
                </div>
                {list}
            </div>
        )
    }
}

export {MainHeader}
