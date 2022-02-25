import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../store";

function ToDo({ text, delToDo, id }) {
    return (
        <li>
            <Link to={`/${id}`}>
                {text}
                <button onClick={delToDo}>DEL</button>
            </Link>
        </li>
    )
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        delToDo: () => dispatch(actionCreators.deleteToDo(ownProps.id))
    }
}
export default connect(null, mapDispatchToProps)(ToDo);