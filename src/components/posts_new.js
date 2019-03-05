import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


class PostsNew extends Component {
    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"{...field.input}
                    type={field.type}
                />
                {field.meta.error}
            </div>
        )
    }

    render() {
        return (
            <form>
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
