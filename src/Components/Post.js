import React, {Component} from 'react';
import "../styles/Post.css"

class Post extends Component {
    render() {
        const {post} = this.props;
        return (
            <div className={"post"}>
                <h2>{post.title}</h2>
                <p>{post.date}</p>
                <p>{post.author}</p>
                <p>{post.text}</p>
                <button>Zobacz więcej</button>
            </div>
        )
    }
}

export default Post;