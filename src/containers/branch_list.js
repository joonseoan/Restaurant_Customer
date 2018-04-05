
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Select from 'react-select-me';
import 'react-select-me/lib/ReactSelectMe.css';

import { weatherInfo, location, additionalTodayWeatherInfo } from '../actions';
import DateTimeDisplay from '../components/date_time_display';
import LocationCoordinate from './location_coordinate';


const options = [ 
    
    { value: 'Toronto', label: 'Toronto (Main)' },
    { value: 'Vancouver', label: 'Vancouver' },
    { value: 'Ottawa', label: 'Ottawa' }

];


let startInterval;

class BranchList extends Component {

    constructor(props) {

        super(props);

        this.state = { 
            
            value: ''
        
        };

        this.onInputChange = this.onInputChange.bind(this); 

        
    }
    
    setTodayWeatherInfo(branch_city) {

        this.setState({ 

            value : window.localStorage.getItem('ddd')
            
            //value : branch_city
 
        });

        this.props.weatherInfo(branch_city);
      
        this.props.location(branch_city);
        
        this.props.additionalTodayWeatherInfo(branch_city);

        startInterval = setInterval(() => {

            console.log('branch_city',branch_city);

            this.props.additionalTodayWeatherInfo(branch_city);

        }, 600000);

    }

    componentDidMount() {

        this.setTodayWeatherInfo(options[0].value);

    }

    // onInputChange (value) {

    onInputChange (value) {
        
        clearInterval(startInterval);
        console.log('value: ', value) ;
        const branch_city = value.value; 

        this.setTodayWeatherInfo(branch_city);

        window.localStorage.setItem('ddd', branch_city);
        
        
    }

    render() {
        


        if(!this.state.value)
        return (<div>Loading...</div>);

      //  window.localStorage.setItem('ddd', this.props);
      //  const dd = window.localStorage.getItem('ddd');
        

        return (

            <div>
                <div>
                    
                    <Select

                        //style = { {width:200} }
                        options = { options }
                        value = { this.state.value }
                        onChange = { this.onInputChange }
                        
                    />

                </div>

                <div>

                    <LocationCoordinate />
              
                </div>

                <div>
                
                    < DateTimeDisplay branch_city = { this.state.value } />

                </div>

            </div>
        
        );

    }

}

export default connect (null, { weatherInfo, location, additionalTodayWeatherInfo } )(BranchList);