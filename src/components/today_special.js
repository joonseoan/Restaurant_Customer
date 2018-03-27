import React, { Component } from 'react';


export default class TodaySpecial extends Component {

    constructor(props) {

        super(props)

        this.state = {

            food1: '',
            food2: '',
            food3: ''

        }


    }

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