import React, { Component } from 'react';

import { connect } from 'react-redux';

import _ from 'lodash';

import { Link } from 'react-router-dom';


let name_price = [];

function removeSpace(name) {

    return name.replace(/\s/g, "");

}

/*
function insertNumberOrders() {

    let input = document.createElement("INPUT");
    input.type = "number";
    // var textnode = document.createTextNode("Water");
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
}
*/
/**
 * 
 *  Number of Orders : 
                                { <div className = "btn btn-primary" onClick = { this.decreaseValue.bind(this) }>-</div> }
                                <input type = "number" name = { item.name } 
                                    value = { this.state.value } onChange = { this.numberOnChange.bind(this) }/>
                                {<div className = "btn btn-primary" onClick = { this.increaseValue.bind(this) }>+</div>}
 */


// MAKE A "Touch to order....state"

class MenuList extends Component {

    constructor(props) {

        super(props);

        this.state = {

            name_price: []
           // display : blcok
            
        };

    }

    submitValue (event) {

        console.log(event)
        event.preventDefault();

    }

    menuOnChange(event) {

        const name = event.target.name;
        const value = event.target.value;
        const checked = event.target.checked;

        const nameValueStatus = { 
            
            name,
            value,
            checked
        
        };

        if (nameValueStatus.checked === false) name_price.map( (menu) =>{

            if (menu.name === nameValueStatus.name) {

                const index = name_price.indexOf(menu);
                name_price.splice(index, 1);

                document.querySelectorAll(`td.${removeSpace(nameValueStatus.name)}`)[0]
                    .style.backgroundColor = '';

                document.querySelectorAll(`td.${removeSpace(nameValueStatus.name)}`)[1]
                    .style.backgroundColor = '';

                // document.querySelector(`label.${removeSpace(nameValueStatus.name)}`).innerHTML = '';

                document.querySelector(`label.${removeSpace(nameValueStatus.name)}`).style.visibility = 'hidden';

            }

        });

        if (nameValueStatus.checked === true) {

            name_price = [...name_price, nameValueStatus];

            //no way to use react??
            document.querySelectorAll(`td.${removeSpace(nameValueStatus.name)}`)[0]
                .style.backgroundColor = '#FFFF66';

            document.querySelectorAll(`td.${removeSpace(nameValueStatus.name)}`)[1]
                .style.backgroundColor = 'yellow';

            //document.querySelector(`label.${removeSpace(nameValueStatus.name)}`).innerHTML = 'Number of Orders: ';
            
            const order = document.querySelector(`label.${removeSpace(nameValueStatus.name)}`);
                order.style.visibility = 'visible'
                //order.innerHTML = 'ddd';
            
            
        } 
        
        this.setState({  
            
            name_price
        
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

        // console.log('props: ', this.props);

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

        //if(!item.name) return <td>Loading.....</td>;

        

            return (
             
                <td key = { item.name } width = "300" height = "50" className = { removeSpace(item.name) } >

                    <div >
    
                        <div>
                        
                            <label >
                                        
                                <h5>{ item.name } (${ item.price }) </h5> 
                                <input type = "checkbox" className = "input-checkbox" name = { item.name } 
                                    value = { item.price } onChange = { this.menuOnChange.bind(this) } />
                                
                                <p> {item.description} </p>
    
                            </label>

                            <div><h3>{this.state.order}</h3></div>
    
                        </div>
                                
                        <div>
    
                           <label className = { removeSpace(item.name) } id = "number-input" >
                                Number of Orders: 
                            <input type = "number" defaultValue = "1" name = { item.name } 
                                    min = "1" onChange = { this.numberOnChange.bind(this) } />

                                    
                           </label>
                                
                        </div>
    
                    </div>
                
                </td>
                    
            );
    
        }

        const pictures = (item) => {
               
            return (
    
                <td key = { item.name } className = { removeSpace(item.name) } id = "all-pictures" >
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

        console.log(this.state.name_price)

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