import React, {Component} from 'react';
import Post from "./Post"
import "../styles/PostsList.css"

class PostsList extends Component {

    render() {
        const {posts} = this.props;
        return(
            <div className={"posts"}>
                {posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
        )
    }
}

export default PostsList;