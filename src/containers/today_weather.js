/*

import React, {  Component } from 'react';

import { connect } from 'react-redux';

import { todayWeatherInfo } from '../actions';

 let i = 0;

 class TodayWeather extends Component  {

    constructor (props) {

        super(props);

        //this.setLocationInfo = this.setLocationInfo.bind(this);
       // this.getTodayWeaterhInfo = this.getTodayWeaterhInfo.bind(this);

    }
    

    getTodayWeaterhInfo() {

        
        
            
        const locationCoord = this.props.branchLocation;
        const { lat, lng } = locationCoord.results[0].geometry.location;
        this.props.todayWeatherInfo(lat, lng);
        
        
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


    render () {

        console.log ('todaywethercount:', i++)

        if(this.props.branchLocation < 3 )
        return (<div>Data Loading</div>);

       // return (<div>{this.getTodayWeaterhInfo()}</div>)

        return (
            <div>
                <table border= "1">
                    <thead>
                        <tr>
                            <th>
                                City
                            </th>  
                            <th>
                                Avg Temperature (C)
                            </th>
                            <th>
                                Max. Temperature (C)
                            </th>
                            <th>
                                Min. Temperature (C)
                            </th>
                            <th>
                                Weather
                            </th>
                            <th>
                                Description
                            </th>
                            <th>
                                Cloulds (%)
                            </th>
                        </tr>
                    </thead>
                    
                    <tbody>
                    
                      { this.getTodayWeaterhInfo() }  

                    </tbody>
                </table>
                
             </div>
                
        );
      
    }

}

    
function mapStateToProps ({ branchLocation, todayWeather }) {
    
   console.log('todayWetherInfo:  ',   todayWeather  );

    return { 
        
        branchLocation,
        todayWeather

     };


}

export default connect(mapStateToProps, { todayWeatherInfo })(TodayWeather);

*/