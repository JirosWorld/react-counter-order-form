import React from 'react';
import './App.css';
import Button from "./Button/Button";


// STAPPENPLAN OPDRACHT 1 (alles in App.js)
// -- Let op: We gaan eerst één fruitCounter werkend maken voor we de rest uitschrijven
// -- Welke HTML elementen hebben we nodig?
// [X] Titel met het fruit
// [X] Button met -
// [X] Button met +
// [X] P element met het aantal
// [X] Button met 'Reset'
// -- Hoe gaan we ervoor zorgen dat de hoeveelheid fruit wordt verlaagd/verhoogd? State!
// [ ] import useState-methode uit React
// [ ] maak een state variabele + state setter functie voor (specifiek!) de aardbei-counter (state initialiseren)
// [ ] Een event-listener op beide knoppen zetten (onClick)
//      [ ] PLUSBUTTON: de huidige hoeveelheid van aardbeien moet + 1
//      [ ] MINBUTTON: de huidige hoeveelheid van aardbeien moet - 1
//      [ ] We willen de MINBUTTON disabelen als de hoeveelheid aarbeien op 0 staat
// [ ] Geef de hoeveelheid aardbeien weer in een <p> element tussen de buttons
// -- Hoe gaan we ervoor zorgen dat de Reset-button alles op 0 zet?
// [ ] Schrijf een reset-functie die de state waardes van alle counters (nu nog alleen aarbeien) op 0 zet
// [ ] Een event-listener op de reset-knop die de reset-functie triggert onClick


function App() {
    // dit kan ook samen in 1 object maar ik weet niet hoe
    const [berryCounter, setBerryCounter] = React.useState(0);
    const [bananaCounter, setBananaCounter] = React.useState(0);
    const [appleCounter, setAppleCounter] = React.useState(0);
    const [kiwiCounter, setKiwiCounter] = React.useState(0);

    // states maken voor elke individuele formulier input
    const [messageValue, setMessageValue] = React.useState('');
    const [termsConditionsValue, toggleTermsConditionsValue] = React.useState(false);
    const [clicked, toggleClicked] = React.useState(false);

    //externe functie maken die alle 4 soorten fruit op nul zet
    // onClick={resetFunction}
    //     function resetFunction() { setFruitValue(0)}


    function handleClick() {
        console.log("Checkbox voor nieuwsbrief is aangeklikt.");
        toggleClicked(!clicked);
    }


  return (
    <>
      <h1>Fruitmand bezorgservice</h1>

        <div className="form-container-state">
            <div className="opdracht-1">
                <h2>Opdracht 1</h2>
                <form>
                    <fieldset className="berry-field">
                        <h3>&#127827; Aardbeien</h3>
                        <button
                            type="button"
                            name="minus-berry"
                            disabled={berryCounter === 0}
                            onClick={() => setBerryCounter(berryCounter - 1)}
                        >
                            -
                        </button>
                        <p>{berryCounter}</p>
                        <button
                            type="button"
                            name="plus-berry"
                            onClick={() => setBerryCounter(berryCounter + 1)}
                        >
                            +
                        </button>
                    </fieldset>
                    <fieldset className="banana-field">
                        <h3>&#127820; Bananen</h3>
                        <button
                            type="button"
                            name="minus-banana"
                            disabled={bananaCounter === 0}
                            onClick={() => setBananaCounter(bananaCounter - 1)}
                        >
                            -
                        </button>
                        <p>{bananaCounter}</p>
                        <button
                            type="button"
                            name="plus-banana"
                            onClick={() => setBananaCounter(bananaCounter + 1)}
                        >
                            +
                        </button>
                    </fieldset>
                    <fieldset className="apple-field">
                        <h3>&#127823; Appels</h3>
                        <button
                            type="button"
                            name="minus-apple"
                            disabled={appleCounter === 0}
                            onClick={() => setAppleCounter(appleCounter - 1)}
                        >
                            -
                        </button>
                        <p>{appleCounter}</p>
                        <button
                            type="button"
                            name="plus-apple"
                            onClick={() => setAppleCounter(appleCounter + 1)}
                        >+
                        </button>
                    </fieldset>
                    <fieldset className="kiwi-field">
                        <h3>&#129373; Kiwi's</h3>
                        <button
                            type="button"
                            name="minus-kiwi"
                            disabled={kiwiCounter === 0}
                            onClick={() => setKiwiCounter(kiwiCounter - 1)}
                        >
                            -
                        </button>
                        <p>{kiwiCounter}</p>
                        <button
                            type="button"
                            name="plus-kiwi"
                            onClick={() => setKiwiCounter(kiwiCounter + 1)}
                        >
                            +
                        </button>
                    </fieldset>
                </form>
                <button
                    type="button"
                    name="reset"
                    onClick={() => setKiwiCounter(0) + setAppleCounter(0) + setBananaCounter(0) + setBerryCounter(0)}
                >RESET
                </button>
            </div>
            <div className="opdracht-1">
                <h2>Opdracht 2: Contactformulier</h2>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input type="text" id="fname" name="fname" value="John" /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text" id="lname" name="lname" value="Doe" /><br />
                    <label htmlFor="adult-age">Leeftijd:</label>
                    <input type="number" id="adult-age" adult-age="quantity" min="18" max="125" />
                    <br/>
                    <label htmlFor="form-message">Postcode:</label><br />
                    <input
                        type="text"
                        placeholder="Typ hier jouw volledige postcode"
                        id="form-message"
                        name="message"
                        className={messageValue.length > 20 ? 'input-error' : 'input-normal'}
                        value={messageValue}
                        onChange={(e) => setMessageValue(e.target.value)}
                    />
                    {messageValue.length > 20 && <p className="error-message">Dit bericht is te lang!</p>}

                    <label htmlFor="delivery">Bezorgfrequentie:</label>
                    <select name="delivery" id="delivery">
                        <option value="weekly">iedere week</option>
                        <option value="fortnightly">om de week</option>
                        <option value="monthly">iedere maand</option>
                    </select>

                    <br/>
                    <input type="radio" id="day" name="delivery_slot" value="day" />
                    <label htmlFor="html">overdag</label>
                    <input type="radio" id="night" name="delivery_slot" value="night" />
                    <label htmlFor="css">'s Avonds</label><br />

                    <label htmlFor="w3review">opmerking:</label><br />
                    <textarea id="remark" name="remark" rows="4" cols="50">Opmerking...</textarea>
                    <br />

                    <label htmlFor="form-terms-conditions">Ik ga akkoord met de voorwaarden</label>
                    <input
                        type="checkbox"
                        id="form-terms-conditions"
                        name="terms-conditions"
                        checked={termsConditionsValue}
                        onChange={(e) => toggleTermsConditionsValue(!termsConditionsValue)}

                    />
                </form>
                <button
                    type="submit"
                    disabled={!termsConditionsValue}
                    onClick={handleClick}
                >
                    Verstuur na akkoord
                </button>
            </div>

        </div>

    </>
  );
}

export default App;
