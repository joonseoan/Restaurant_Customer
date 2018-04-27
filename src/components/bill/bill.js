import React, { Component } from 'react';
import Modal from 'react-modal';
import _ from 'lodash';
import { Link, Switch, Redirect, Route, BrowserRouter} from 'react-router-dom';
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

    constructor(props) {

        super(props);

        this.state = {

            goToNewPage: false

        }

    }

    orderList(order) {

        //this.props.number = 2;

        console.log('this.props.menuChecked: ', this.props.menuChecked)

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

    onSubmit(e) {

        console.log('event', e.target.vaue);

        // Without this method, not able to redirect.
        e.preventDefault();

        // will send this data to DB later on.
        const menuOrdered = this.props.menuChecked;

        // From children object
        this.props.children._self.state.newPage = true;

        this.props.children._self.handleCloseModal();

    } 

    render() {

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

                    <form onSubmit = { this.onSubmit.bind(this) } >
                        
                        <input type = 'submit' value = 'Submit Orders' className = "btn btn-primary" /> 
                       
                    </form>
                   
                </Modal>

            </div>
        
        );

    }

}

export default Bill;


