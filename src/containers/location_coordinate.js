import React, { Component } from 'react';
import { connect } from 'react-redux';

import GoogleMAP from '../components/google_map';

class LocationCoordinate extends Component {
    

    render() {

        if(!this.props.branchLocation)
        return <div>Loading...</div>;

        const { lat, lng } = this.props.branchLocation.results[0].geometry.location;
            
        return(

            <div>
                <div>

                    <GoogleMAP
                    
                        lat = { lat }
                        lng = { lng }
                    
                    />

                </div>

            </div>
        );


    }


}

function mapsPropsToState({ branchLocation }) {

    return { branchLocation };
}

export default connect(mapsPropsToState)(LocationCoordinate);


/*
import React, { Component } from 'react';



let lat;
let lng;
let previous_city;

const LocationCoordinate = ({ branch_locations, branch_city }) => {

    if (branch_locations.length !== 3 )
    return <div>Loading</div>;

    if (!branch_city) {

        lat = branch_locations[0].results[0].geometry.location.lat;
        lng = branch_locations[0].results[0].geometry.location.lng;

        console.log('default lat lng: ', lat, lng);

        console.log('final lat/lng: ', lat, lng)

        return (
    
            <div>
    
                <GoogleMap
    
                    latitude = { lat }
                    longtidude = { lng }
                 
                 />
            
            </div>
                 
        );

    } 
    
    
    
    
    if (branch_city && branch_city !== previous_city) {

        branch_locations.map((city) => {
            
            const cityName = city.results[0].formatted_address.split(",");
        
            if(cityName[0] === branch_city) {
        
                lat = city.results[0].geometry.location.lat;
                lng = city.results[0].geometry.location.lng;
                    // console.log('cityName[0]', cityName[0])
                previous_city = cityName[0];  

            }

        });



        console.log('changing lat/lng: ', lat, lng)
        console.log('final lat/lng: ', lat, lng)

        return (
    
            <div>
    
                <GoogleMap
    
                    latitude = { lat }
                    longtidude = { lng }
                 
                 />
            
            </div>
                 
        );
    }

    


}

export default LocationCoordinate;

*/


/*
export default class LocationCoordinate extends Component {

    constructor(props) {

        super(props);

        this.state = {

            lat: '',
            lng: '',
            branch_city: ''

        }

       // console.log ('kkk', this.props.branch_locations[0].results[0].geometry.location)

    }

    componentDidMount() {

      if (this.props.branch_locations.length !== 3 )
      return <div>Loading</div>;

        //console.log ('kkk', this.props.branch_locations[0].results[0].geometry.location)

        //const { lat, lng } = this.props.branch_locations[0].results[0].geometry.location;

        
        this.setState({

            lat : this.props.branch_locations[0].results[0].geometry.location.lat,
            lng : this.props.branch_locations[0].results[0].geometry.location.lng

        })

        console.log('ddd',this.state.lat)


    }

    selectLatLng() {

        if (this.props.branch_locations.length !== 3 )
        return <div>Loading</div>;
    
        if (!this.props.branch_city) {
    
            this.lat = this.props.branch_locations[0].results[0].geometry.location.lat;
            this.lng = this.props.branch_locations[0].results[0].geometry.location.lng;
    
            console.log('default lat lng: ', this.lat, this.lng);
    
        } else if (this.props.branch_city && this.props.branch_city !== this.previous_city) {
    
            this.props.branch_locations.map((city) => {
                
                const cityName = city.results[0].formatted_address.split(",");
            
                if(cityName[0] === this.props.branch_city) {
            
                    this.lat = city.results[0].geometry.location.lat;
                    this.lng = city.results[0].geometry.location.lng;
                        // console.log('cityName[0]', cityName[0])
                    this.previous_city = cityName[0];  
    
                }
    
            });
    
            console.log('changing lat/lng: ', this.lat, this.lng)
            
        }
    }

    render() {

        return(

            <div>
    
                <GoogleMap
    
                    latitude = { this.state.lat }
                    longtidude = { this.state.lng }
                 
                 />
            
            </div>

        );

    }


}
*/



