import React from 'react';
import './Blog.css';
import PostsList from "./Components/PostsList";
import PostsPage from "./Components/PostsPage";
import AddNewPost from "./Components/AddNewPost";
import Home from "./Components/Home";
import {BrowserRouter as Router,  Link, Route, Switch} from "react-router-dom";



const Blog = () => {

    return(
        <Router>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/add_new_post">Dodaj nowy post</Link></li>
                        <li><Link to="/posts_list">Wyświetl wszystkie posty</Link></li>
                    </ul>
                </nav>
            </header>
            <div className="blog">
                <div className={"container"}>
                    <Switch>
                        <Route exact path ="/" component={Home}/>
                        <Route path="/add_new_post" component={AddNewPost}/>
                        <Route exact path="/posts_list" component={PostsList}/>
                        <Route path="/post/:id" component={PostsPage}/>
                    </Switch>
                </div>
            </div>
        </Router>

    )
};

export default Blog;
