import React from 'react';
import './App.css';
// mijn component werkt niet:
// import ButtonField from "./components/ButtonField/ButtonField";


// STAPPENPLAN OPDRACHT 1 (alles in App.js)
// -- Let op: We gaan eerst één fruitCounter werkend maken voor we de rest uitschrijven
// -- Welke HTML elementen hebben we nodig?
// [X] Titel met het fruit
// [X] Button met -
// [X] Button met +
// [X] P element met het aantal
// [X] ButtonField met 'Reset'
// -- Hoe gaan we ervoor zorgen dat de hoeveelheid fruit wordt verlaagd/verhoogd? State!
// [X] import useState-methode uit React
// [X] maak een state variabele + state setter functie voor (specifiek!) de aardbei-counter (state initialiseren)
// [X] Een event-listener op beide knoppen zetten (onClick)
//      [X] PLUSBUTTON: de huidige hoeveelheid van aardbeien moet + 1
//      [X] MINBUTTON: de huidige hoeveelheid van aardbeien moet - 1
//      [X] We willen de MINBUTTON disabelen als de hoeveelheid aarbeien op 0 staat
// [X] Geef de hoeveelheid aardbeien weer in een <p> element tussen de buttons
// -- Hoe gaan we ervoor zorgen dat de Reset-button alles op 0 zet?
// [X] Schrijf een reset-functie die de state waardes van alle counters (nu nog alleen aarbeien) op 0 zet
// [X] Een event-listener op de reset-knop die de reset-functie triggert onClick
// [*]  alles in componenten zetten: MISLUKT
// [X[  alle inputs een state geven: gelukt.
// [X]  alles mooier stylen: beetje - te weinig tijd over.

