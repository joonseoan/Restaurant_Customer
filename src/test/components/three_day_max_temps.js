import React from 'react';

import _ from 'lodash';


const ThreeDayMaxTemps = (props) => {

    const dayData = [props.firstDay, props.secondDay, props.thirdDay];
    const dailyMaxTemps = []

    for (let i = 0; i < 3; i++) {

        let temp = dayData[i].map(temperature => temperature.main.temp_max);
        temp = temp.sort((a,b) => b-a);
        dailyMaxTemps[i] = _.round (temp[0] - 273);
        
    }

    return (

        <tr>
                <td>
                    Max Temp
                </td>
                <td>
                     { dailyMaxTemps[0] }
                </td>
               
                <td>
                     { dailyMaxTemps[1] }
                </td>
                
                <td>
                     { dailyMaxTemps[2] }
                </td>
        </tr>  
    );

}

export default ThreeDayMaxTemps;