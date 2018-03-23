import React from 'react';

import { Sparklines, SparklinesLine } from 'react-sparklines';



const ThreeDayTemps = (props) => {

    // Don not forget it again.
    // Must declair props to receive data.
    // If declaire props, must use props.threeDayData.
    
    //console.log('this.props.threeDayData', props.threeDayData);

  //  console.log('threeDayData in threeDayTemps: ', props.threeDayData)
    const threeDayTemps = props.threeDayData.map( temperature => temperature.main.temp );

    return (

        <div>

            <Sparklines height= { 120 } width = { 180 }
                data = { threeDayTemps } >

             <SparklinesLine color = "red" />
            
            </Sparklines>

        </div>
    
    );


}

export default ThreeDayTemps;

