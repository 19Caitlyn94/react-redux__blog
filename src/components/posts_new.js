import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


class PostsNew extends Component {
    renderField(field) {
        const { touched, error } = field.meta;
        className= `form-group ${(touched && error) && has-danger}`
        return (
            <div className="form-group has-danger">
                <label>{field.label}</label>
                <input
                    className="form-control"{...field.input}
                    type={field.type}
                />
                {console.log('error ', error)}
                <div className="text-help">{touched ? error : ''}</div>
            </div>
        )
    }

    onSubmit(values) {
        console.log('values')
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form  onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field 
                    label="Title"
                    type="text"
                    name="title"
                    component={this.renderField} />
                <Field 
                    label="Categories"
                    type="text"
                    name="categories"
                    component={this.renderField} />
                <Field 
                label="Content"
                    name="content"
                    component={this.renderField} />
                <button tyoe="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

function validate(values) {
    const errors = {};
    if (!values.title) {
        errors.title = "Please enter a title"
    }
    if (!values.category) {
        errors.category = "Please enter a category"
    }
    if (!values.content) {
        errors.content = "Please enter some content"
    }
    return errors
}

export default reduxForm({ 
    validate, 
    form: 'PostsNewForm' 
})(PostsNew);
