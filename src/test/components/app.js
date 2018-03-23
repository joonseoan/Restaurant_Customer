import React, { Component } from 'react';


import BranchList from '../containers/branch_list';
import TodayWeather from '../containers/today_weather';
import ThreeDayWeather from '../containers/three_day_weather';
import TodaySpecial from './today_special';

class App extends Component {


    render () {

        return (<div> 
            
            <BranchList />
            <TodayWeather />
            <TodaySpecial />
            {/*<ThreeDayWeather /> */}

         </div>);

    }

}

export default App;