function App() {
    // dit kan ook samen in 1 object maar ik weet niet hoe
    const [berryCounter, setBerryCounter] = React.useState(0);
    const [bananaCounter, setBananaCounter] = React.useState(0);
    const [appleCounter, setAppleCounter] = React.useState(0);
    const [kiwiCounter, setKiwiCounter] = React.useState(0);
    //algemene state voor component kan niet?? // const [fruitCounter, setFruitCounter] = React.useState(0)??;

    // states maken voor elke individuele formulier input
    const [formFname, setFormFname] = React.useState('');
    const [formLname, setFormLname] = React.useState('');
    const [formAge, setFormAge] = React.useState(0);
    const [messageValue, setMessageValue] = React.useState('');
            // ︎↑ = postcodecheck
    const [deliverySchedule, setDeliverySchedule] = React.useState('');
    const [deliveryTime, setDeliveryTime] = React.useState('');
            // ↓ = formulier validaties
    const [termsConditionsValue, toggleTermsConditionsValue] = React.useState(false);
    const [clicked, toggleClicked] = React.useState(false);
    const [formComments, setFormComments] = React.useState('');

    //externe functie maken die alle 4 soorten fruit op nul zet
    function resetFruitCounters() {
        console.log("Alle counters op nul.");
        setKiwiCounter(0);
        setAppleCounter(0);
        setBananaCounter(0);
        setBerryCounter(0);
        // setFruitCounter(0); ??
        //dit kan vast ook beter...??
    }

    function checkboxClick() {
        console.log("Checkbox voorwaarden akkoord is aangeklikt.");
        toggleClicked(!clicked);
    }

    //functie voor select/dropdown
    function handleDeliveryChange(event){
        setDeliverySchedule(event.target.value);
    }

    //functie voor radiobuttons
    function handleTimeChange(event){
        setDeliveryTime(event.target.value);
    }

    //weten of de inputs allemaal werken:
    function handleSubmit(e) {
        checkboxClick();
        e.preventDefault();
        console.log("berryCounter", berryCounter, "bananaCounter", bananaCounter, "appleCounter", appleCounter, "kiwiCounter", kiwiCounter, "Voornaam:", formFname, "Achternaam:", formLname, "Leeftijd:", formAge, deliverySchedule, deliveryTime, "Postcode check:", messageValue, "Bericht:", formComments, "Voorwaarden check:", termsConditionsValue);
    }


  return (
    <>
        <main>
            <h1>Fruitmand bezorgservice</h1>
            <h4>Je mag toch niet naar buiten</h4>
            <hr/>

            <div className="form-container-state">
                <div className="opdracht-1">
                    <h2>Opdracht 1</h2>
                    <form>
                        {/* Dit component werkt niet, dus hieronder de 4 losse */}
                        {/*<ButtonField*/}
                        {/*    name = "Aardbeien"*/}
                        {/*    emoji = "&#127827;"*/}
                        {/*    fruitCounter = {berryCounter}*/}
                        {/*    setFruitCounter = {setBerryCounter}*/}
                        {/*    />*/}

                        <fieldset className="berry-field">
                            <h3>&#127827; Aardbeien</h3>
                            <button
                                type="button"
                                name="minus-berry"
                                disabled={berryCounter === 0}
                                onClick={() => setBerryCounter(berryCounter - 1)}
                                onChange={(e) => setBerryCounter(e.target.value)}
                            >
                                -
                            </button>
                            <p>{berryCounter}</p>
                            <button
                                type="button"
                                name="plus-berry"
                                onClick={() => setBerryCounter(berryCounter + 1)}
                                onChange={(e) => setBerryCounter(e.target.value)}
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
                        onClick={resetFruitCounters}
                    >RESET
                    </button>
                </div>
                <div className="opdracht-2">
                    <h2>Opdracht 2: Contactformulier</h2>
                    <form >
                        {/* De handleSubmit functie voor dit Form heb ik verplaatst naar de submit Button beneden */}
                        <label htmlFor="firstname">
                            Voornaam:
                            <input
                                type="text"
                                name="name"
                                id="firstname"
                                value={formFname}
                                onChange={(e) => setFormFname(e.target.value)}
                            />
                        </label>
                        <br/>
                        <label htmlFor="lastname">
                            Achternaam:
                            <input
                                type="text"
                                name="name"
                                id="lastname"
                                value={formLname}
                                onChange={(e) => setFormLname(e.target.value)}
                            />
                        </label>
                        <br/>
                        <label htmlFor="adult-age">
                            Leeftijd:
                            <input
                                type="number"
                                name="age"
                                id="adult-age"
                                min="18" max="125"
                                value={formAge}
                                onChange={(e) => setFormAge(parseInt(e.target.value))}
                            />
                        </label>
                        <br/>
                        <label htmlFor="form-postalcheck">Postcode:</label>
                        <input
                            type="text"
                            placeholder="Type je volledige postcode"
                            id="form-postalcheck"
                            name="postalcheck"
                            className={messageValue.length > 6 ? 'input-error' : 'input-normal'}
                            value={messageValue}
                            onChange={(e) => setMessageValue(e.target.value)}
                        />
                        {messageValue.length > 6 && <p className="error-message">Deze postcode bestaat niet!</p>}

                        <br/>
                        <label htmlFor="delivery">Bezorgfrequentie:</label>
                        <select name="delivery" id="delivery" onChange={handleDeliveryChange}>
                            <option value="iedere week">iedere week</option>
                            <option value="om de week">om de week</option>
                            <option value="iedere maand">iedere maand</option>
                        </select>
                        <br/>
                        <input type="radio" id="day" name="delivery_time"
                               value="overdag"
                               onChange={handleTimeChange}/>
                        <label htmlFor="overdag">overdag</label>
                        <input type="radio" id="night" name="delivery_time"
                               value="\'s Avonds"
                               onChange={handleTimeChange}/>
                        <label htmlFor="in de avond">'s Avonds</label><br/>

                        {/* label voor textarea eromheen wrapped? */}
                        <label htmlFor="remark">
                            Opmerkingen:
                            <textarea
                                name="remark"
                                id="remark"
                                rows="4"
                                cols="50"
                                placeholder="Opmerking..."
                                value={formComments}
                                onChange={(e) => setFormComments(e.target.value)}
                            >
                            </textarea>
                        </label>

                        <br/>

                        <input
                            type="checkbox"
                            id="form-terms-conditions"
                            name="terms-conditions"
                            checked={termsConditionsValue}
                            onChange={(e) => toggleTermsConditionsValue(!termsConditionsValue)}
                        />
                        <label htmlFor="form-terms-conditions">Ik ga akkoord met de voorwaarden</label>

                    </form>
                    <button
                        type="submit"
                        disabled={!termsConditionsValue}
                        onClick={handleSubmit}
                        //ik krijg de 'voorwaarden-akkoord'-checkboxClick hier niet in,
                        // dus die heb ik verplaatst naar handleSubmit
                    >
                        Verzend
                    </button>
                    <div className="output">
                        <p><strong>Dit heb je ingevuld:</strong></p>
                        <p>{formFname}, {formLname}, {formAge}, {deliverySchedule}, {deliveryTime}, {messageValue}, {formComments}, {termsConditionsValue}</p>
                    </div>
                    <div className="scroll"> &darr; </div>
                </div>

            </div>
        </main>
    </>
  );
}

export default App;
