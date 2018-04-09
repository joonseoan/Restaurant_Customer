import React, { Component } from 'react';

import { connect } from 'react-redux';

import _ from 'lodash';

import { Link } from 'react-router-dom';



let name_price = [];

class MenuList extends Component {

    constructor(props) {

        super(props);

        this.state = {

            name_price: [],
            value : 0

        }

    }

    submitValue (event) {

        console.log(event)
        event.preventDefault();
        // event.defaultPrevented();

    }

    menuOnChange(event) {

        const name = event.target.name;
        const value = event.target.value;

        const nameValue = { [name] : value };

        name_price = [...name_price, nameValue];

        this.setState({

            name_price
            // bgcolor : '#00FF00'

        });

        
    }


    
    numberOnChange (event) {

        console.log('event.target',event.target)
    }


    decreaseValue () {

        const value = this.state.value - 1;

        this.setState ({

            value

        });
    }

    increaseValue () {

        const value = this.state.value + 1;

        this.setState ({

            value

        });
    }
    

    allMenuContents () {

        console.log('props: ', this.props)

        const path = './images/';

        let firstRow = [];
        let secondRow = [];
        let thirdRow = [];
        let forthRow = [];

        _.map(this.props.menu, menuType => {
            
            firstRow.push(menuType[0]);
            secondRow.push(menuType[1]);
            thirdRow.push(menuType[2]);
            forthRow.push(menuType[3]);

        });

        
        const menuPrices = (item) => {

            console.log('this.state.pricie', this.state.name_price);
            console.log('item.name', item.name)

            let bgcolor;

            if (this.state.name_price.length > 0)
            {
                console.log('this.state.nameprice[0]:',this.state.name_price[0])
                var keyNames = Object.keys(this.state.name_price[this.state.name_price.length - 1]);
                
                bgcolor = keyNames[0] === item.name ?  '#00FF00' : '';

            }
           

           //  if (item.name === this.state.name_price)

            return (
    
                <td key = { item.name } width = "300" height = "50" bgcolor = { bgcolor }> 
                
                    <div >
    
                        <div>
                        
                            <label>
                                        
                                <h5>{ item.name } (${ item.price }) </h5> 
                                <input type = "checkbox" name = { item.name } 
                                    value = { item.price } onChange = { this.menuOnChange.bind(this) } />
                             
                                
                                <p> {item.description} </p>
    
                            </label>
    
                        </div>
                                
                        <div>
    
                           <label>
                               Number of orders : 
                               <div className = "btn btn-primary" onClick = { this.decreaseValue.bind(this) }>-</div>
                               {this.state.value }
                               { /*<input type = "number" name = { item.name } 
                                    value = { this.state.value } onChange = { this.numberOnChange.bind(this) }/> */}
                               <div className = "btn btn-primary" onClick = { this.increaseValue.bind(this) }>+</div>
                           </label>
                                
                        </div>
    
                    </div>
                
                </td>
                    
            );
    
        }

        const pictures = (item) => {
               
            return (
    
                <td key = { item.name } className = "all-menu-pictures" bgcolor = { this.bgcolorSelect }>
                    <Link to = { `/description/${item.name}`} key = { item.id }>
                                
                       <img src = { path + item.file } alt = { item.name } width = "200" />
            
                    </Link>
                </td>
                
            );
    
        }

    
        return (
    
            <tbody className = "all-menu">

                <tr>
                    { firstRow.map(menuPrices) }
                </tr>

                <tr>
                    { firstRow.map(pictures) }
                </tr>

                <tr>
                    { secondRow.map(menuPrices) }
                </tr>

                <tr>
                    { secondRow.map(pictures) }
                </tr>

                <tr>
                    { thirdRow.map(menuPrices) }
                </tr>

                <tr>
                    { thirdRow.map(pictures) }
                </tr>

                <tr>
                    { forthRow.map(menuPrices) }
                </tr>

                <tr>
                    { forthRow.map(pictures) }
                </tr>

            </tbody>
  
        );
    
    }

    render () {

        console.log('this.state.value', this.state.value)

        return (

            <div>

                <div><h2> Menu List </h2></div>
                <div>
                    <legend> <h4> Select foods you would like to order </h4></legend>

                    <form onSubmit = { this.submitValue }> 

                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        <h5>Soup</h5>
                                    </th>
                                    <th>
                                        <h5>Main</h5>
                                    </th>
                                    <th>
                                        <h5>Side</h5>
                                    </th>
                                    <th>
                                        <h5>Drink</h5>
                                    </th>
                                </tr>
                            </thead>
                            
                                { this.allMenuContents() }
                            
                        </table>

                        <input type="submit" value="Order" />

                    </form>

                </div>
                    
            </div>

    );

    }


} 

 /*

    



    */
    

function mapStateToProps ({ menu }) {

    return { menu }

}

export default connect (mapStateToProps)(MenuList);