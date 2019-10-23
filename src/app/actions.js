import types from "./types";

const add = item => ({
    type: types.ADD_POST, item
});

const addId = () => ({
    type: types.ADD_ID,
});

export default {
    add,
    addId
}