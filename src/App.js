import React from 'react';
import './App.css';
import options from "./data/select-data.json";
// mijn component werkt niet:
import ButtonField from "./components/ButtonField/ButtonField";


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

 // [*]  alles in componenten zetten: half MISLUKT

// [X[  alle inputs een state geven: gelukt.
// [X]  alles mooier stylen.

function App() {
    // dit kan ook samen in 1 object maar ik weet niet hoe
    const [berryCounter, setBerryCounter] = React.useState(0);
    const [bananaCounter, setBananaCounter] = React.useState(0);
    const [appleCounter, setAppleCounter] = React.useState(0);
    const [kiwiCounter, setKiwiCounter] = React.useState(0);

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
        console.log("Fruit Selected!!", event.target.value);
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
                        <ButtonField
                            name = "Aardbeien"
                            emoji = "&#127827;"
                            fruitCounter = {berryCounter}
                            setFruitCounter = {setBerryCounter}
                            />
                        <ButtonField
                            name = "Bananen"
                            emoji = "&#127820;"
                            fruitCounter = {bananaCounter}
                            setFruitCounter = {setBananaCounter}
                        />
                        <ButtonField
                            name = "Appels"
                            emoji = "&#127823;"
                            fruitCounter = {appleCounter}
                            setFruitCounter = {setAppleCounter}
                        />
                        <ButtonField
                            name = "Kiwi's"
                            emoji = "&#129373;"
                            fruitCounter = {kiwiCounter}
                            setFruitCounter = {setKiwiCounter}
                        />
                        <p>Standaard fieldset &darr;</p>
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
                        {/* De handleSubmit action voor dit Form heb ik verplaatst naar de submit Button beneden */}
                        <label htmlFor="firstname">
                            Voornaam:
                            <input
                                type="text"
                                name="firstname"
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
                                name="lastname"
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
                        <label htmlFor="form-postalcheck">Postcode:
                        <input
                            type="text"
                            placeholder="Type je volledige postcode"
                            id="form-postalcheck"
                            name="postalcheck"
                            className={messageValue.length > 6 ? 'input-error' : 'input-normal'}
                            value={messageValue}
                            onChange={(e) => setMessageValue(e.target.value)}
                        />
                        </label>
                        {messageValue.length > 6 && <p className="error-message">Deze postcode bestaat niet!</p>}

                        <br/>
                        <label htmlFor="delivery">Bezorgfrequentie:
                            <select value={deliverySchedule} onChange={handleDeliveryChange}>
                                {options.map((option, index) => (
                                    <option value={option.value} key={index}>{option.label}</option>
                                ))}
                            </select>
                        </label>
                        <br/>
                        <label htmlFor="overdag">
                        <input type="radio" id="day" name="delivery_time"
                               value="overdag"
                               onChange={handleTimeChange}/>
                        overdag</label>
                        <label htmlFor="in de avond">
                        <input type="radio" id="night" name="delivery_time"
                               value="\'s Avonds"
                               onChange={handleTimeChange}/>
                        's Avonds</label><br/>

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
                        <label htmlFor="form-terms-conditions">
                        <input
                            type="checkbox"
                            id="form-terms-conditions"
                            name="terms-conditions"
                            checked={termsConditionsValue}
                            onChange={(e) => toggleTermsConditionsValue(!termsConditionsValue)}
                        />
                         Ik ga akkoord met de voorwaarden</label>

                    </form>
                    <button
                        type="submit"
                        disabled={!termsConditionsValue}
                        onClick={handleSubmit}
                        //ik krijg de 'voorwaarden-akkoord'-checkboxClick hier niet in,
                        // dus die heb ik verplaatst naar de handleSubmit functie bovenin.
                    >
                        Verzend
                    </button>
                    <div className="output">
                        <p><strong>Dit heb je ingevuld:</strong></p>
                        <p>"berryCounter", {berryCounter}, "bananaCounter", {bananaCounter}, "appleCounter", {appleCounter}, "kiwiCounter", {kiwiCounter}, "Voornaam:", {formFname}, "Achternaam:", {formLname}, "Leeftijd:", {formAge}, {deliverySchedule}, {deliveryTime}, "Postcode check:", {messageValue}, "Bericht:", {formComments}, "Voorwaarden check:", {termsConditionsValue}</p>
                    </div>
                    <div className="scroll"> &darr; </div>
                </div>

            </div>
        </main>
    </>
  );
}

export default App;
