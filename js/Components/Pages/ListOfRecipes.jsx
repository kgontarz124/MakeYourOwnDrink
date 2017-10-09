import React from 'react';
import {Direction} from './Direction.jsx'


class Drink extends React.Component {
    render() {
        const element = this.props.element.drinks[0];
        let listOfIngredients = [];
        let listOfMeasure = [];
        let listOfAll = [];

        let j = 1;
        let k = 1;
        for (var key in element) {
            if( key === ("strIngredient"+j) && element[key] !== "" && element[key] !== null ) {
               j++;
               listOfIngredients.push(<span>{element[key]}</span>)
            }
           if( key === ("strMeasure"+k) && element[key] !== "" ) {
              k++;
              listOfMeasure.push(<span>{element[key]}</span>)
            }
        }


        for(let i=0; i< listOfIngredients.length ; i++) {
            listOfAll.push(<li >{listOfIngredients[i]}: {listOfMeasure[i]}</li>)
        }

        return <section className="list-of-recipes">
                <div className="container">

                    <div className="recipe-box">
                        <div className="row">
                            <div className="col-6-12">
                                <div className="recipe-img">
                                    <img src={element.strDrinkThumb} alt={element.strDrink} width="340px" height="300px"/>
                                </div>
                            </div>
                            <div className="col-6-12">
                                <div className="recipe-content">
                                    <div className="content">
                                        <h3 >{element.strDrink}</h3>
                                        <div className="recipe-ingredients">
                                            <div>
                                                <span className="ingredients">Ingredients</span>
                                                <ul>
                                                    {listOfAll}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="recipe-instruction">
                                            <span >Instruction: {element.strInstructions}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    }
}

class ListOfRecipes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabName: [],
            tabId: [],
            tabAll: []
        }
    }

    componentWillReceiveProps() {
        //first fetch
        if(this.props.tab != undefined && this.props.tab.length > 0) {

            const lastUrl = this.props.tab[this.props.activeSlide].strCategory
            const urlOrdinary = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c='+ lastUrl;
            let idDrinkArr = [];



            fetch(urlOrdinary).then( resp => {
                return resp.json();
            }).then( response   =>  {
                let tabName = response.drinks;
                //Zapisuje do tablicy id wszystkich drinkow
                for(let i=0; i<tabName.length; i++) {
                    idDrinkArr.push(tabName[i].idDrink);
                }
                return idDrinkArr;

            }).then( response => {
                console.log( response);
                let apiRequests = [];
                for(let i=0; i < idDrinkArr.length; i++) {
                    let urlId = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + idDrinkArr[i];
                    apiRequests.push(urlId)
                }
                return apiRequests
            }).then( urls => {
                return Promise.all(urls.map(url => {
                   return fetch(url).then(resp => resp.json())
                }))
            }).then( response => {
                this.setState({
                    tabAll: response
                })
            })
        }
    }

    componentDidUpdate() {
        console.log("Komponent zrobił update");
    }


    render() {

            let listOfResults = [];
            if(this.state.tabAll.length > 0) {
                listOfResults = this.state.tabAll.map((element, i) => {
                    return <div>
                        <Drink element={element} key={i}/>
                    </div>
                })
            }
            return <div>
                {listOfResults}
            </div>
    }
}

export {ListOfRecipes}
