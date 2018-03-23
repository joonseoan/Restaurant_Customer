
/*global google*/

import React, { Component } from 'react';

export default class GoogleMap extends Component {

    // This is a life cycle component that automatically renders 
    // some behaviors or objects in the screen
    componentDidMount () {

        // 그림 안나오는 것 asynch 이슈 인지 확인 할 것.
        
        // This is embedded method from Google document
        // this.refs.map : It finds HTML tag 
        //          where Map should be renders!!!
        
        new google.maps.Map(this.refs.map, {

            zoom: 12, /* zoom level that will be displayed */

            /** "this" is required as this is an object of GoogleMap class */
            center: {  /** Where googlemap centers on.. */
                lat: this.props.lat,
                lng: this.props.lon /* longtitude*/
           
            }

        });

    }

    render() {

    // this.refs.map => it directly goes to this HTML tag 
    // 
        return ( <div ref = "map" /> );

    }

}