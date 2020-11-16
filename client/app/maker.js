//For the time being I only have inputs for the user created pars for holes 1-9
//For the end goal I would like to have a better structure of how the user inputs their values into the card
//Also I am going to add par input boxes for holes 10-18 as well has user shot scores for holes 1-18
const cardForm = (props) => {
    return (
        <form id="cardForm"
        // onSubmit={handleCard}
        name="cardForm"
        action="/maker"
        method="POST"
        className="cardForm"
    >
    <label htmlFor="name">Card Name: </label>
    <input id="cardName" type="text" name="name" placeholder="Card name"/>
    
    <label htmlFor="holeOnePar">Hole 1 Par</label>
    <input id="cardParOne" type="text" name="age" placeholder="Hole One Par"/>

    <label htmlFor="holeTwoPar">Hole 2 Par</label>
    <input id="cardParTwo" type="text" name="age" placeholder="Hole Two Par"/>

    <label htmlFor="holeThreePar">Hole 3 Par</label>
    <input id="cardParThree" type="text" name="age" placeholder="Hole Three Par"/>

    <label htmlFor="holeFourPar">Hole 4 Par</label>
    <input id="cardParFour" type="text" name="age" placeholder="Hole Four Par"/>

    <label htmlFor="holeFivePar">Hole 5 Par</label>
    <input id="cardParFive" type="text" name="age" placeholder="Hole Five Par"/>

    <label htmlFor="holeSixPar">Hole 6 Par</label>
    <input id="cardParSix" type="text" name="age" placeholder="Hole Six Par"/>

    <label htmlFor="holeSevenPar">Hole 7 Par</label>
    <input id="cardParSeven" type="text" name="age" placeholder="Hole Seven Par"/>

    <label htmlFor="holeEightPar">Hole 8 Par</label>
    <input id="cardParEight" type="text" name="age" placeholder="Hole Eight Par"/>

    <label htmlFor="holeNinePar">Hole 9 Par</label>
    <input id="cardParNine" type="text" name="age" placeholder="Hole Nine Par"/>
    
    <input type="hidden" name="_csrf" value={props.csrf}/>
    <input className="makeCardSubmit" type="submit" value="Make Card" />
    </form>
    );
};

const setup = function(csrf) {
    ReactDOM.render(
        <CardForm csrf={csrf} />, document.querySelector("#makeCard")
    );
};

const getToken = () => {
    sendAjax('GET', '/getToken', null, (result) => {
        setup(result.csrfToken);
    });
};

$(document).ready(function() {
    getToken();
});