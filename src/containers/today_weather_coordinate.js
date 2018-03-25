
import React, {  Component } from 'react';

import { connect } from 'react-redux';

import { todayWeatherInfo } from '../actions';

import TodayWeather from './today_weather';

class TodayWeatherCoordinate extends Component  {

    componentDidMount() {

        const { lat, lng } = this.props;

        if(lat && lng)
        this.props.todayWeatherInfo(lat, lng);
        
        setInterval(() => {

            this.props.todayWeatherInfo(lat, lng);
            
        }, 120000);

        

    }
    
    componentWillReceiveProps(nextProps) {

        const { lat, lng } = nextProps;

       // if(lat && lng)

        setInterval(() => {

            this.props.todayWeatherInfo(lat, lng);
            
        }, 120000);
        

    }

     
     /*
    
    getTodayWeaterhInfo() {

        
        
            
       //const locationCoord = this.props.branchLocation;
        // const { lat, lng } = locationCoord.results[0].geometry.location;
        //this.props.todayWeatherInfo(lat, lng);
        
        
        // this.setLocationInfo();

        
        return (
            <tr>
                <td>  
                    under construction
                </td>
                <td>
                    under construction
                </td>
                <td>
                    under construction
                </td>
                <td>
                    under construction
                </td>
                <td>
                    under construction
                </td>
                <td>
                    under construction 
                </td>
                <td>
                    under construction
                </td>
            </tr>

        );
    
    }

    */



    


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

