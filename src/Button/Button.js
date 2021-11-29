import React from "react";

function Button(name,isDisabled,clickHandler) {
    return (
        <button
            type="button"
            disabled={isDisabled || false} //check voor niet-verplichte prop
            onClick={clickHandler}>
        </button>
    )
}

export default Button;