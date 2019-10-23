import React from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom"
import "../styles/Post.css"
import PostsPage from "./PostsPage";

const Posts =(props) => {
    const {post} = props;

        return (
            <Router>
                <div className={"post"}>
                    <h2>{post.title}</h2>
                    <p>{post.date}</p>
                    <p>{post.author}</p>
                    <p>{post.text}</p>
                    <button>
                        <Link to={`/post/${post.id}-${post.title}-${post.date}`}>
                            Zobacz więcej
                        </Link>
                    </button>
                </div>
            </Router>

        )

}

export default Posts;