import React, { Component } from 'react';

import { connect } from 'react-redux';

class TodayWeather extends Component {

    constructor (props) {

        super(props);
        
        this.state = {

            weather : null,
            additionalWeather: null

        }

    }

    /*
    componentDidMount() {

       this.weatherUpdate()
       setInterval(this.weatherUpdate, 120000);

    }
    */

    /*
    weatherUpdate() {

        const weather = this.props.todayWeather;
        const additionalWeather = this.props.additionalTodayWeather;

        console.log('kkkkk',weather, additionalWeather)
        this.setState({

                weather : weather,
                additionalWeather : additionalWeather

        })
        
    }*/

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
                                Today Weather
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
                                Current Temperature
                            </th>
                            <th>
                                Apparent Temperature
                            </th>
                            <th>
                                Weather Description
                            </th>
                            <th>
                                Wind Speed
                            </th>

                        </tr>
                    </thead>
                    
                    <tbody>
                    
                      <tr>
                          {console.log('info',this.state.weather, this.state.additionalWeather)}
                            
                            <th>
                                { weather.summary }
                            </th>
                            <th>
                                { additionalWeather.main.temp_max }
                            </th>
                            <th>
                                { additionalWeather.main.temp_min }
                            </th>
                            <th>
                                { additionalWeather.weather[0].main }
                            </th>
                            <th>
                                { weather.temperature }
                            </th>
                            <th>
                                { weather.apparentTemperature }
                            </th>

                            <th>
                                { additionalWeather.weather[0].description }
                            </th>

                            <th>
                                { weather.windSpeed }

                                {/*UNIT 조정 필요*/}

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