import React, { Component } from 'react';

export default class DateTimeDisplay extends Component {

    constructor (props) {

        super(props);

        this.state = {

            date : new Date(),

        }

        this.initialTime = this.initialTime.bind(this);

    }

    initialTime() {

        let realTime = new Date();
    
        if (this.props.branch_city === 'Vancouver') {

            let vancouverTime = realTime.getTime() - 10800000;
            
            this.setState({
                
                date : new Date(vancouverTime)
    
            });
    
        } else {
    
            
            this.setState({
    
                date: realTime
    
            });
    
        }

    }

    componentDidMount () {

        setInterval( this.initialTime, 1000 );

    }


    render() {

        let dateTime = this.state.date;
        let hours = dateTime.getHours() > 12 ? dateTime.getHours()-12 : dateTime.getHours();
        let minutes = dateTime.getMinutes() < 10 ? `0${ dateTime.getMinutes()}` : dateTime.getMinutes();
        let seconds = dateTime.getSeconds() < 10 ? `0${ dateTime.getSeconds()}` : dateTime.getSeconds();

        return (

            <div>
                    Date: { dateTime.toDateString() }
                    , Time: { hours < 10 ? `0${hours}` : hours } 
                    : { minutes }
                    : { seconds }
            </div>

        );

    }

}