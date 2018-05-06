import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import { fetchGuesbookLists, fetchUserGuestbook } from '../actions/index';

class EmailPasswordInput extends Component {

	constructor(props) {

		super(props);

		this.state = {

			message: null,
			loginsucess: null,
			loginfail: null

		}

	}

	componentDidMount() {

		this.props.fetchGuesbookLists();

	}

	renderInputField(fields) {

		console.log(fields)

        const { meta : { touched, error }} = fields;

        const className = `form-group ${ touched && error ? 'has-danger' : ''}`;

        return (

            <div className = { className }>

            	{/* because it is not data ping to the server
            		input type can be "text           	  */}
            
                    <input type = { fields.input.name === 'email' ? 'email' : 'password' }

                           className = 'form-control'
                    
                           { ...fields.input } // each property only

                    />

                <div className = 'text-help'>

                    { touched ? error : '' }

                </div>

            </div>

        );

	}

	onSubmit(values) {

		let emailVerification = false;

		const guestbooks = _.map(this.props.guestbooks, guestbook => guestbook);

		guestbooks.map(guestbook => {

			if (guestbook.email === values.email) {

				emailVerification = true;

				this.setState({ message: null});
				
			} else {

				this.setState({ message: 'You entered a wrong email.' });

			}

		});

		if(emailVerification) {

			this.props.fetchUserGuestbook(values, () => {

					this.setState({ 

						loginsucess: true,
						loginfail: false

					});

			});

		}

	}

	render() {

		// console.log(this.props);
		const { handleSubmit } = this.props;		

		return (

			<div className = 'center'>

				<div>

					<h1> Find your posts </h1>

					<h5> Enter Your email and password </h5>
				
				</div>

				<form onSubmit = { handleSubmit(this.onSubmit.bind(this)) }>

					<div>

						<label>

							Your email:

							<Field

								name = 'email'
								component  = { this.renderInputField }
							/>

						</label>

					</div>

					<div>

						<label>

							Your password:

							<Field

								name = 'password'
								component  = { this.renderInputField }
	
							/>

						</label>

					</div>

					<div> { this.state.message } </div>



					<Field
                        name = 'submit'
                        component = 'button'
                        type = 'submit'
                        className = 'btn btn-primary'
                    >Submit
                    </Field>
                    

                    <Link to = '/' className = 'btn btn-danger'>Cancel</Link>


				</form>




			</div>

		);
	}


}


function validate(values) {

	let err = {};

    if(!values.email) {

        err.email = 'Please enter your email. It must be an email format.'

    } else {

        const emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    
        if(!emailPattern.test(values.email)) {

            err.email = 'You enterned a wrong email. Please, enter again.';
        
        }

    }

    if(!values.password) {

        err.password = 'Please enter your password. It must be more than 8 letters.'

    } else {

        if(values.password.length < 8) {

            err.password = 'Your password must be more than 8 letters.'
     
        }

    }

    return err;

}

/*const mapStateToProps = ({ orderedMenu }) => {

        return { orderedMenu };

}*/

function mapStateToProps({ guestbooks }) {

	return { guestbooks };

}

export default reduxForm({

    // naming the form of this component
    form: 'emailPasswordGuestbook',
	validate

})(
    
    connect(mapStateToProps, { fetchGuesbookLists, fetchUserGuestbook })(EmailPasswordInput)

);