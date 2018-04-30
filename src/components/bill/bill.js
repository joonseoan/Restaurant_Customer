import React, { Component } from 'react';
import Modal from 'react-modal';
import _ from 'lodash';
import { connect } from 'react-redux';
import { storeOrders } from '../../actions/index'

import GuestbookNewCreated from '../../guestbooks/guestbook_new_created';

const customStyles = {

    constent : {

        top : '50%',
        left : '50%',
        right : 'auto',
        bottom : 'auto',
        marginRight : '-50%',
        transform : 'translate(-50%, -50%)'
    
    }
          
};

Modal.setAppElement('#root');

function rounding (number) {

    return _.round(number, 2);

}

class Bill extends Component {

    orderList(order) {

        console.log('order: ', order)

        const { name, value, number } = order;

        const unitPrice = parseFloat(value);

        const subTotal = unitPrice * number;

        let orderNumber = this.props.menuChecked.indexOf(order) + 1;

        return ( 
            
            <ul key = { name }><h3><b> {orderNumber}. { name } </b></h3>

                <li> Unit Price : ${ unitPrice } </li>
                <li> Number of Orders : { number } </li>
                <li> Sub Total : ${ rounding(subTotal) }</li>
                
            </ul>
                
        );

    }

    numberOfOrders(){

        let totalOrders = 0;

        this.props.menuChecked.map(order => {

            totalOrders += parseInt(order.number);

        });

        return totalOrders;

    }

    totalAmount(){

        let totalAmount = 0;
        let subTotalAmount = 0;

        this.props.menuChecked.map(order => {

            subTotalAmount = order.value * parseInt(order.number);
            totalAmount += subTotalAmount;

        });

        return totalAmount;

    }

    eventClick() {

        // will send this data to DB later on.
        const menuOrdered = this.props.menuChecked;

        this.props.storeOrders(menuOrdered);

        // From children object
        this.props.children._self.state.newPage = true;

        this.props.children._self.handleCloseModal();

    } 

    render() {

        console.log(this.props)

        if(!this.props) return <div>Loading...</div>

            const { history } = this.props;

        if(this.props.menuChecked.length === 0) {

            return (

                <Modal isOpen = { this.props.openStatus }>

                <div>
                    
                    <div>
                    
                        Sorry, customer. You have not chose the menu yet.        
                    
                    </div>

                    <div className = 'btn btn-danger'> 

                            { this.props.children }

                    </div>

                </div>

                </Modal>
            );

        }

        return ( 
  
            <div style = {{ customStyles }}>
                
                <Modal isOpen = { this.props.openStatus }>

                    <h2 ref = { subtitle => subtitle = subtitle }>Order Confirmation</h2>

                    <div> 
                    
                        { this.props.menuChecked.map(this.orderList.bind(this)) }
                    
                    </div>

                    <div>

                        <h4>Total number of Orders : { this.numberOfOrders() }</h4>
                        <h4>Total price: ${ rounding(this.totalAmount()) }</h4>
                        <h4>HST: 15%</h4>
                        <h4>Total Payable: ${ rounding(this.totalAmount() * 1.15) }</h4>

                    </div>

                        <div className = 'btn btn-danger'> 

                            { this.props.children }

                        </div>

                    {/*<form onSubmit = { this.onSubmit.bind(this) } > */}
                        
                        <input type = 'submit' value = 'Submit Orders' className = "btn btn-primary" onClick = { this.eventClick.bind(this)} /> 
                       
                    {/*</form> */}
                   
                </Modal>

            </div>
        
        );

    }

}

export default connect (null, { storeOrders })(Bill);



