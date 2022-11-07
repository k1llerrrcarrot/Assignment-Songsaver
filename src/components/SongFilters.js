import React from "react"
import CheckboxInput from "./CheckboxInput"

function SongFilters(props) {

    return (
        <div className="filters">
            <h2>Filters:</h2>
            <h3>Genre</h3>
            <CheckboxInput 
                name="rock"
                text="Rock"
                filters={props.filters}
                handleFilter={props.handleFilter}
            />
            <CheckboxInput 
                name="jazz"
                text="Jazz"
                filters={props.filters}
                handleFilter={props.handleFilter}
            />
            <CheckboxInput 
                name="pop"
                text="Pop"
                filters={props.filters}
                handleFilter={props.handleFilter}
            />
            

            <h3>Rating</h3>
            <CheckboxInput 
                name="oneStar"
                text="1"
                filters={props.filters}
                handleFilter={props.handleFilter}
            />
            <CheckboxInput 
                name="twoStar"
                text="2"
                filters={props.filters}
                handleFilter={props.handleFilter}
            />
            <CheckboxInput 
                name="threeStar"
                text="3"
                filters={props.filters}
                handleFilter={props.handleFilter}
            />
            <CheckboxInput 
                name="fourStar"
                text="4"
                filters={props.filters}
                handleFilter={props.handleFilter}
            />
            <CheckboxInput 
                name="fiveStar"
                text="5"
                filters={props.filters}
                handleFilter={props.handleFilter}
            />
        </div>
    )
}

export default SongFilters