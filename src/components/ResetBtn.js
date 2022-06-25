import React from "react";

function ResetBtn(props) {
    return (
        <button id="reset-button" onClick={props.reset}>Reset</button>
    )
}

export default ResetBtn;