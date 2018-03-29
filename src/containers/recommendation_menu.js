import React, { Component } from 'react';

import { connect } from 'react-redux';

// import SetCurrentMenu from '../components/set_current_menu.js';

import  SetCurrentRecommendation from '../components/set_current_recommendation';

class RecommendationMenu extends Component {    

    render() {

        if (!this.props.menu || !this.props.todayWeather || !this.props.additionalTodayWeather)
        return <div>Loading....</div>

        const { main } = this.props.additionalTodayWeather.weather[0];
        const { apparentTemperature } = this.props.todayWeather;

        return (

            <div className = "today-special">
                <h1> Current Recommendation </h1>
                <table border = "1">
                    <thead>
                        <tr>
                            <th>
                                Soup
                            </th>
                            <th>
                                Main
                            </th>
                            <th>
                                Side Dish
                            </th>
                            <th>
                                Liquor
                            </th>
                        </tr>
                    </thead>
                    

                        {/* name : { soup, main, side, liquor }*/}
                        {/* file : { soup, main, side, liquor }*/}
                        {/* price: { soup, main, side, liquor }*/}
                        
                        <SetCurrentRecommendation
                            
                            inputMenus = { this.props.menu }
                            mainWeather = { main }
                            temperature = { apparentTemperature }
                                // setRecommendationMenuNames = { this.foodNames }   
                        />
                          
                    
                </table>

            </div>
        );

    }

}

function mapsPropsToState ({ menu, additionalTodayWeather, todayWeather }) {

    return ({ menu, additionalTodayWeather, todayWeather });

}

export default connect (mapsPropsToState)(RecommendationMenu);


/*
function regexFilter(weather) {

    const weatherCategories = ['clear', 'cloud', 'rain', 'snow', 'mist', 'drizzle'];
    
    let result;
    weatherCategories.map( (data) => {

        const patt = new RegExp(`${data}+`, 'i');

        if (weather.match(patt))
        result = weather.match(patt);

    });

    return result[0];

}


    setCurrentSoup(menu, subWeather, mainWeather) {

       
        console.log('menu : ',menu);
        console.log('subWeather : ',subWeather);
        console.log('mainWeather : ',mainWeather);

        const weather_food_index = [ 0, 1, 2, 3 ];
        const temp_food_index = [ 0, 1, 2 ];

        const currentWeather = subWeather.weather[0].main;
        console.log('currentWeather: ', currentWeather)
        const getWeather = regexFilter(currentWeather);
        console.log('weather result:', getWeather);

        let feelTemp = _.round((mainWeather.apparentTemperature -32) / 1.8);
        feelTemp = parseInt(feelTemp);

        console.log('feelTemp: ', feelTemp, typeof feelTemp)

        const { soup } = this.props.menu;

        console.log('soup: ',soup)

        let indexValue;

        switch(getWeather) {

            case 'Clear':

                indexValue=weather_food_index[0];

                if (feelTemp > 3) {

                    indexValue = indexValue + temp_food_index[0];

                } else if (feelTemp > -3 && feelTemp <= 3) {

                    indexValue = indexValue + temp_food_index[1];

                } else {

                    indexValue = indexValue + temp_food_index[2];

                }
                
                break;

            case 'Cloud':

                indexValue=weather_food_index[1];

                if (feelTemp > 3) {

                    indexValue = indexValue + temp_food_index[0];

                } else if (feelTemp > -3 && feelTemp <= 3) {

                    indexValue = indexValue + temp_food_index[1];

                } else {

                    indexValue = indexValue + temp_food_index[2];

                }
                
                break;

            case 'Rain':

                indexValue=weather_food_index[2];

                    if (feelTemp > 3) {

                        indexValue = indexValue + temp_food_index[0];

                    } else if (feelTemp > -3 && feelTemp <= 3) {

                        indexValue = indexValue + temp_food_index[1];

                    } else {

                        indexValue = indexValue + temp_food_index[2];

                    }
                
                break;
            
                case 'Mist':

                indexValue=weather_food_index[2];

                    if (feelTemp > 3) {

                        indexValue = indexValue + temp_food_index[0];

                    } else if (feelTemp > -3 && feelTemp <= 3) {

                        indexValue = indexValue + temp_food_index[1];

                    } else {

                        indexValue = indexValue + temp_food_index[2];

                    }
                
                break;
            
                case 'Drizzle':

                indexValue=weather_food_index[2];

                    if (feelTemp > 3) {

                        indexValue = indexValue + temp_food_index[0];

                    } else if (feelTemp > -3 && feelTemp <= 3) {

                        indexValue = indexValue + temp_food_index[1];

                    } else {

                        indexValue = indexValue + temp_food_index[2];

                    }
                
                break;



            case 'Snow':

                indexValue=weather_food_index[3];

                if (feelTemp > 3) {

                    indexValue = indexValue + temp_food_index[0];

                } else if (feelTemp > -3 && feelTemp <= 3) {

                    indexValue = indexValue + temp_food_index[1];

                } else {

                    indexValue = indexValue + temp_food_index[2];

                }
                
                break;
            
            default:
   
        }

        console.log('indexValue', indexValue);

        if (indexValue >= 0 && indexValue <2 ) {

            
            const {name, description, price, file } = soup[1].id_1;
            console.log(name, description, file);

            this.setState({

                name,
                desc: description,
                price,
                file

            })

        } else if (indexValue >= 2 && indexValue < 4) {

            //console.log(soup[2]);
            const {name, description, price, file } = soup[2].id_2;
            console.log(name, description, file);


            this.setState({

                name,
                desc: description,
                price,
                file


            })
            
        
        } else {

            const { name, description, price, file } = soup[0].id_0;
            console.log(name, description, file);


            this.setState({

                name,
                desc: description,
                price,
                file


            })
        }

        

    } */



 /*
    componentWillReceiveProps(nextProps) {

       const { menu, additionalTodayWeather, todayWeather } = nextProps;

       //if (menu && additionalTodayWeather && todayWeather)
       //this.setCurrentSoup(menu, additionalTodayWeather, todayWeather);

       // console.log('componentWillReceiveProps: ', nextProps)
       // this.setCurrentSoup();
        

    }
*/













/*
    getCurrentFoodNames() {

        return(
            
            
            <td>
                { this.callSetCurrentWeather() }
                    Name: { this.state.name }
            </td>
               

        );

    }

    getCurrentFoodFiles() {

        const  src = `../images/${this.state.file}`;

        return(

            <td>
                <img src = { src }  alt = "gamjasoup" />
            </td>
                    
        );

    }

    getCurrentFoodPrices() {

        return(

            <td>
                Price: ${ this.state.price }
            </td>
                
        );
    }
    
    callSetCurrentWeather() {

        const { menu, additionalTodayWeather, todayWeather } = this.props;

        return 
            
            <div>

             <SetCurrentMenu 

                    // menu_weather = { { menu, additionalTodayWeather, todayWeather } }

                   // setup = {() => { this.setState({
                        
                  //      name : '',
                  //      desc : '',
                  //      price : null,
                  //      file : ''

                  //      })} } 
                
                /> 
                    
            </div>
            
        
        }

*/
