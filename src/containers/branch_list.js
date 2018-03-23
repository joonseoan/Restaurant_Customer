import React, { Component } from 'react';
import { connect } from 'react-redux';

import Select from 'react-select-me';
import 'react-select-me/lib/ReactSelectMe.css';

import { weatherInfo, location } from '../actions';
import DateTimeDisplay from '../components/date_time_display';
import LocationCoordinate from './location_coordinate';

// import GoogleMap from '../components/google_map';

const options = [ 
    
    { value: 'Toronto', label: 'Toronto (Main)' },
    { value: 'Vancouver', label: 'Vancouver' },
    { value: 'Ottawa', label: 'Ottawa' }

];

let prevCity;

class BranchList extends Component {

    constructor(props) {

        super(props);

        this.state = { 
            
            value: ''
        
        };

        this.onInputChange = this.onInputChange.bind(this); 

        console.log('branchList 1')

    }

    componentDidMount() {

        this.setState({ value : options[0].value})
        //console.log('set.this.state: ', this.state.value )

        this.props.weatherInfo( options[0].value);
      
        this.props.location(options[0].value);

        // console.log('제발', options[0].value)

    }

    onInputChange (value) {

       console.log('value: ', value)

        const branch_city = value.value;

        this.setState({ 
            
            value : branch_city,

            
        });

        this.props.weatherInfo(branch_city);

        this.props.location(branch_city);

    }

   

    render() {

        if(!this.state.value)
        return (<div>Loading...</div>);

        return (

            <div>
            
                <div>
                    
                    <Select

                        options = { options }
                        value = { this.state.value }
                        onChange = { this.onInputChange }
                        
                        // selected => 확인 필요 

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

export default connect (null, { weatherInfo, location } )(BranchList);