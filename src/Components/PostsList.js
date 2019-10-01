import React, {Component} from 'react';
import Posts from "./Posts"
import "../styles/PostsList.css"

class PostsList extends Component {
    state = {
        posts: [{
            id: 0,
            title: "Paryż",
            date: "23-09-2019",
            author: "Kamila Kubik",
            text: "pojechać do Paryża",
            important: true,
        },
            {
                id: 1,
                title: "Como",
                date: "24-09-2019",
                author: "Kamila Kubik",
                text: "pojechać do Como",
                important: true,
            },
            {
                id: 2,
                title: "Lecco",
                date: "25-09-2019",
                author: "Kamila Kubik",
                text: "pojechać do Como",
                important: true,
            },
            {
                id: 3,
                title: "Varenna",
                date: "26-09-2019",
                author: "Kamila Kubik",
                text: "pojechać do Como",
                important: true,
            },
            {
                id: 4,
                title: "Lenno",
                date: "27-09-2019",
                author: "Kamila Kubik",
                text: "pojechać do Como",
                important: true,
            },

        ]

    };

    render() {
        const {posts} = this.state;
        return(
            <div className={"posts"}>
                {posts.map(post => <Posts key={post.id} post={post}/>)}
            </div>
        )
    }
}

export default PostsList;