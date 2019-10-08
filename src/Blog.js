import React from 'react';
import './Blog.css';
import PostsList from "./Components/PostsList";
import PostsPage from "./Components/PostsPage";
import AddNewPost from "./Components/AddNewPost";
import {BrowserRouter as Router,  Link, Route} from "react-router-dom"



const Blog = () => {

    return(
        <Router>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/add_new_post">Dodaj nowy post</Link></li>
                        <li><Link to="/posts_list">Wyświetl wszystkie posty</Link></li>
                    </ul>
                </nav>
            </header>
            <div className="blog">
                <div className={"container"}>
                    <Route path="/add_new_post" component={AddNewPost}/>
                    <Route path="/posts_list" component={PostsList}/>
                    <Route path="/post/:id" component={PostsPage}/>
                </div>
            </div>
        </Router>

    )
};

export default Blog;
