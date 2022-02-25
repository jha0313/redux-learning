import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import ToDo from "../components/ToDo";

function Home({ toDos, addToDo }) {
    const [ text, setText ] = useState("");
    const onChange = (e) => {
        setText(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        setText("");
        addToDo(text);
    };

    return (
        <div>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" onChange={onChange} value={text} placeholder="Type To Do..."></input>
                <button>Add</button>
            </form>
        <ul>{toDos.map((toDo) => <ToDo key={toDo.id} {...toDo} />)}</ul>
        </div>
    )
};

const mapStateToProps = (state) => {
    return { toDos: state };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToDo: (text) => dispatch(actionCreators.addToDo(text))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);