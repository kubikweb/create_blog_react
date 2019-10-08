import types from "./types";

const INITIAL_STATE = {
    posts: [
        {
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

const postsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ADD_POST:
            return {
                ...state, posts: [...state.posts, action.item]
            };

        default:
            return state
    }
};

export default postsReducer;