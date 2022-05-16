import React from "react";

function Greet ({firstName, lastName}){
    return <h2>Hello {lastName || firstName} !</h2>
}

export default Greet;