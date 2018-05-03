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
 
        let dislikeEvaluation = [];

        let countNumber = 1;

        const guestbooks = _.map(this.props.guestbooks, guestbook => guestbook);

        return ( guestbooks.reverse().map((guestbook) => {
            
            if(guestbook && guestbook.like && countNumber < 11) {

                return (

                <div key = { guestbook._id }>

                    <div> { countNumber++ }. Customer: { guestbook.email.substring(0, 3) }xxx@Owl Korean Restaurant at { guestbook.visitedAt }</div>

                    <Link to = {`/guestbookPosted/${guestbook._id}`} >    
                     
                        <li className ='list-group-item'> {guestbook.title} </li>

                    </Link>
    
                </div>
                
                );       
            
            } else {

                dislikeEvaluation.push(guestbook);
                
                return;
            }
                    
        }));

    }

    render() {

        console.log('this.props: ', this.props);

        return(

            <div>

                <div>

                    <ul>
                        { this.renderGuestBooks() }
                    </ul>
                
                </div>

                <div>
                    
                    <Link className = "btn btn-danger" to = "/">
                        Back to main page
                    </Link>

                </div>

            </div>


        );
    }
    
}

function mapStateToProps({ guestbooks }) {

    console.log('guestbooks: ', guestbooks);

    return ({ guestbooks });

}

export default connect(mapStateToProps, { fetchGuesbookLists })(GuestbookAllPosted);