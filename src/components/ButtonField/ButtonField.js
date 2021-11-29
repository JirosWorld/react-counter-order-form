import React from 'react';

// niet in App.js geplaatst want:
// dit component werkt niet, waarom?:
//Error: Objects are not valid as a React child (found: object with keys {}). If you meant to render a collection of children, use an array instead.

function ButtonField(name, emoji, fruitCounter, setFruitCounter) {
    return (
            <fieldset className={name}>
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
                        setFruitCounter({fruitCounter} + 1)
                    }>
                    +
                </button>
            </fieldset>
    );
}

export default ButtonField;
