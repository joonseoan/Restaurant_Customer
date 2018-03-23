
/*
import React, { Component } from 'react';

let count = 1;
let i = 1;

const today = new Date();

export default class ThreeDayRealTimeWeather extends Component {


    constructor (props) {

        super(props);

        // 컨스트럭터에서 데이터를 밑에 함수로 보낼 수 있나?
    
     // const threeData = this.props.threeDayData;
     //  console.log('threeData', threeData)

     // const firstDayPrecip = this.props.firstDay.map( weathers => weathers.weather[0].description);
     // console.log('firstDayPrecip: ', firstDayPrecip);

     // const secondDayPrecip = this.props.secondDay.map( weathers => weathers.weather[0].description);
     // console.log('secondDayPrecip: ', secondDayPrecip);

      // const thirdDayPrecip = this.props.thirdDay.map( weathers => weathers.weather[0].description);
      // console.log('thirdDayPrecip: ', thirdDayPrecip);

        this.state = {

            tomorrow : '',
            day2 : '',
            day3 : ''

        }  
        //console.log('firstdayprecipitation' , firstDayPrecip)

        this.eachWeather = this.eachWeather.bind(this);
    }

    componentDidMount() {

        const dayData = [ this.props.firstDay, this.props.secondDay, this.props.thirdDay ]
        const  dailyWeather = [];

        console.log();

        for (let i = 0;  i < 3;  i++ )
        {
            dailyWeather[i] = dayData[i].map( weathers => weathers.weather[0].description);
            console.log('temp: ', dailyWeather);

        }

        this.setState({ tomorrow : dailyWeather[0][0],
                            day2 : dailyWeather[1][0],
                            day3 : dailyWeather[2][0]
        
                        });

        
       //setInterval(() => {

           // this.eachWeather(dailyWeather[0], dailyWeather[1], dailyWeather[2])

       // }, 3000);
        
    }

   // eachWeather() {
    eachWeather(tomorrow, day2, day3) {

        console.log('this', tomorrow, day2, day3)
        
        if (today.getHours() >= 22 && count === 6) {

            count = 0;

        } else if (today.getHours() >= 19 && count === 7) {
            
            count = 0;

        } else if (count === 8) {

            count = 0;

        }

        if (i === 8)
        i = 0;
        //const secondDayWeather = this.props.secondDay.map(weathers => weathers.weather[0].description);
        console.log('tomorrow:', tomorrow)

        this.setState({

            tomorrow: tomorrow[count], 
            day2: day2[i],
            day3: day3[i]

         }); 
         

        // count++;
        // i++;

        // console.log('this.state.day1', this.state.day1) 

    }


    render() {      

        return(
      
            <tr>
                <td>
                    Weather Items
                </td>
                <td>
                    { this.state.tomorrow } 
                </td>
                
                <td>
                    {console.log('this.state.day1: ', this.state.day2)}
                    { this.state.day2 }
                </td>
                
                <td>
                    { this.state.day3 }
                </td>
            </tr>


        );



    }

}
*/

        /*
        //---- Weather
        
        

        */


        /*
        const arr = [2,4,5,6,7]
        for (let i of arr) {
            console.log(i); // logs "3", "5", "7"
         }

        */

        /*
        
        let i = -1;
        let eachTimeWeather = null;

        function weatherInformation()  {
           
            
            i++;
            
            // console.log(firstDayPrecip[i]);

            if (i === 8)
            {
                i = 0;
            }

            console.log(i);
            console.log(firstDayPrecip[i]);;
           
            eachTimeWeather = firstDayPrecip[i];   
            console.log('eachTimeWeather: ', eachTimeWeather);

            return firstDayPrecip[i];


                        
        }

        function update () {

            return (

            <div>

                { weatherInformation() }

            </div>
            );
            

        }

        setInterval(update , 5000);

        //console.log('setIntervalInfo: ', ddd);

        // const dd = setInterval(weatherInformation(), 2000);

*/