import React, { Component } from 'react';

import { Field, reduxForm } from 'redux-form';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { createGuestbook } from '../actions/index';

class GuestbookNewCreated extends Component {

    constructor(props) {

        super(props);

        this.state = {

            visibility: "hidden"

        }

    }

    // field values are delivered in a defining order down below.
    renderInputField(fields) {

        // console.log('fields: ', fields);
        // console.log('...fields.input; ', fields.input);

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

                    { touched ? error : '' }

                </div>

            </div>

        );

    }

    renderCommentField(field) {

        const { meta : { touched, error } } = field;

        const className = `form-group ${ touched && error ? 'has-danger' : ''}`;

        return (

            <div className = { className }>

                <label>

                    <textarea
                        className = 'form-control'
                        { ...field.input } // each property only
                        cols = '50'
                        rows = '10'
                        placeholder = 'Please write your comments for foods or services here.'
                    />

                </label>

                <div className = 'text-help'>
                { touched ? error : '' }

                </div>

            </div>

        );

    }

    orderedManuList(fields) {

        let { meta : { touched, error}, options, input } = fields;

        const className = `form-group ${ touched && error ? 'has-danger' : ''}`;

        return(

            <div className = { className }>

            { options.map(option => {

                input.value = option.name;

                return( 

                    <label key = { option.name } >

                        { option.name }

                        <input type = 'radio'
                    
                         className = 'form-control'
                         { ...fields.input }
                        />

                    </label>

                );

            })  }

            <div className = 'text-help'>

                        { touched ? error : '' }

                </div>

            </div>

        );

    }    
    
    renderLikeDislike(fields) {

        console.log(fields);

        let { meta: { touched, error }, options, input } = fields;

        console.log('option', options)

        const className = `form-group ${ touched && error ? 'has-danger' : ''}`;

        input.value = options;

        return (
                
            <div className = { className }>

                <input type = 'radio'

                    className = 'form-control'
                    { ...fields.input } // each property only
                    
                />
                
                <div className = 'text-help'>

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

        if(values.likeDislike) {


            if(values.likeDislike === 'like')
            {

                values.like = true;

            } else {

                values.dislike = true;
            
            }

            delete values.likeDislike;

        }

        console.log('values: ', values);

        this.props.createGuestbook(values, () => {

            const { history : { push }} = this.props;

            push('/guestbookAllPosted');

        });

    }

    inputClick(event){
        
        event.target.checked === true ? this.setState({ visibility: "visible" })
         : this.setState({ visibility: "hidden"})

    }

    render() {

        const { handleSubmit } = this.props;

        return(

            <div>

                <form onSubmit = { handleSubmit(this.onSubmit.bind(this)) }>

                    <div>

                        <label>

                            Select the one you ordred.
                        
                        </label>

                        <Field

                            name = 'food'
                            component = { this.orderedManuList }
                            options = { this.props.orderedMenu }

                        /> 

                    </div>

                    <div>
                        <label>

                            I like my order.

                            <Field

                                name = 'likeDislike'
                                component = { this.renderLikeDislike }
                                options = 'like'
                                
                            />

                        </label>

                        <label>

                            I am not satisfied with my order.

                            <Field

                                name = 'likeDislike'
                                component = { this.renderLikeDislike }
                                options = 'dislike'

                            />

                        </label>

                    </div>

                    <Field

                        name = 'title' // inside of input
                        component = { this.renderInputField }
                        showTitle = 'Title' // separate value from input
                    
                    />

                    <Field
                        name = 'comments'
                        component = { this.renderCommentField }
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

                    <label>

                        I don't like this restaurant's way of service.
                        (Optional)

                         <Field
                            name = 'servDislike'
                            component = 'input'
                            type = 'checkbox'
                            value = 'true'
                            onClick = { this.inputClick.bind(this) }
                    
                        />
                    
                    </label>

                    <div> 

                        <label style = { { visibility: this.state.visibility} }>"Please detail your complaints here."
                        
                         <Field
                            name = 'servComments'
                            component = 'input'
                            type = 'text'
                            placeholder = "Please detail your complaints here."
                            width = '100'
                        />

                        </label>

                        <Field
                            name = 'telephone'
                            component = { this.renderInputField }
                            showTitle = 'Your Telephone Number (Optional)'
                        />
                    </div>

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

const mapStateToProps = ({ orderedMenu }) => {

        return { orderedMenu };

}

export default reduxForm({

    // naming the form of this component
    form: 'CreateNewGuestbook'
    // validate

})(
    
    connect( mapStateToProps, { createGuestbook })(GuestbookNewCreated)

);
