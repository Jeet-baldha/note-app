import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Item(props) {

    return (
    <div className="card">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button className="btn" onClick={() => {props.onkk(props.id)}} > <DeleteIcon/> </button>
    </div>)
}

export default Item;