import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class MessagePost extends Component {

    render() {
        
        
        

        return (

            <div>

                <div>
                    Making Message Board. Exciting - post a message here.
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