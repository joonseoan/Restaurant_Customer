import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class MessagePost extends Component {

    render() {
        
        
        

        return (

            <div>

                <div>
                    <p>Making Message Board. Exciting - post a message here.</p>
                    <p>It will be constructed with a web server and MongoDB.</p>
                </div>
                <div>
                    <Link className = " btn btn-primary" to = "/">
                        Back to main page.
                    </Link>
                </div>
            
            </div>

        );

        


    }
}

export default MessagePost;