const handleCard = (e) => {
    e.preventDefault();

    $("#otherMessage").animate({width:'hide'}, 350);

    if($("#cardPar1").val() == '' || $("#cardPar2").val() == '' || $("#cardPar3").val() == '' || 
    $("#cardPar4").val() == '' || $("#cardPar5").val() == '' || $("#cardPar6").val() == '' || 
    $("#cardPar7").val() == '' || $("#cardPar8").val() == '' || $("#cardPar9").val() == '' ||
    $("#userScore1").val() == '' || $("#userScore2").val() == '' || $("#userScore3").val() == '' ||
    $("#userScore4").val() == '' || $("#userScore5").val() == '' || $("#userScore6").val() == '' || 
    $("#userScore7").val() == '' || $("#userScore8").val() == '' || $("#userScore9").val() == '') {
        handleError("You must add ALL of your pars and scores!");
        return false;
    }

    sendAjax('POST', $("cardForm").attr("action"), $("cardForm").serialize(), function() {
        loadCardsFromServer();
    });

    return false;
};

const CardForm = (props) => {
    return (
        <form id="cardForm"
        name="cardForm"
        onSubmit={handleCard}
        action="/maker"
        method="POST"
        className="mainPageForm"
    >
    <div className="contentWrapper">

    <div id="containerPars">
    <h1 id="parsTitle">Enter The Pars For Each Hole</h1>
    <label htmlFor="holeOnePar">1 Par: </label>
    <input className="cardPar" id="cardPar1" type="text" name="holeOnePar" placeholder="_"/>

    <label htmlFor="holeTwoPar">2 Par: </label>
    <input className="cardPar" id="cardPar2" type="text" name="holeTwoPar" placeholder="_"/>

    <label htmlFor="holeThreePar">3 Par: </label>
    <input className="cardPar" id="cardPar3" type="text" name="holeThreePar" placeholder="_"/>

    <label htmlFor="holeFourPar">4 Par: </label>
    <input className="cardPar" id="cardPar4" type="text" name="holeFourPar" placeholder="_"/>

    <label htmlFor="holeFivePar">5 Par: </label>
    <input className="cardPar" id="cardPar5" type="text" name="holeFivePar" placeholder="_"/>

    <label htmlFor="holeSixPar">6 Par: </label>
    <input className="cardPar" id="cardPar6" type="text" name="holeSixPar" placeholder="_"/>

    <label htmlFor="holeSevenPar">7 Par: </label>
    <input className="cardPar" id="cardPar7" type="text" name="holeSevenPar" placeholder="_"/>

    <label htmlFor="holeEightPar">8 Par: </label>
    <input className="cardPar" id="cardPar8" type="text" name="holeEightPar" placeholder="_"/>

    <label htmlFor="holeNinePar">9 Par: </label>
    <input className="cardPar" id="cardPar9" type="text" name="holeNinePar" placeholder="_"/>
    </div>

    <div id="containerShots">
    <h1 id="scoreTitle">Enter Your Score For Each Hole</h1>
    <label htmlFor="holeOneScore">1 Score: </label>
    <input className="cardScore" id="userScore1" type="text" name="holeOneScore" placeholder="_"/>

    <label htmlFor="holeTwoScore">2 Score: </label>
    <input className="cardScore" id="userScore2" type="text" name="holeTwoScore" placeholder="_"/>

    <label htmlFor="holeThreeScore">3 Score: </label>
    <input className="cardScore" id="userScore3" type="text" name="holeThreeScore" placeholder="_"/>

    <label htmlFor="holeFourScore">4 Score: </label>
    <input className="cardScore" id="userScore4" type="text" name="holeFourScore" placeholder="_"/>

    <label htmlFor="holeFiveScore">5 Score: </label>
    <input className="cardScore" id="userScore5" type="text" name="holeFiveScore" placeholder="_"/>

    <label htmlFor="holeSixScore">6 Score: </label>
    <input className="cardScore" id="userScore6" type="text" name="holeSixScore" placeholder="_"/>

    <label htmlFor="holeSevenScore">7 Score: </label>
    <input className="cardScore" id="userScore7" type="text" name="holeSevenScore" placeholder="_"/>

    <label htmlFor="holeEightScore">8 Score: </label>
    <input className="cardScore" id="userScore8" type="text" name="holeEightScore" placeholder="_"/>

    <label htmlFor="holeNineScore">9 Score: </label>
    <input className="cardScore" id="userScore9" type="text" name="holeNineScore" placeholder="_"/>
    </div>
    
    <section id="scoreCard">
    <div className="scoreCardWrapper">
        <div className="holeName"><p>Hole</p></div>
        <div className="hole1"><p>1</p></div>
        <div className="hole2"><p>2</p></div>
        <div className="hole3"><p>3</p></div>
        <div className="hole4"><p>4</p></div>
        <div className="hole5"><p>5</p></div>
        <div className="hole6"><p>6</p></div>
        <div className="hole7"><p>7</p></div>
        <div className="hole8"><p>8</p></div>
        <div className="hole9"><p>9</p></div>

        <div className="parName"><p>Par</p></div>
        <div className="par1"><p></p></div>
        <div className="par2"><p></p></div>
        <div className="par3"><p></p></div>
        <div className="par4"><p></p></div>
        <div className="par5"><p></p></div>
        <div className="par6"><p></p></div>
        <div className="par7"><p></p></div>
        <div className="par8"><p></p></div>
        <div className="par9"><p></p></div>

        <div className="scoreName"><p>Score</p></div>
        <div className="score1"><p></p></div>
        <div className="score2"><p></p></div>
        <div className="score3"><p></p></div>
        <div className="score4"><p></p></div>
        <div className="score5"><p></p></div>
        <div className="score6"><p></p></div>
        <div className="score7"><p></p></div>
        <div className="score8"><p></p></div>
        <div className="score9"><p></p></div>
    </div>
    <input type="hidden" name="_csrf" value={props.csrf}/>
    <input className="cardSubmit" type="submit" value="Create Card" />
    </section>

    </div>
    </form>
    );
};

