import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';



function InputArea(props) {

    const [text, setText] = useState({ title: "", content: "" });
    const [isExpanded,setExpamded] = useState(false);

    function expand(){
        setExpamded(true);
    }

    function change(event) {
        var value = event.target.value;

        if (event.target.name === "title") {

            setText((prev) => {
                return {
                    title: value,
                    content: prev.content
                }
            });
        }
        else {
            setText((prev) => {
                return {
                    title: prev.title,
                    content: value
                }
            });

        }
    }


    return (
        <div className="inputArea">

            {isExpanded ? <input type="text" name="title" id="" onChange={change} value={text.title} placeholder="Title" />  :null}
            
            <textarea rows={isExpanded ? 3 : 1} name="content" id="" onChange={change} onClick={expand} value={text.content} placeholder="Take a note..." />
            <Zoom in={isExpanded}>
                <Fab size="small" className="btn" onClick={() => {
                    props.addItem(text);
                    setText({ title: "", content: "" });
                }}><AddIcon /></Fab>
            </Zoom>
        </div>
    )

}


export default InputArea;