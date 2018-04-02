
import React, { Component } from 'react';

import { connect } from 'react-redux';

import ThreeDayAvgTemps from '../components/three_day_avg_temps';
import ThreeDayMaxTemps from '../components/three_day_max_temps';
import ThreeDayMinTemps from '../components/three_day_min_temps';
import ThreeDayRealTimeWeather from '../components/three_day_real_time_weather';


// console.log('fivedAY CORRECT', this.props.selectedCityWeather)
const today = new Date();
const todayCal =  today.getFullYear() + today.getMonth() + 1 + today.getDate();
// console.log('time', today.getHours())

class ThreeDayWeather extends Component {

    threeDayData() {
    
        // "filter" returns weather api data because "list" is an array including weather data
        // **** We can take an advantage of properties to build a condition to sort out. 
        const fiveDayWeatherData = this.props.selectedCityWeather;
        
        const threeDayWeatherData = fiveDayWeatherData.list.filter( (day) => {
    
            const fiveDayDates = new Date(day.dt_txt);
            const fiveDayCal = fiveDayDates.getFullYear() + fiveDayDates.getMonth() + 1 + fiveDayDates.getDate();
    
            const dayDiff = fiveDayCal - todayCal; 
            // 저녘 시간때 7, 6으로 변동 필요

            if (dayDiff > 0 && dayDiff < 4)
            return dayDiff;
        
        });
    
        // console.log('threeDayWeatherData: ', threeDayWeatherData);
    
        return threeDayWeatherData;
    
    }

    renderThreeDayWeather () {

       const city = this.props.selectedCityWeather.city.name;

       let firstDataLength;
        
        if (today.getHours() >= 22)
        {
            firstDataLength = 6;

        } else if (today.getHours() >= 19) {

            firstDataLength = 7;

        } else {

            firstDataLength = 8;

        }

        return (
          <tbody>

              {console.log('this.threeDayData: ', this.threeDayData()) }
              
                < ThreeDayAvgTemps 

                    firstDay = { this.threeDayData().slice(0, firstDataLength) }
                    secondDay = { this.threeDayData().slice(firstDataLength, firstDataLength+8) }
                    thirdDay = { this.threeDayData().slice(firstDataLength + 8) }
                    city = { city }
                    threeDayData = { this.threeDayData() }
                        
                />

                <ThreeDayMaxTemps 

                    firstDay = { this.threeDayData().slice(0, firstDataLength) }
                    secondDay = { this.threeDayData().slice(firstDataLength, firstDataLength+8) }
                    thirdDay = { this.threeDayData().slice(firstDataLength + 8) }
                
                />

                <ThreeDayMinTemps 

                    firstDay = { this.threeDayData().slice(0, firstDataLength) }
                    secondDay = { this.threeDayData().slice(firstDataLength, firstDataLength+8) }
                    thirdDay = { this.threeDayData().slice(firstDataLength + 8) }

                />

                <ThreeDayRealTimeWeather 

                    firstDay = { this.threeDayData().slice(0, firstDataLength) }
                    secondDay = { this.threeDayData().slice(firstDataLength, firstDataLength+8) }
                    thirdDay = { this.threeDayData().slice(firstDataLength + 8) }
                />
            
          </tbody>  
                
        );

    }

    render() {

        if( !this.props.selectedCityWeather )
        return (<div>Loading...</div>);

        return (

            <div>

                <table border="1">
                    <thead>
                        
                        <tr>
                            <th>
                                Branch Location
                            </th>
                            <th>
                                3-Day Temperature
                            </th>
                            <th>
                                Weather Items
                            </th>
                            <th>
                                Tomorrow
                            </th>
                            <th>
                                Day 2
                            </th>
                            <th>
                                Day 3
                            </th>
                        </tr>

                    </thead>
                   
                        { this.renderThreeDayWeather() }
                           
                </table>

            </div>

        );

    }

}

function mapStateToProps ({ selectedCityWeather }) {
    
    return { selectedCityWeather };
    
}

export default connect (mapStateToProps)(ThreeDayWeather);

