import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import { fetchGuesbookLists, userGuestbookLogin, fetchLoginUserGuestbooks } from '../actions/index';

class EmailPasswordInput extends Component {

	constructor(props) {

		super(props);

		this.state = {

			message: null,
			loginsucess: null

		}

	}

	componentDidMount() {

		this.props.fetchGuesbookLists();
		this.props.fetchLoginUserGuestbooks();

	}

	componentWillReceiveProps(nextProps) {

		const { auth } = nextProps;

		if (auth && auth !== true) {

			const strAuth = auth.toString();
	        const patt = /400/ig;

	        const verification = strAuth.match(patt);

	        if (verification) this.setState({ message : 'You enterned a wrong password.'});

		}

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

	userGuestbookPosted() {

		const { loginUserGuestbook } = this.props;

		let countNumber = 1;

		if(!loginUserGuestbook || loginUserGuestbook.length === 0) {

			return (

				<div>
				
					<h1>All of your postings are deleted.</h1>
					<h2>Thank you for joining the recommendation survey</h2>

				</div>
			);

		}

		if(loginUserGuestbook) {

			console.log('loginUserGuestbook', loginUserGuestbook);

			return loginUserGuestbook.reverse().map(post => {

				return (

				<div key = { post._id } >

					<div> { countNumber++ }. Customer: { post.email.substring(0, 3) }xxx@Owl Korean Restaurant at { post.visitedAt }</div>

					{/* In order to get props into Link here, define "state" */}
					<Link to = {{ pathname : `/guestbookPosted/${post._id}`, state : this.props.history.location.pathname }} >

						<li className ='list-group-item'>

							{ post.title }

						</li>

					</Link>

				</div>

				);

			});

		}

	}

	onSubmit(values) {

		let emailVerification = false;

		const guestbooks = _.map(this.props.guestbooks, guestbook => guestbook);

		guestbooks.map(guestbook => {

			if (guestbook.email === values.email) {

				emailVerification = true;

			}

		});

		if(emailVerification) {

			this.props.userGuestbookLogin(values, () => {

				this.setState({ 

					message: 'You successfully logged in!!!',
					loginsucess: true

				});
				
			}).then(() => {

				this.props.fetchLoginUserGuestbooks();

			});

		} else {

			this.setState({ message: this.props.errMsg });

		} 

	}

	render() {

		console.log(this.props);
		const { handleSubmit } = this.props;
		const { state } = this.props.history.location;

		console.log('state: ', state)

		if ((this.state.loginsucess && this.state.message !== this.props.errMsg) || state === 'false') {

			return (

				<div>

					<div>

						<center>

							<h1>{'<Your recommendation lists>'}</h1>
						
						</center>

					</div>

					<div>

						<ul>{ this.userGuestbookPosted() }</ul>		
						
					</div>

					<Link to = '/' className = 'btn btn-danger'>Logout</Link>
					<Link to = '/guestbookAllPosted' className = 'btn btn-primary'>Guestbook Lists</Link>

				</div>
			);

		}

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

function mapStateToProps({ guestbooks, auth, loginUserGuestbook }) {

	console.log('loginUserGuestbook ', loginUserGuestbook);

	return { 

		guestbooks,
		auth,
		loginUserGuestbook,
		errMsg : 'You enterd a wrong email or your post is not availalbe..'

	};

}

export default reduxForm({

    // naming the form of this component
    form: 'emailPasswordGuestbook',
	validate

})(
    
    connect(mapStateToProps, { fetchGuesbookLists, userGuestbookLogin, fetchLoginUserGuestbooks })(EmailPasswordInput)

);