import React from 'react';

// let fruitCounter = 0;
// let setFruitCounter = 0;

function ButtonField({name, emoji, fruitCounter, setFruitCounter}) {

    return (
            <fieldset className={`${name}-field`}>
                <h3>{emoji} {name}</h3>
                <button
                    type="button"
                    name={name}
                    disabled={fruitCounter === 0}
                    onClick={() =>
                        setFruitCounter(fruitCounter - 1)
                    }>
                    -
                </button>
                <p>{fruitCounter}</p>
                <button
                    type="button"
                    name={name}
                    onClick={() =>
                        setFruitCounter(fruitCounter + 1)
                    }>
                    +
                </button>
            </fieldset>
    );
}

export default ButtonField;
