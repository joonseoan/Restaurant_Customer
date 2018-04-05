import React, { Component } from 'react';


import BranchList from '../containers/branch_list';
// import TodayWeather from '../containers/today_weather';
import ThreeDayWeather from '../containers/three_day_weather';
// import TodaySpecial from './today_special';
import RecommendationMenu from '../containers/recommendation_menu';

// --------------message --------------
import MessageList from '../message_board_components/message_list';


class App extends Component {



    render () {

        return (
        
        <div> 
               
            <BranchList />
            <RecommendationMenu />
            <MessageList />
            {/*<TodaySpecial/>*/}
            {/*<ThreeDayWeather /> */} 

        </div>
        
        );

    }

}

export default App;