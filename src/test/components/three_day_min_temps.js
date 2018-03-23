import React from 'react';

import _ from 'lodash';

const ThreeDayMinTemps = (props) => {

    const dayData = [props.firstDay, props.secondDay, props.thirdDay];
    const dailyMinTemps = []

    for (let i = 0; i < 3; i++) {

        let temp = dayData[i].map(temperature => temperature.main.temp_min);
        temp = temp.sort((a,b) => a-b);
        dailyMinTemps[i] = _.round (temp[0] - 273);
        
    }

    

    return (

        <tr>
                <td>
                    Min Temp
                </td>
                <td>
                     { dailyMinTemps[0] }
                </td>
               
                <td>
                     { dailyMinTemps[1] }
                </td>
                
                <td>
                     { dailyMinTemps[2] }
                </td>

        </tr>

    );



}

export default ThreeDayMinTemps;