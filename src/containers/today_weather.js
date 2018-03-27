import React, { Component } from 'react';

import { connect } from 'react-redux';

import _ from 'lodash';


function roundData (weather) {
   
    return (_.round(weather));

}

class TodayWeather extends Component {

    constructor (props) {

        super(props);
        
        this.state = {

            weather : null,
            additionalWeather: null

        }

    }

    render() {

        if (!this.props.todayWeather || !this.props.additionalTodayWeather)
        return (<div>Loading...</div>);

       const weather = this.props.todayWeather;
       const additionalWeather = this.props.additionalTodayWeather;
        
        return(
        
            <div> 

                <table border= "1">
                    <thead>
                        <tr>
                            
                            <th>
                                Today Weather Summary
                            </th>
                            <th>
                                Max. Temperature (C)
                            </th>
                            <th>
                                Min. Temperature (C)
                            </th>
                            <th>
                                Current Weather
                            </th>
                            <th>
                                Current Temperature (C)
                            </th>
                            <th>
                                Apparent Temperature (C)
                            </th>
                            <th>
                                Weather Description
                            </th>
                            <th>
                                Wind Speed (KM/Hour)
                            </th>

                        </tr>
                    </thead>
                    
                    <tbody>
                    
                        <tr>
                            
                            <th>
                                { weather.summary }
                            </th>
                            <th>
                                { roundData((additionalWeather.main.temp_max) - 273) }
                            </th>
                            <th>
                                { roundData((additionalWeather.main.temp_min) - 273) }
                            </th>
                            <th>
                                { additionalWeather.weather[0].main }
                            </th>
                            <th>
                                { roundData((weather.temperature -32) / 1.8) }
                            </th>
                            <th>
                                { roundData((weather.apparentTemperature -32) / 1.8) }
                            </th>
                            <th>
                                { additionalWeather.weather[0].description }
                            </th>
                            <th>
                                { roundData(weather.windSpeed * 1.61) }
                            </th>

                        </tr>

                    </tbody>

                </table>

            </div>);

    }
}

function mapStateToProps ({ todayWeather, additionalTodayWeather }) {
    
    return({ todayWeather, additionalTodayWeather });

}

export default connect(mapStateToProps)(TodayWeather);