import React, { Component } from 'react';

import { connect } from 'react-redux';

function regexFilter(weather) {

    const weatherCategories = ['clear', 'cloud', 'rain', 'snow'];
    
    let result;
    weatherCategories.map( (data) => {

        const patt = new RegExp(`${data}+`, 'i');

        if (weather.match(patt))
        result = weather.match(patt);

    });

    return result[0];

}

class RecommendationMenu extends Component {

    constructor (props) {

        super(props);

        this.state = {

            name: '',
            desc: '',
            price: null,
            file: '',
            all: null

        }
    }

    setCurrentSoup() {

        const weather_food_Index = [ 0, 1, 2, 3 ];
        const temp_food_Index = [ 0, 1, 2 ];

        // console.log('additionalTodayWeather', this.props.additionalTodayWeather)
        // console.log('todayWeather', this.props.todayWeather)

        const mainWeather = this.props.additionalTodayWeather.weather[0].main;
        const weather = regexFilter(mainWeather);
        console.log('weather result:', weather);

        const soup = this.props.menu.soup;
        let indexValue;

        switch(weather) {
            case 'Clear':
            
                indexValue=weather_food_Index[0];
                
                break;
            case 'Cloud':

                indexValue=weather_food_Index[1];
                
                break;
            case 'Rain':

                indexValue=weather_food_Index[2];
                
                break;
            case 'Snow':

                indexValue=weather_food_Index[3];
                
                break;
            
            default:
                
        }





        



        /**
         * clear/cloud/rain/snow
         * temp: -2 / 0 / 2 => apparent temp
         * humidity : 나중에...
         * 
         */



    }

    /*
    componentDidMount() {

        console.log('soup', this.props.menu.soup);
        //console.log('main', this.props.menu.main);
        // console.log('side', this.props.menu.side);
        this.setCurrentSoup();

    }*/

    getFoodNames() {

        return(
            
            <tr>
                <td>
                    Name:
                </td>
                <td>
                    Name:
                </td>
                <td>
                    Name:
                </td>
                <td>
                    Name:
                </td> 
            </tr>

        );

    }

    getCurrentRecommendation() {

        return(

            <tr>

                <td>
                    <img src= "../images/GamjaSoup_6.PNG" alt = "gamjasoup" />
                </td>
                <td>
                    <img src = "../images/Bosam_1.PNG" alt = "bosam" />
                </td>
                <td>
                    <img src = "../images/EggMari_9.PNG" alt = "eggmari" />
                </td>
                <td>
                    <img src = "../images/soju_13.PNG" alt = "soju" />
                </td>
                
            </tr>
            
        );

    }

    getPrices() {

        return(

            <tr>
                <td>
                    Price:
                </td>
                <td>
                    Price:
                </td>
                <td>
                    Price:
                </td>
                <td>
                    Price:
                </td> 
                    
            </tr>

        );
    }

    render() {

        if (!this.props.menu || !this.props.todayWeather || !this.props.additionalTodayWeather)
        return <div>Loading....</div>

        const weather = this.props.additionalTodayWeather;
        this.setCurrentSoup();
        //console.log('menu', this.props.menu);

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
                    <tbody className = "today-speical-food" >

                            { this.getFoodNames() }
                            { this.getCurrentRecommendation() }
                            { this.getPrices() }
                            
                        
                    </tbody>
                </table>

            </div>
        );

    }

}

function mapsPropsToState ({ menu, todayWeather, additionalTodayWeather }) {

    return ({ menu, todayWeather, additionalTodayWeather });

}

export default connect (mapsPropsToState)(RecommendationMenu);