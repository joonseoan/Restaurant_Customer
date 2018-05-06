import React, { Component } from 'react';

import { Field, reduxForm } from 'redux-form';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { createGuestbook } from '../actions/index';

class GuestbookNewCreated extends Component {

    constructor(props) {

        super(props);

        this.state = {

            visibility: 'hidden'

        }

    }

    // field values are delivered in a defining order down below.
    renderInputField(fields) {

        console.log(fields)

        const { meta : { touched, error }} = fields;

        const className = `form-group ${ touched && error ? 'has-danger' : ''}`;

        return (

            <div className = { className }>

                <label>

                    { fields.showTitle }{ fields.input.name === 'telephone' ? '' : '(Required)' }

                    <input type = { 

                                    fields.input.name === 'password' || 
                                    fields.input.name === 'password2' ?
                                    'password' : 'text'
        
                                  }

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

    renderInputEmail(field) {

        console.log(field)

        const { meta : { touched, error }} = field;

        const className = `form-group ${ touched && error ? 'has-danger' : ''}`;

        return (

            <div className = { className }>

                <label>

                    { field.showTitle }(Required)

                    <input type = 'email'
                           className = 'form-control'
                           { ...field.input } // each property only
                           placeholder = 'Example: example@example.com'
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

                    (Required)

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
        
        event.target.checked === true ? this.setState({ visibility: 'visible' })
         : this.setState({ visibility: 'hidden'})

    }

    render() {

        const { handleSubmit } = this.props;
        // console.log('handleSubmit: ', handleSubmit);
        return(

            <div>

                <form onSubmit = { handleSubmit(this.onSubmit.bind(this)) }>

                    <div>

                        <label>

                            Select the one you ordred(Required)
                        
                        </label>

                        <Field

                            name = 'food'
                            component = { this.orderedManuList }
                            options = { this.props.orderedMenu }

                        /> 

                    </div>

                    <div>

                        (Required)

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
                        component = { this.renderInputEmail }
                        showTitle = 'Your Email'
                    />

                    <Field
                    
                        name = 'password'
                        component = { this.renderInputField }
                        showTitle = 'Your Password'
                    
                    />

                    <Field
                    
                        name = 'password2'
                        component = { this.renderInputField }
                        showTitle = 'Confirm Your Password'
                    
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
                            component = { this.renderInputField }
                            placeholder = "Please detail your complaints here."
                        
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

function validate(values) {

    console.log(values, 'values');

    const err = {};

    if(!values.likeDislike) {

        err.likeDislike = 'Please enter your preference.';

    }

    if(!values.food) {

        err.food = 'Please select a food you ordered.'

    }

    if(!values.title) {

        err.title = 'Please enter title here.';

    }

    if(!values.comments) {

        err.comments = 'Please enter title here.';

    }

    if(!values.email) {

        err.email = 'Please enter your email. It must be an email format.'

    } else {

        const emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    
        if(!emailPattern.test(values.email)) {

            err.email = 'You enterned a wrong email. Please, enter again.';
        
        }

    }

    if(!values.password) {

        err.password = 'Please enter your password. It must be more than 8 letters.';
        
    } else {

        if(values.password.length < 8) {

            err.password = 'Your password must be more than 8 letters.';

        }

    }

    if (!values.password2) {

         err.password2 = 'Please enter same password as above to confirm.';

    } else {

        if(values.password !== values.password2) {

            err.password2 = 'Your password must be same as above with 8 letters.';

        }

    }
   
    if(values.telephone) {

        const telephonePattern = /^\(?[0-9]{3}\)?-?[0-9]{3}-?[0-9]{4}$/; 
        
        if(!telephonePattern.test(values.telephone)) {

            err.telephone = 'You entered a wrong telephone number. Please, enter again.'
        }

    }   

    return err;

}

const mapStateToProps = ({ orderedMenu }) => {

        return { orderedMenu };

}

export default reduxForm({

    // naming the form of this component
    form: 'CreateNewGuestbook',
    validate

})(
    
    connect( mapStateToProps, { createGuestbook })(GuestbookNewCreated)

);
