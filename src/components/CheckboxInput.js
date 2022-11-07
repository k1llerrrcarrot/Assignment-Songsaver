import React from "react"


function CheckboxInput(props) {

    return (
        <label className="checkbox-input"><input 
            type="checkbox"
            name={props.name}
            checked={props.filters[props.name]}
            onChange={props.handleFilter}
        />
            {props.text}
        </label>
    )
}

export default CheckboxInput