import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteToDo } from "../store";

function ToDo({ text, delToDo, id }) {
    return (
        <li>
            <Link to={`/${id}`}>
                {text}
            </Link>
            <button onClick={delToDo}>DEL</button>
        </li>
    )
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        delToDo: () => dispatch(deleteToDo(ownProps.id))
    }
}
export default connect(null, mapDispatchToProps)(ToDo);