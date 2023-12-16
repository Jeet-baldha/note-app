import React from "react";





function List(props) {

    const stleDec = {textDecoration: 'line-through'};
    var isDone = true;
    return (
        <div className="list">
            <p style={isDone ? stleDec : null}>{props.text}</p>
        </div>
    );
}





export default  List;