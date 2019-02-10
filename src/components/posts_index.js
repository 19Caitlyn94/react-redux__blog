import React, { Component } from 'react'; 
import _ from 'lodash'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
        console.log('this.props', this.props)
    }

    renderPosts() {
        return (
            _.map(this.props.posts, post => {
                return (<li className="list-group-item" key={post.id}><h4>{post.title}</h4>
            <p>{post.content}</p></li>)
            } ) 
        )
    }
    render() {

        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">Add a Post</Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                {this.renderPosts()}</ul>
            </div>
        )
    }
} 

function mapStateToProps(state) {
    return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
// connect(null, { fetchPosts }) is the same as using mapDispatchToProps fn
