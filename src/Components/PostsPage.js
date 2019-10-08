import React from 'react';
import SinglePost from "./SinglePost";
import {Link} from "react-router-dom";

const PostsPage =({match})=> {
    console.log(match);
    return (
        <>
            <Link to="/posts_list">Powrót do wszystkich artykułów</Link>
            <SinglePost id={match.params.id}/>
        </>
    )
};

export default PostsPage;