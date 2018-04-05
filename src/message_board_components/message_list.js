import React, { Component } from 'react';

import { Link } from 'react-router-dom';


class MessageList extends Component {

    render() {

        return (

            <div>
                <Link className = "btn btn-primary" to = "messagePost">
                    Guestbook
                </Link>
            </div>

        );

        


    }
}

export default MessageList;