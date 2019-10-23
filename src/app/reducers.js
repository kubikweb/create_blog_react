import types from "./types";

const INITIAL_STATE = {
    id: 1,
    posts: []
};

const postsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ADD_POST:
            return {
                ...state, posts: [...state.posts, action.item]
            };
        case types.ADD_ID:
            return {
                ...state, id: state.id +1
            };

        default:
            return state
    }
};

export default postsReducer;