import React from "react";
import { useParams } from 'react-router-dom';

const Input = (props) =>{
    const { input, textColor, backgroundColor } = useParams();
    const pageColor ={
        color: `${textColor}`,
        backgroundColor: `${backgroundColor}`,
    };
    return(
        <div>
            {
            isNaN(props.input)? 
            <h1 style={pageColor}>The number is: {input}</h1>: 
            <h1 style={pageColor}>The word is: {input}</h1>
            }
        </div>
    )
};
export default Input;