import React from 'react'
// import './InputField.css'

const InputField = (props) => {

    return (
        <div className="flex">
            <label>Write the {props.name} here</label>
            <input 
            type="text"
            className= "input-lg"
            placeholder= {props.placeholder} 
            value={props.value}
            onChange={props.handleChange}
            onBlur={props.apply}
            /> 
        </div>
    )

}

export default InputField
