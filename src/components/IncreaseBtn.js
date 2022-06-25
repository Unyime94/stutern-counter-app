import React from "react";

function IncreaseBtn(props) {
    return (
        <button id="increase-button" onClick={props.increase}>Increase</button>
    )
}

export default IncreaseBtn;