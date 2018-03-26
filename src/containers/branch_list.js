import React, { Component } from 'react';
import { connect } from 'react-redux';

import Select from 'react-select-me';
import 'react-select-me/lib/ReactSelectMe.css';

import { weatherInfo, location, additionalTodayWeatherInfo } from '../actions';
import DateTimeDisplay from '../components/date_time_display';
import LocationCoordinate from './location_coordinate';

// import GoogleMap from '../components/google_map';

const options = [ 
    
    { value: 'Toronto', label: 'Toronto (Main)' },
    { value: 'Vancouver', label: 'Vancouver' },
    { value: 'Ottawa', label: 'Ottawa' }

];

let didMountInterval;
let onInputChangeInterval;

class BranchList extends Component {

    constructor(props) {

        super(props);

        this.state = { 
            
            value: ''
        
        };

        this.onInputChange = this.onInputChange.bind(this); 

    }

    componentDidMount() {

        this.setState({ value : options[0].value })
        //console.log('set.this.state: ', this.state.value )

        this.props.weatherInfo(options[0].value);
      
        this.props.location(options[0].value);

        this.props.additionalTodayWeatherInfo(options[0].value);

        didMountInterval = setInterval(() => {

            this.props.additionalTodayWeatherInfo(options[0].value);

        }, 600000);

       // this.props.additionalTodayWeatherInfo(options[0].value);

        // console.log('제발', options[0].value)

    }

    onInputChange (value) {

        clearInterval(didMountInterval);

        if (onInputChangeInterval) 
            console.log('working')
            clearInterval(onInputChangeInterval);
        
        const branch_city = value.value; 
        console.log('branch_city1:', branch_city)

        this.setState({ 
            
            value : branch_city
 
        });

        this.props.weatherInfo(branch_city);

        this.props.location(branch_city);

        this.props.additionalTodayWeatherInfo(branch_city);

        onInputChangeInterval = setInterval(() => {

            console.log('branch_city2:', branch_city)
            console.log('this.sate.value', this.state.value);

            this.props.additionalTodayWeatherInfo(branch_city);

        }, 600000);

    }

    render() {

        if(!this.state.value)
        return (<div>Loading...</div>);

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