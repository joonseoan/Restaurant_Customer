import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchGuestbook, fetchGuesbookLists } from '../actions/index';

class GuestbookPosted extends Component {

	componentDidMount() {

		const { id } = this.props.match.params;
		this.props.fetchGuestbook(id);


	}

	render() {

		if(!this.props) return <div>Loading....</div>;

		console.log('this.props in post', this.props);
		console.log('guestbook', this.props.guestbook);

		const { food, title, comments, visitedAt } = this.props.guestbook;

		return(

			<div>

				<div>

					<h1>[ I ate { food }! ]</h1>
					<h3>{ title }</h3>
					<p>{ comments }</p>
					<div>{ visitedAt }</div>
						
				</div>

				<Link to = '/guestbookAllPosted' className = 'btn btn-primary' >

					Back to the guestbook List

				</Link>

			</div>
				
		);
	}
}

function mapStateToProps({ guestbooks }, ownProps) {

	// Must get to /guestbookPosted/:id from guestbookAllPosted!!
	return { guestbook : guestbooks[ownProps.match.params.id] };

}

export default connect(mapStateToProps, { fetchGuestbook, fetchGuesbookLists })(GuestbookPosted);