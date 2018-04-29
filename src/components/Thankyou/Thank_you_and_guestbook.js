import React from 'react';
import { Link } from 'react-router-dom';

const ThankYouAndGuestbook = (props) => {
	
	console.log('thankyou props: ', props)

	return(
		<div> 

			<h2> Thank you for your order!!! </h2>
			<h2> Enjoy and Have a great time! </h2>

			<Link to = '/guestbookNewCreated'>
			
				<div className = 'btn btn-primary'>

					Would you like join our survey once you finish your meal?
					Click this button!

				</div>

			</Link>

			<Link to = '/'>

				<div className = 'btn btn-danger'> 

		            Skip this survey

		        </div>
	        
	        </Link>

		</div> );

}

export default ThankYouAndGuestbook;
