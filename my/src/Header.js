import React from "react";

function Header(props){
    console.log(props)  //props are read only
    return <h1>Hello {props.name}</h1>
}

export default Header; 

//  function add (a){
//     return a+a
// }

// add(5)