const CardList = function(props) {
    if(props.cards.length === 0) {
        return (
        <div className="cardList">
            <h1 className="noCards">You Have No Cards Yet</h1>
        </div>   
        );
    };

    const userCards = props.cards.map(function(card) {
        return (
        <div key={card._id} className="scoreCardWrapper">
            <div className="holeName"><p>Hole</p></div>
            <div className="hole1"><p>1</p></div>
            <div className="hole2"><p>2</p></div>
            <div className="hole3"><p>3</p></div>
            <div className="hole4"><p>4</p></div>
            <div className="hole5"><p>5</p></div>
            <div className="hole6"><p>6</p></div>
            <div className="hole7"><p>7</p></div>
            <div className="hole8"><p>8</p></div>
            <div className="hole9"><p>9</p></div>

            <div className="parName"><p>Par</p></div>
            <div className="par1"><p>{card.cardPar1}</p></div>
            <div className="par2"><p>{card.cardPar2}</p></div>
            <div className="par3"><p>{card.cardPar3}</p></div>
            <div className="par4"><p>{card.cardPar4}</p></div>
            <div className="par5"><p>{card.cardPar5}</p></div>
            <div className="par6"><p>{card.cardPar6}</p></div>
            <div className="par7"><p>{card.cardPar7}</p></div>
            <div className="par8"><p>{card.cardPar8}</p></div>
            <div className="par9"><p>{card.cardPar9}</p></div>

            <div className="scoreName"><p>Score</p></div>
            <div className="score1"><p>{card.userScore1}</p></div>
            <div className="score2"><p>{card.userScore2}</p></div>
            <div className="score3"><p>{card.userScore3}</p></div>
            <div className="score4"><p>{card.userScore4}</p></div>
            <div className="score5"><p>{card.userScore5}</p></div>
            <div className="score6"><p>{card.userScore6}</p></div>
            <div className="score7"><p>{card.userScore7}</p></div>
            <div className="score8"><p>{card.userScore8}</p></div>
            <div className="score9"><p>{card.userScore9}</p></div>
        </div>
        );
    });

    return (
        <div className="cardList">
            {userCards}
        </div>
    );
};

const loadCardsFromServer = () => {
    sendAjax('GET', '/getCards', null, (data) => {
        ReactDOM.render(
            <CardList />, document.querySelector("")
        );
    });
};

const setup = function(csrf) {
    ReactDOM.render(
        <CardForm csrf={csrf} />, document.querySelector("#makeCard")
    );

    ReactDOM.render(
        <CardList cards={[]} />, document.querySelector("#cards")
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