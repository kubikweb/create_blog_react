import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import postsReducer from "./app/reducers";
// import {postActions} from "./app/inedx";

const store = createStore(postsReducer, composeWithDevTools());
// store.dispatch(postActions.add(
//     {
//
//         title: "Karkonosze",
//         date: "10-10-2019",
//         author: "Kamila Kubik",
//         text: "pojechać w Karkonosze",
//
//     }
// ));



export default store;
