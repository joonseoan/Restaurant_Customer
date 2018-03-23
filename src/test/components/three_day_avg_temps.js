import React from 'react';

import _ from 'lodash';

import ThreeDayTemps from './three_day_temps';


const ThreeDayAvgTemps = ({ firstDay, secondDay, thirdDay, city, threeDayData })=> {

    const dayData = [firstDay, secondDay, thirdDay];
    let dailyAvgTemps = [];

    for  ( let i = 0; i < 3 ; i++) {

      // console.log ('days[i]= ',  dayData[i], i)

        const temp = dayData[i].map( data => data.main.temp);
        //console.log('teno: ', temp)

        dailyAvgTemps[i] = _.round(_.sum(temp)/temp.length - 273) 

    }

    //console.log('dailyTemps', dailyTemps[0], dailyTemps[1], dailyTemps[2] );
    return (
        
        
        <tr>
            <td rowSpan = "4">
                {/*console.log('CITY: ', city) */}
                { city }
            </td>
            <td rowSpan = "4">
                {/* console.log('threeDayTemps in......: ', threeDayData)*/}
                < ThreeDayTemps threeDayData = { threeDayData } />      
            </td>
            <td>
                Avg Temp
            </td>
            <td>
                { dailyAvgTemps[0] }
            </td> 
            <td>
                { dailyAvgTemps[1] }
            </td>
            <td>
                { dailyAvgTemps[2] }
            </td>  
        </tr>
            
        
        
    );

}

export default ThreeDayAvgTemps;


//console.log('ThreeDayAvgTemps: ', ThreeDayAvgTemps);
        
// const firstDayTemps = props.day.map( temperature => temperature.main.temp);
// const avgFirstDayTemp =  _.round(_.sum(firstDayTemps)/firstDayTemps.length - 273);


/*

const secondDayTemps = secondDay.map(temperature => temperature.main.temp);
const avgSecondDayTemp =  _.round(_.sum(secondDayTemps)/secondDayTemps.length - 273);


const thirdDayTemps = thirdDay.map(temperature => temperature.main.temp);
const avgThirdDayTemp =  _.round(_.sum(thirdDayTemps)/thirdDayTemps.length - 273);

*/

