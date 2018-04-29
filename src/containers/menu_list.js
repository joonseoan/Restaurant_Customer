import React, { Component } from 'react';

import { connect } from 'react-redux';

import _ from 'lodash';

import { Link, Redirect } from 'react-router-dom';

import Bill from '../components/bill/bill';


function removeSpace(name) {

    return name.replace(/\s/g, "");

}

class MenuList extends Component {

    constructor(props) {

        super(props);

        this.state = {

            name_price: [],
            showModal : false,
            newPage : false
            
        };

    }

    menuOnChange(event) {

        const { name, value, checked } = event.target;

        const label = document.querySelector(`label.${removeSpace(name)}`);

        let number = parseInt(label.innerHTML); 

        let current_name_price = this.state.name_price;

        if (!checked) { 

            current_name_price.map((menu) => {

            if (menu.name === name) {

                const index = current_name_price.indexOf(menu);

                current_name_price.splice(index, 1);

            }

            });

        } else {

            current_name_price = [ ...current_name_price, { name, value, checked, number } ];

        }

        this.setState({  
            
            name_price: current_name_price

        });

        const color = !checked ? '' : '#FAFAD2';

        //no way to use react??
        document.querySelectorAll(`td.${removeSpace(name)}`)[0]
                .style.backgroundColor = color;

        document.querySelectorAll(`td.${removeSpace(name)}`)[1]
                    .style.backgroundColor = color;

        document.querySelector(`div.${removeSpace(name)}`).style.display = `${!checked ? 'none' : 'block'}`;
        
    }
    
    numberOnChange (event) {

        const CurrentMenuName = event.target.id;

        let buttonValues = event.target.innerHTML;

        const label = document.querySelector(`label.${CurrentMenuName}`);

        let labelValues = parseInt(label.innerHTML); 

        const spans = document.querySelectorAll(`span#${CurrentMenuName}`); 
        
        const buttons = [1, 2, 3, 4, 5];

        if (buttonValues !== '+') {

            buttonValues = parseInt(buttonValues);

            const disPlayButtons = buttons.filter( buttonNumber => buttonNumber !== buttonValues);
                
            disPlayButtons.map( button => {

                spans[button - 1].style.visibility = 'visible';

            });

            spans[buttonValues - 1].style.visibility = 'hidden';
    
        } else {

            labelValues++;
            
            buttonValues = labelValues;
            
            if(buttonValues > 5) {

                buttons.map( button => {

                    spans[button - 1].style.visibility = 'visible';
    
                });

            }

            // when more than 10, warning message!!! (Later on)

        }
        
        const displayNumber = document.createTextNode(buttonValues);
        if (label.firstChild) label.removeChild(label.firstChild);
        
        label.appendChild(displayNumber);

        this.state.name_price.map( (find) => {

            const alias = removeSpace(find.name);

            if (alias === CurrentMenuName) {
                
                find.number = buttonValues;

                // console.log('find a number of orders: ', find);
            }

        });
        
    }

    allMenuContents () {

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

            const buttonDisplay = () =>{
                
                const buttons = [1, 2, 3, 4, 5 ]; // please, test it again.

                const eachButton = buttons.map( (button) => {
    
                    return <span key = { button } onClick = { this.numberOnChange.bind(this) } id = { removeSpace(item.name) } className = "btn btn-primary" >
                    
                        { button }
                    
                    </span>;
                
                });

                return (
                    
                    <div>
                    
                        { eachButton }

                        <span onClick = { this.numberOnChange.bind(this) } id = { removeSpace(item.name) } className = "btn btn-primary" >+</span>
                    
                    </div>
                    
                );
                
            }
            
            return (
             
                <td key = { item.name } width = "300" height = "50" className = { removeSpace(item.name) } >

                    <div >
    
                        <div>
                        
                            <label >
                                        
                                <h5>{ item.name } (${ item.price }) </h5> 
                                <input type = "checkbox" className = "input-checkbox" name = { item.name } 
                                    value = { item.price } onChange = { this.menuOnChange.bind(this) } />
                                
                                <p> { item.description } </p>
    
                            </label>

                            <div><h3>{this.state.order}</h3></div>
    
                        </div>
                                
                        <div className = { removeSpace(item.name) } id = "number-input">

                            <div>
                                Number of Orders: <label className = { removeSpace(item.name) }>1</label>
                            </div>
                            { buttonDisplay() }
                                
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

    handleOpenModal() {

       this.setState ({ 

            showModal : true,
            newPage : false

        }); 
       
    }

    handleCloseModal() {

        this.setState ({ showModal : false });
    }

    render () {

        if(!this.props) return <div/>;    

        if(this.state.newPage) 
            return <Redirect to = 'thankyouAndGuestbook' menuChecked = { this.state.name_price }/>;     
        
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

                    </form> 
                    
            </div>

            <div onClick = { this.handleOpenModal.bind(this) } className = "btn btn-primary" >Click to make an order</div>

                <Bill  openStatus = { this.state.showModal } menuChecked = { this.state.name_price }>

                    <div onClick = { this.handleCloseModal.bind(this) } > Start over choosing your menu again.</div>

                </Bill>      

            </div>        

        );

    }

} 

function mapStateToProps ({ menu }) {

    return { menu };

}

export default connect (mapStateToProps)(MenuList);