
import React, {  Component } from 'react';

import { connect } from 'react-redux';

import { todayWeatherInfo } from '../actions';

import TodayWeather from './today_weather';

let startInterval;

class TodayWeatherCoordinate extends Component  {

    setTodayWeather(weatherInfo) {

        const { lat, lng } = weatherInfo;

        this.props.todayWeatherInfo(lat, lng);

        startInterval = setInterval(() => {

            this.props.todayWeatherInfo(lat, lng);
            console.log('I hate western Asian')
            
        }, 600000); 

    }

    componentDidMount() {

        if(this.props)
        this.setTodayWeather(this.props);

    }
    
    componentWillReceiveProps(nextProps) {

        clearInterval(startInterval);

        this.setTodayWeather(nextProps);

    }

    render () {

        if(!this.props)
        return <div>...Loading</div>
       
        return (
            <div>

                <TodayWeather />
                
             </div>
                
        );
      
    }

}
 
export default connect(null, { todayWeatherInfo })(TodayWeatherCoordinate);