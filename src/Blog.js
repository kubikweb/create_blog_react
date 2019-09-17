import React, {Component} from 'react';
import './Blog.css';
import PostsList from "./Components/PostsList";


class Blog extends Component{


      state = {
        posts: [{
            id: 0,
            title: "Paryż",
            date: "2019-10-24",
            author: "Kamila Kubik",
            text: "pojechać do Paryża",
            important: true,
        },
          {
            id: 1,
            title: "Como",
            date: "2019-09-24",
            author: "Kamila Kubik",
            text: "pojechać do Como",
            important: true,
            },
            {
                id: 2,
                title: "Como",
                date: "2019-09-24",
                author: "Kamila Kubik",
                text: "pojechać do Como",
                important: true,
            },
            {
                id: 3,
                title: "Como",
                date: "2019-09-24",
                author: "Kamila Kubik",
                text: "pojechać do Como",
                important: true,
            },
            {
                id: 4,
                title: "Como",
                date: "2019-09-24",
                author: "Kamila Kubik",
                text: "pojechać do Como",
                important: true,
            },

        ]

      };

  render() {
    const {posts} = this.state;
    return(
        <div className="blog">
            <button>Dodaj post</button>
            <div className={"container"}>
                <PostsList posts={posts}/>
            </div>
        </div>
    )
  }
}

export default Blog;
