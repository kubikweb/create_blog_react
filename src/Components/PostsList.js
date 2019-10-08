import React from 'react';
import Posts from "./Posts"
import "../styles/PostsList.css"
import {connect} from "react-redux";


const PostsList = (props) => {
        return (
            <div className={"posts"}>
                {props.posts.map(post => <Posts key={post.id} post={post}/>)}
            </div>
        )

};

const mapStateToProps = state => ({
    posts: state.posts
});

export default connect(mapStateToProps)(PostsList);