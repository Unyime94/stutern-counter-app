import React from "react";

function CountDisplay(props) {
    return (
        <div>
            <p id="counter-value">Counter: <span>{props.count}</span></p>
        </div>
    );
}

export default CountDisplay;