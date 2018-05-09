import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchGuestbook,
		 fetchGuesbookLists,
		 deleteLoginUserGuestbook } from '../actions/index';

class GuestbookPosted extends Component {

	constructor(props) {

		super(props);

		this.state = {

			authenticated : false

		}
	}

	componentDidMount() {

		const { id } = this.props.match.params;
		const prePath = '/emailPasswordInput';
		
		// this.props.fetchGuestbook(id);

		if(this.props.history.location.state === prePath) {

			this.setState({ authenticated : true });

		}


	}

	deleteButton() {

		return (

			<div 
				onClick = { this.deletePost.bind(this) }
				className = 'btn btn-danger'
			>

				Delete this post

			</div>

		);

	}

	deletePost() {

		const { _id } = this.props.guestbook;

		deleteLoginUserGuestbook(_id, () => {

			this.props.history.push('/emailPasswordInput');

		});

	}

	render() {

		console.log('this.props.guestbook', this.props.guestbook);
		const { food, title, comments, visitedAt } = this.props.guestbook;
		
		if(!this.props) return <div>Loading....</div>;
		
		return(

			<div>

				<div>

					<h1>[ I ate { food }! ]</h1>
					<h3>{ title }</h3>
					<p>{ comments }</p>
					<div>{ visitedAt }</div>
						
				</div>

				<Link to = {{ pathname : this.state.authenticated ? '/emailPasswordInput' : '/guestbookAllPosted', state: 'false'}} className = 'btn btn-primary' >

					{ this.state.authenticated ? 'Back to YOUR Guestbook List' : 'Back to Guestbook List' }

				</Link>

				{ this.state.authenticated ? this.deleteButton() : null }

			</div>
				
		);
	}
}

function mapStateToProps({ guestbooks }, ownProps) {

	// Must get to /guestbookPosted/:id from guestbookAllPosted!!
	return { 

		guestbook : guestbooks[ownProps.match.params.id]

	};

}

export default connect(mapStateToProps, { 

	fetchGuestbook,
	fetchGuesbookLists,
	deleteLoginUserGuestbook }

)(GuestbookPosted);