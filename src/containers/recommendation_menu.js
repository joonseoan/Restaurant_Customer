import React from 'react';

import { connect } from 'react-redux';

import  SetCurrentRecommendation from '../components/set_current_recommendation';


function RecommendationMenu (props) {

    if (!props.menu || !props.todayWeather || !props.additionalTodayWeather)
        return <div>Loading....</div>

        const { main } = props.additionalTodayWeather.weather[0];
        const { apparentTemperature } = props.todayWeather;

        console.log ('props.menu', props.menu)
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
                            <th>
                                Soda
                            </th>
                        </tr>

                    </thead>
                    {/*console.log(main)}
                    console.log(props.menu) */}
                        
                        <SetCurrentRecommendation
                            
                            inputMenus = { props.menu }
                            mainWeather = { main }
                            temperature = { apparentTemperature }
                              
                        />
                          
                </table>

            </div>
        );
}

function mapsPropsToState ({ menu, todayWeather, additionalTodayWeather,  }) {

    return ({ menu, todayWeather, additionalTodayWeather,  });

}

export default connect (mapsPropsToState)(RecommendationMenu);

