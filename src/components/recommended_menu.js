import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';

function soup (temp, value, soup) {

    if (temp > 20) {

       value = value + 0;

    } else if (temp > 15 && temp <= 20) {

        value = value + 1;

    } else if (temp > 10 && temp <= 15) {

        value = value + 2;

    } else if (temp > 5 && temp <= 10) {

        value = value + 3;

    } else {

        value = value + 4;

    }

    // console.log('soupValue', value)


    if (value <= 9 && value > 6) {

        return soup[1];
    
    } else if (value <= 6 && value > 3) {

        return soup[2];
    
    } else {

        return soup[0];

    }

}

function main(temp, value, main) {

    if (temp > 25) {

        value = value + 0;
 
     } else if (temp > 10 && temp <= 25) {
 
         value = value + 1;
 
     } else if (temp > 0 && temp <= 10) {
 
         value = value + 2;
 
     } else if (temp > -5 && temp <= 0) {
 
         value = value + 3;
 
     } else {
 
         value = value + 4;
 
     }
     
     // console.log('mainValue', value)
 
     if (value <= 9 && value > 6) {
 
         return main[1];
     
     } else if (value <= 6 && value > 3) {
 
         return main[2];
     
     } else {
 
         return main[0];
 
     }

}

function side(temp, value, side) {

    if (temp > 22) {

        value = value + 0;
 
     } else if (temp > 15 && temp <= 22) {
 
         value = value + 1;
 
     } else if (temp > 8 && temp <= 15) {
 
         value = value + 2;
 
     } else if (temp > -1 && temp <= 8) {
 
         value = value + 3;
 
     } else {
 
         value = value + 4;
 
     }

    //  console.log('sideValue', value)
 
     if (value <= 9 && value > 6) {
 
         return side[1];
     
     } else if (value <= 6 && value > 3) {
 
         return side[2];
     
     } else {
 
         return side[0];
 
     }

}

function drink(drink) {
 
    return drink[0]; 

}

export default class RecommendedMenu extends Component {

    constructor (props) {

        super(props);

        this.state = {

            selectedSoup : null,
            selectedMain : null,
            selectedSide : null,
            selectedDrink : null

        }
    }
     
    setCurrentMenu (inputData) {

        if (inputData === undefined || !inputData) 
            inputData = this.props;

            const { menu, temp, value } = inputData;
    
            const selectedSoup = soup(temp, value, menu.soup);
            const selectedMain = main(temp, value, menu.main);
            const selectedSide = side(temp, value, menu.side);
            const selectedDrink = drink(menu.drink);

            this.setState({

                selectedSoup,
                selectedMain,
                selectedSide,
                selectedDrink 

            });

    }

    componentDidMount() {

        this.setCurrentMenu();
        
    }

    componentWillReceiveProps(nextProps) {

        console.log('nextProps inside: ', nextProps)

        this.setCurrentMenu(nextProps);

    }

    // should dry out down below!!!!
    makeNameList(names) {
  
        return <td key = { names.id }>{ names.name }</td>;
        
    }

    makeFileList(files) {

        const src = `../images/${ files.file }`;

        return <td key= { files.id }>
            
            <Link to = {`/description/${ files.name }`}>

                <img src = { src } alt = { files.file }/>

            </Link>
                
        </td>;

    }

    makePriceList(prices) {

        return <td key= { prices.id }>${ prices.price }</td>;

    }

    render () {

        if(!this.state.selectedSoup || !this.state.selectedMain 
            || !this.state.selectedSide || !this.state.selectedDrink)
        return (<tbody><tr><td>'Loading...'</td></tr></tbody>);

        const selectedMenu = _.map(this.state);
      
        return (

            <tbody>

                <tr>
                    { selectedMenu.map(this.makeNameList) }
                </tr>

                <tr>
                    { selectedMenu.map(this.makeFileList) }    
                </tr>

                <tr>
                    { selectedMenu.map(this.makePriceList) }    
                </tr>
            
            </tbody>
 
        );

    }
    
}