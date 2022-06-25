import React from "react";

function DecreaseBtn(props) {
    return (
        <button id="decrease-button" onClick={props.decrease}>Decrease</button>
    )
}

export default DecreaseBtn;