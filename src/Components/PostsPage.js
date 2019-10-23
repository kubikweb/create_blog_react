import React from 'react';
import SinglePost from "./SinglePost";
import {useSelector} from "react-redux";


const PostsPage =({match})=> {

    const post = useSelector(state => state.posts.filter(item => item.id === match.params.id));
    console.log(post);
    return (
        <>
            <SinglePost post={post}/>
        </>
    )
};

export default PostsPage;