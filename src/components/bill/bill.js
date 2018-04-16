import React from 'react';
import Modal from 'react-modal';
import _ from 'lodash';

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

const Bill = (props) => {

    let total_numberOfOrders = 0;
    let total_amount = 0;
  
    const orderList = (order) => {

        console.log('order: ', order)

        const { name, value, number } = order;

        const unitPrice = parseFloat(value);

        const subTotal = unitPrice * number;

       
        total_numberOfOrders += number;
        
        total_amount += subTotal;

        let orderNumber = props.menuChecked.indexOf(order) + 1;

        return ( 
            
            <ul key = { name }><h3><b> {orderNumber}. { name } </b></h3>

                <li> Unit Price : ${ unitPrice } </li>
                <li> Number of Orders : { number } </li>
                <li> Sub Total : ${ rounding(subTotal) }</li>
                
            </ul>
                
        );

    }

    return ( 
  
        <div style = {{ customStyles }}>
            
            <Modal isOpen = { props.openStatus }>

                <h2 ref = { subtitle => subtitle = subtitle }>Order Confirmation</h2>

                <div> 
                
                    { props.menuChecked.map(orderList) }
                
                </div>

                <div>

                    <h4>Total number of Orders : { total_numberOfOrders }</h4>
                    <h4>Total price: ${ rounding(total_amount) }</h4>
                    <h4>HST: 15%</h4>
                    <h4>Total Payable: ${ rounding(total_amount * 1.15) }</h4>

                </div>

                <div className = "btn btn-primary"> 

                    { props.children }

                </div>

                <div className = "btn btn-primary">Cancel Orders</div>

                <form>

                    <input type = 'submit' value = 'Submit Orders' className = "btn btn-primary" />
                    
                </form>
               
            </Modal>

        </div>
        
    );
    

      

        
    
        
}

export default Bill;


