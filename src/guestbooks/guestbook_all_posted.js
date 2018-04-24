import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import { fetchGuesbookLists } from '../actions/index';

class GuestbookAllPosted extends Component {


    componentDidMount() {

        this.props.fetchGuesbookLists();

    }

    renderGuestBooks() {
 
        console.log('_.map(this.props.guestbook: ', _.map(this.props.guestbook));

        return _.map(this.props.guestbooks, (guestbook) => {

            return (
             
                <li key = { guestbook._id } className ='list-group-item'> {guestbook.title} </li>
                
            );
            
        });


    }

    render() {

        console.log('this.props: ', this.props);

        return(

            <div>

                <div>
                    <Link className = "btn btn-primary" to = "/">
                        Back to main page
                    </Link>
                    <Link className = "btn btn-primary" to = "/guestbookNewCreated">
                        Create Your Post 
                    </Link>
                    
                </div>

                <div>
                    <ul>
                        { this.renderGuestBooks() }
                    </ul>
                </div>

            </div>


        );
    }



}

function mapStateToProps({ guestbooks }) {

    return ({ guestbooks });

}

export default connect(mapStateToProps, { fetchGuesbookLists })(GuestbookAllPosted);