import React, { Component } from 'react';

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


    if (value <= 9 && value > 6) {

        return soup[1].id_1;
    
    } else if (value <= 6 && value > 3) {

        return soup[2].id_2;
    
    } else {

        return soup[0].id_0;

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
 
 
     if (value <= 9 && value > 6) {
 
         return main[1].id_1;
     
     } else if (value <= 6 && value > 3) {
 
         return main[2].id_2;
     
     } else {
 
         return main[0].id_0;
 
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
 
     if (value <= 9 && value > 6) {
 
         return side[1].id_1;
     
     } else if (value <= 6 && value > 3) {
 
         return side[2].id_2;
     
     } else {
 
         return side[0].id_0;
 
     }

}

function drink(drink) {
 
    return drink[0].id_0; 

}

export default class RecommendedMenu extends Component {

    constructor (props) {

        super(props);

        this.state = {

            names : [],
            files : [],
            prices : []

        }
    }

    componentDidMount() {

        const { menu, temp, value } = this.props;
        const selectedSoup = soup(temp, value, menu.soup);
        const selectedMain = main(temp, value, menu.main);
        const selectedSide = side(temp, value, menu.side);
        const selectedDrink = drink(menu.drink);

        this.setState({ 
            
            names : [ 
                
                selectedSoup.name,
                selectedMain.name,
                selectedSide.name,
                selectedDrink.name

            ],

            files : [

                selectedSoup.file,
                selectedMain.file,
                selectedSide.file,
                selectedDrink.file

            ],

            prices : [

                selectedSoup.price,
                selectedMain.price,
                selectedSide.price,
                selectedDrink.price

            ]
        
        });
    }

    makeList(things) {

        // str.endsWith('question.')

        // things.endsWith('.PNG');
        // console.log(dd)
        /*
        let verification =  things.endsWith('.PNG');

        if (verification === true) {

            const src = `../images/${things}`;

            return (
            
            <th key = {things}>  </th>
            
            );
        
        } else {
            */
            return (

                <th key = { things }> { things } </th>
    
            );

        //}
            
        
        
    }

    render () {

        return (
        
            <tbody>

                <tr>

                    { this.state.names.map(this.makeList) }
                
                </tr>
                <tr>

                    { this.state.files.map(this.makeList) }
            
                </tr>
                <tr>

                    { this.state.prices.map(this.makeList) }
        
                </tr>
            </tbody>
    
        );

    }
    
}