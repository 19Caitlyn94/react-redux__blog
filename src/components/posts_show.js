import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import { fetchPost } from '../actions';

class PostsShow extends Component {
    componentDidMount() {
        if (!this.props.post) {
        const {id} = this.props.match.params; // getting the id from the url (given to us by react router) 
        this.props.fetchPost(id)
        }
    }

    onDeleteClick() {
        const { id } = this.props.math.params;
        this.props.deletePost(id);
    }

    render() {
        const { post } = this.props;

        if (!post) {
            return <div>Fetching...</div>
        }

        return (
            <div>
                <Link to='/'>Back to Index</Link>
                <button className='btn btn-danger pull-xs-right' onClick={this.onDeleteClick.bind(this)}>Delete post</button>
                <h3>{post.title}</h3>
                <h6>Categories</h6>
                <p>{post.content}</p>
            </div>
        )
    }
}

function mapStateToProps({ posts }, ownProps){
    return { post:  posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);