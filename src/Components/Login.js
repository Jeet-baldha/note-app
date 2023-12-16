
import React, { useState } from "react";


function Login() {

    var [color, setColor] = useState(false);
    const [fullName, setFullName] = useState({
        fName: "",
        lName: ""
    });

    const [details, setDetails] = useState({
        fName: "",
        lName: "",
        email: ""
    });


    function change(event) {

        var {value, name}= event.target;


        
        setDetails((prev) => {
            return{
                ...prev,
                [name]: value
            }
        });



    }
    function changeColorRed() {

        setColor(false);

    }

    function changeColorGreen() {
        setColor(true);
    }

    function update(event) {


        const { value, name } = event.target;

        setFullName((prevName) => {

            if (name === 'lName') {
                return {
                    fName: prevName.fName,
                    lName: value
                }
            }
            else {
                return {
                    fName: value,
                    lName: prevName.lName
                }
            }

        })


    }


    return (
        <div>
            <h1>Hello {details.fName} {details.lName}</h1><br />
            <p>{details.email}</p>
            <br />
            
            <input type="text" name="fName" onChange={change} value={details.fName} /><br />
            <input type="text" name="lName" onChange={change} value={details.lName} /><br/>
            <input type="email" name="email" onChange={change} value={details.email} /><br/>
            <input type="submit" onMouseOver={changeColorRed} onMouseOut={changeColorGreen} value="Login" />
        </div>
    );

}

export default Login;