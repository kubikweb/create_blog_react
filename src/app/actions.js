import types from "./types";

const add = item => ({
    type: types.ADD_POST, item
});


export default {
    add
}