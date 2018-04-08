import React from 'react';

import { connect } from 'react-redux';

import _ from 'lodash';

import { Link } from 'react-router-dom';

const MenuList =(props) => {

    const path = './images/';

    let firstRow = [];
    let secondRow = [];
    let thirdRow = [];
    let forthRow = [];

    _.map(props.menu, menuType => {
        
        firstRow.push(menuType[0]);
        secondRow.push(menuType[1]);
        thirdRow.push(menuType[2]);
        forthRow.push(menuType[3]);

    });


        const menuPrices = (item) => {

            return (

               <td key = { item.id } width = "300" height = "50"> 
                <div>
                    <input type = "checkbox" value = { item.price }/> 
                    <label>
                            
                            {item.name} (${item.price})

                    </label>

                        <p> {item.description} </p>
                    
                    <div>
                        Number of orders:
                    </div>

                    </div>
               </td>
                
            );

        }

        const pictureList = () => {

            const pictures = (item) => {
                
                return (
    
                    <td key = { item.id } className = "all-menu-pictures">
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

    return (

            <div>

                <div><h2> Menu List </h2></div>
                <div>
                    <legend> <h4> Select foods you would like to order </h4></legend>

                    <form> 

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
                            
                                { pictureList() }
                            
                        </table>

                        <input type="submit" value="Order" />

                    </form>

                </div>
                    
            </div>

    );


}

function mapStateToProps ({ menu }) {

    return { menu }

}

export default connect (mapStateToProps)(MenuList);