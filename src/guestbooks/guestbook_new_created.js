import React, { Component } from 'react';

import { Field, reduxForm } from 'redux-form';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { createGuestbook } from '../actions/index';

class GuestbookNewCreated extends Component {

    // field values are delivered in a defining order down below.
    renderInputField(fields) {

        console.log('fields: ', fields);
        console.log('...fields.input; ', fields.input);
        
        const { meta : { touched, error }} = fields;

        const className = `form-group ${ touched && error ? 'has-danger' : ''}`;

        return (
            
            <div className = { className }>

                <label>

                    { fields.showTitle }

                    <input type = 'text'
                        className = 'form-control'
                        { ...fields.input } // each property only
                    />
                
                </label>

                <div className = 'text-help'>
                    {/* should verify this*/}
                    { touched ? error : '' }

                </div>

            </div>
        
        );

    }

    renderCommentField(field) {

        console.log('renderCommentField field: ', field);

        const { meta : { touched, error } } = field;

        const className = `form-group ${ touched && error ? 'has-danger' : ''}`;

        return (
            
            <div className = { className }>

                <label>

                    { field.showTitle }

                    <textarea
                        className = 'form-control'
                        { ...field.input } // each property only
                    />
                
                </label>

                <div className = 'text-help'>
                    {/* should verify this*/}
                    { touched ? error : '' }

                </div>

            </div>
        
        );

    }

    // "values" of submitting.
    // It works at once.
    // Key is "name" defined in <Field>
    // each form element's "value" only
    onSubmit(values) {

        console.log('values: ', values);

        this.props.createGuestbook(values, () => {

            const { history : { push }} = this.props;

            push('/guestbookAllPosted');

        });

    }
    
    render() {

        console.log('this.props in Guest', this.props);

        const { handleSubmit } = this.props;

        return(

            <div>

                <form onSubmit = { handleSubmit(this.onSubmit.bind(this)) }>

                    <Field 
                        name = 'title' // inside of input
                        component = { this.renderInputField }
                        showTitle = 'Title' // separate value from input
                    />

                    <Field
                        name = 'comments'
                        component = { this.renderCommentField }
                        showTitle = 'Your Comments'
                    />

                    <Field
                        name = 'email' 
                        component = { this.renderInputField }
                        showTitle = 'Your Email'
                    />

                    <Field
                        name = 'password'
                        component = { this.renderInputField }
                        showTitle = 'Your Password'
                    />

                    <button type ='submit' className = 'btn btn-primary'>Submit</button>

                    <Link to = '/guestbookAllPosted' className = 'btn btn-danger'>Cancel</Link>

                </form>

            
            </div>
            
        );

    }
}

export default reduxForm({

    // naming the form of this component
    form: 'CreateNewGuestbook'
    // validate

})(

    connect(null, { createGuestbook })(GuestbookNewCreated)

);