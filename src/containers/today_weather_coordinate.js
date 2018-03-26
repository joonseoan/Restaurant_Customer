
import React, {  Component } from 'react';

import { connect } from 'react-redux';

import { todayWeatherInfo } from '../actions';

import TodayWeather from './today_weather';

let didMountInterval;
let willReceiveInterval;

class TodayWeatherCoordinate extends Component  {

    componentDidMount() {

        const { lat, lng } = this.props;

        if(lat && lng)
        this.props.todayWeatherInfo(lat, lng);
        
        didMountInterval = setInterval(() => {

            this.props.todayWeatherInfo(lat, lng);
            console.log('I hate western Asian')
            
        }, 600000);  

    }
    
    componentWillReceiveProps(nextProps) {

        clearInterval(didMountInterval);

        if(willReceiveInterval)
        clearInterval(willReceiveInterval);

        const { lat, lng } = nextProps;

        console.log('xxxxxxxx',lat,lng)

       // if(lat && lng)
        this.props.todayWeatherInfo(lat, lng);

        willReceiveInterval = setInterval(() => {

            this.props.todayWeatherInfo(lat, lng);
            console.log('I hate Brown People')
            
        }, 600000);
        

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

