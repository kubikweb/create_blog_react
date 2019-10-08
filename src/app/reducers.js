import types from "./types";

const INITIAL_STATE = {
    posts: [
        // {
        //      title: "Paryż",
        //     date: "23-09-2019",
        //     author: "Kamila Kubik",
        //     text: "pojechać do Paryża",
        // },

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