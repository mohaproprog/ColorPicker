import { useState } from "react";
import "./index.css";
function Colorpicker(){

    const [color,setColor]= useState("yellow");

    function colorChange(e){
        setColor(e.target.value);
    }

    return(
        <div className="container">
            <h1>Choose Every Color You Want</h1>

        <div className="colorChoosed" style={{background:color}}> 
        </div>
        <input type="color" onChange={colorChange}/>



        </div> 

    )
}

export default Colorpicker;