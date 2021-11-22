import React from 'react';
import './App.css';

function App() {
    const [berryCounter, setBerryCounter] = React.useState(0);
    const [bananaCounter, setBananaCounter] = React.useState(0);
    const [appleCounter, setAppleCounter] = React.useState(0);
    const [kiwiCounter, setKiwiCounter] = React.useState(0);

    const [resetButton, setResetButton] = React.useState(0);

  return (
    <>
      <h1>Fruitmand bezorgservice</h1>

        <div className="form-container-state">
            <h2>Contactformulier</h2>
            <form>
                <fieldset className="berry-field">
                    <h3>Aardbeien</h3>
                    <button
                    type="button"
                    name="minus-berry"
                    onClick={() => setBerryCounter(berryCounter - 1)}
                    >
                        -
                    </button>
                    <p>berry value {berryCounter}</p>
                    <button
                        type="button"
                        name="plus-berry"
                        onClick={() => setBerryCounter(berryCounter + 1)}
                    >
                        +
                    </button>
                </fieldset>
                <fieldset className="banana-field">
                    <h3>Bananen</h3>
                    <button
                        type="button"
                        name="minus-banana"
                        onClick={() => setBananaCounter(bananaCounter + 1)}
                    >
                        -
                    </button>
                    <p>banana value {bananaCounter}</p>
                    <button
                        type="button"
                        name="plus-banana"
                        onClick={() => setBananaCounter(bananaCounter + 1)}
                    >
                        +
                    </button>
                </fieldset>
                <fieldset className="apple-field">
                    <h3>Appels</h3>
                    <button
                        type="button"
                        name="minus-apple"
                        onClick={() => setAppleCounter(appleCounter - 1)}
                    >
                        -
                    </button>
                    <p>apple value {appleCounter}</p>
                    <button
                        type="button"
                        name="plus-apple"
                        onClick={() => setAppleCounter(appleCounter + 1)}
                    >
                        +
                    </button>
                </fieldset>
                <fieldset className="kiwi-field">
                    <h3>Kiwi's</h3>
                    <button
                        type="button"
                        name="minus-kiwi"
                        onClick={() => setKiwiCounter(kiwiCounter - 1)}
                    >
                        -
                    </button>
                    <p>kiwi value {kiwiCounter}</p>
                    <button
                        type="button"
                        name="plus-kiwi"
                        onClick={() => setKiwiCounter(kiwiCounter + 1)}
                    >
                        +
                    </button>
                </fieldset>
            </form>

        </div>

    </>
  );
}

export default App;
