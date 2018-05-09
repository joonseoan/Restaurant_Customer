import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import BranchList from '../containers/branch_list';
// import TodayWeather from '../containers/today_weather';
// import ThreeDayWeather from '../containers/three_day_weather';
// import TodaySpecial from './today_special';
import RecommendationMenu from '../containers/recommendation_menu';
import MenuList from '../containers/menu_list';

class App extends Component {

    render () {

        return (
        
        <div> 
            <div>  
                <BranchList />
            </div>
            <div>
                <RecommendationMenu />
            </div>
            <div>
                <MenuList />
            </div>
            <Link to = '/guestbookAllPosted' className = 'btn btn-primary' >

                    Feel free to find guest's recommendation!

            </Link>

             {/* Should decide guestbook for guestbooklist*/}
             
             {/*
            <div>
                <GuestbookButton />
            </div>
            */}
            
            {/*<TodaySpecial/>*/}
            {/*<ThreeDayWeather /> */} 

        </div>
        
        );

    }

}

export default App;