import React, { useState } from "react";
import Item from "./Item";
import InputArea from "./InputArea";


function Todo(){

    const [item,setItem] = useState([]);

    function addItem(text){
        console.log(item);
        
        setItem((prev)=>{
            return [...prev,text]
        })
       
    }

   
    function deleteItem(id){
        setItem(
            (prev)=>{
                return prev.filter(
                    (item,index) => {
                        return index !== id;
                    }
                )
            }
        )
    }

    return(

        <div className="container">
            <h1>ToDo list</h1>
            <InputArea addItem={addItem} />

            <div className="grid">
                {item.map((it,index) => 
                    <Item 
                        title ={it.title}
                        content={it.content}
                        id = {index}
                        key={index}
                        onkk = {deleteItem} 
                    />
                )}
            </div>
        </div>

    );


}

export default Todo;