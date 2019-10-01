import React, {Component} from 'react';
import './Blog.css';
import PostsList from "./Components/PostsList";
import PostsPage from "./Components/PostsPage";
import {BrowserRouter as Router, Route} from "react-router-dom"



class Blog extends Component{


  render() {
    return(
        <Router>
            <div className="blog">
                <button>Dodaj post</button>
                <div className={"container"}>
                    <Route path="/posts_list" component={PostsList}/>
                    <Route path="/article/:id" component={PostsPage}/>
                </div>
            </div>
        </Router>

    )
  }
}

export default Blog;
