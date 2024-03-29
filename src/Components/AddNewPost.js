import React from "react";
import {useDispatch, useSelector} from "react-redux";
import actions from "../app/actions";


const AddNewPost = () => {

    const dispatch = useDispatch();
    const id = useSelector(state => state.id);

    const title  = React.createRef();
    const date  = React.createRef();
    const author  = React.createRef();
    const text  = React.createRef();

    const submitNewPost = (e) => {
        e.preventDefault();
        dispatch(actions.addId());
        dispatch(actions.add({
            id: id,
            title: title.current.value,
            date: date.current.value,
            author: author.current.value,
            text: text.current.value,
        }));
    };
    return (
        <form onSubmit={submitNewPost}>
            <div>
                <label>Tytuł posta
                    <input type="text" ref={title} placeholder={"Wpisz tytuł posta"}/>
                </label>
            </div>
            <div>
                <label>Data posta
                    <input type="date" ref={date} placeholder={"Wpisz datę posta"}/>
                </label>
            </div>
            <div>
                <label>Autor posta
                    <input type="text" ref={author} placeholder={"Wpisz autora posta"}/>
                </label>
            </div>
            <div>
                <label>Treść posta
                    <input type="text" ref={text} placeholder={"Wpisz tekst"}/>
                </label>
            </div>
            <button type="submit">Zapisz</button>
        </form>
    )
};


export default AddNewPost;