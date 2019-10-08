import React from 'react';
import SinglePost from "./SinglePost";


const PostsPage =({match})=> {
    console.log(match);
    return (
        <>
            <SinglePost id={match.params.id}/>
        </>
    )
};

export default PostsPage;