const handleLogin = (e) => {
    e.preventDefault();

    $("#otherMessage").animate({width:'hide'}, 500);

    if($("#user").val() == '' || $("#pass").val() == '') {
        handleError("You need to enter a username and password!");
        return false;
    }

    console.log($("input[name=_csrf]").val());

    sendAjax('POST', $("#loginForm").attr("action"), $("#loginForm").serialize(), redirect);

    return false;
}

const handleSignup = (e) => {
    e.preventDefault();

    $("#otherMessage").animate({width:'hide'}, 350);

    if($("#user").val() == '' || $("#pass").val() == '' || $("#pass2").val() == '') {
        handleError("All fields are required");
        return false;
    }

    if($("#pass").val() !== $("#pass2").val()) {
        handleError("Passwords do not match");
        return false;
    }

    sendAjax('POST', $("#payInfoForm").attr("action"), $("#payInfoForm").serialize(), redirect);

    return false;
};

const handleOption = (e) => {
    e.preventDefault();

    $("#otherMessage").animate({width:'hide'}, 350);

    sendAjax('POST', $("#optionForm").attr("action"), $("#optionForm").serialize(), redirect);

    return false;
}

const LoginWindow = (props) => {
    return (
        <form id="loginForm" name="loginForm"
            onSubmit={handleLogin}
            action="/login"
            method="POST"
            className="mainForm"
        >
        <h1 id="logInTitle">Log In Now</h1>
        <input className="logInInfo" id="user" type="text" name="username" placeholder="Enter Username"/>
        <input className="logInInfo" id="pass" type="password" name="pass" placeholder="Enter Password"/>
        <input type="hidden" name="_csrf" value={props.csrf}/>
        <input className="logInSubmit" type="submit" value="Log in" />
        <p id="break">Need an account? <input className="signInSubmit" type="submit" value="Sign Up"/></p>
    </form>
    );
};

//New Option Page
const OptionWindow = (props) => {
    return (
        <form id="optionForm" name="optionForm"
            onSubmit={handleOption}
            action="/option"
            method="POST"
            className="optionPageForm"
        >

        {/* Pay Option 1: 1 month subscription */}
        <section id="payOptionOne">
        <h1 className="optionMonth">1</h1>
        <h2 className="optionSub">Month Sub</h2>
        <h3 className="optionValue">0.99$</h3>
        <input className="selectSubmit" type="submit" value="Select" />
        </section>


        {/* Pay Option 2: 6 month subscription  */}
        <section id="payOptionTwo">
        <h1 className="optionMonth">6</h1>
        <h2 className="optionSub">Month Sub</h2>
        <h3 className="optionValue">2.99$</h3>
        <input className="selectSubmit" type="submit" value="Select" />
        </section>


        {/* Pay Option 3: 12 month subscription  */}
        <section id="payOptionThree">
        <h1 className="optionMonth">12</h1>
        <h2 className="optionSub">Month Sub</h2>
        <h3 className="optionValue">4.99$</h3>
        <input className="selectSubmit" type="submit" value="Select" />
        </section>

        <input type="hidden" name="_csrf" value={props.csrf}/>
        </form>
    );
};

const PayInfoWindow = (props) => {
    return (
        <form id="payInfoForm" name="payInfoForm"
            onSubmit={handleSignup}
            action="/info"
            method="POST"
            className="infoPageForm"
        >

        {/* User payment information */}
        <h1>Enter Your Payment Information and Create a Username and Password</h1>
        <label htmlFor="cardNumber">Card Number: </label>
        <input id="cardNumberInput" type="text" name="cardNumber" placeholder="Number"/>
        <br></br>
        <label htmlFor="holderName">Holder Name:</label>
        <input id="holderNameInput" type="text" name="holderName" placeholder="Name"/>
        <br></br>
        <label htmlFor="expDate">Exp Date:</label>
        <input id="expDateInput" type="text" name="expDate" placeholder="Date"/>
        <br></br>
        <label htmlFor="cvv">CVV:</label>
        <input id="cvvInput" type="text" name="cvv" placeholder="Number"/>
        <br></br>

        {/* Username and password creation */}
        <label htmlFor="username">Username: </label>
        <input id="user" type="text" name="username" placeholder="Username"/>
        <br></br>
        <label htmlFor="pass">Password: </label>
        <input id="pass" type="password" name="pass" placeholder="Password"/>
        <br></br>
        <label htmlFor="pass2">Confirm Password: </label>
        <input id="pass2" type="password" name="pass2" placeholder="Retype password"/>
        <br></br>
        <input type="hidden" name="_csrf" value={props.csrf}/>

        <input className="infoSubmit" type="submit" value="Sign Up" />

    </form>
    );
};

const MainPageWindow = (csrf) => {
    return (
        <form id="cardForm"
        name="cardForm"
        action="/maker"
        method="POST"
        className="mainPageForm"
    >
    <div className="contentWrapper">

    <div id="containerPars">
    <h1 id="parsTitle">Enter The Pars For Each Hole</h1>
    <label htmlFor="holeOnePar">1 Par: </label>
    <input className="cardPar" type="text" name="holeOnePar" placeholder="_"/>

    <label htmlFor="holeTwoPar">2 Par: </label>
    <input className="cardPar" type="text" name="holeTwoPar" placeholder="_"/>

    <label htmlFor="holeThreePar">3 Par: </label>
    <input className="cardPar" type="text" name="holeThreePar" placeholder="_"/>

    <label htmlFor="holeFourPar">4 Par: </label>
    <input className="cardPar" type="text" name="holeFourPar" placeholder="_"/>

    <label htmlFor="holeFivePar">5 Par: </label>
    <input className="cardPar" type="text" name="holeFivePar" placeholder="_"/>

    <label htmlFor="holeSixPar">6 Par: </label>
    <input className="cardPar" type="text" name="holeSixPar" placeholder="_"/>

    <label htmlFor="holeSevenPar">7 Par: </label>
    <input className="cardPar" type="text" name="holeSevenPar" placeholder="_"/>

    <label htmlFor="holeEightPar">8 Par: </label>
    <input className="cardPar" type="text" name="holeEightPar" placeholder="_"/>

    <label htmlFor="holeNinePar">9 Par: </label>
    <input className="cardPar" type="text" name="holeNinePar" placeholder="_"/>
    </div>

    <div id="containerShots">
    <h1 id="scoreTitle">Enter Your Score For Each Hole</h1>
    <label htmlFor="holeOneScore">1 Score: </label>
    <input className="cardScore" type="text" name="holeOneScore" placeholder="_"/>

    <label htmlFor="holeTwoScore">2 Score: </label>
    <input className="cardScore" type="text" name="holeTwoScore" placeholder="_"/>

    <label htmlFor="holeThreeScore">3 Score: </label>
    <input className="cardScore" type="text" name="holeThreeScore" placeholder="_"/>

    <label htmlFor="holeFourScore">4 Score: </label>
    <input className="cardScore" type="text" name="holeFourScore" placeholder="_"/>

    <label htmlFor="holeFiveScore">5 Score: </label>
    <input className="cardScore" type="text" name="holeFiveScore" placeholder="_"/>

    <label htmlFor="holeSixScore">6 Score: </label>
    <input className="cardScore" type="text" name="holeSixScore" placeholder="_"/>

    <label htmlFor="holeSevenScore">7 Score: </label>
    <input className="cardScore" type="text" name="holeSevenScore" placeholder="_"/>

    <label htmlFor="holeEightScore">8 Score: </label>
    <input className="cardScore" type="text" name="holeEightScore" placeholder="_"/>

    <label htmlFor="holeNineScore">9 Score: </label>
    <input className="cardScore" type="text" name="holeNineScore" placeholder="_"/>
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
    <input className="cardSubmit" type="submit" value="Create Card" />
    </section>

    <div className="cardList">
        <h1 className="noCards">You Have No Cards Yet</h1>
    </div>

    </div>
    </form>
    );
};

const createLoginWindow = (csrf) => {
    ReactDOM.render(
        <LoginWindow csrf={csrf} />,
        document.querySelector("#content")
    );
};

//New Option Page
const createOptionWindow = (csrf) => {
    ReactDOM.render(
        <OptionWindow csrf={csrf} />,
        document.querySelector("#content")
    );
};

//New PayInfo Page
const createPayInfoWindow = (csrf) => {
    ReactDOM.render(
        <PayInfoWindow csrf={csrf} />,
        document.querySelector("#content")
    );
};

//New Example Main Page
const createMainPageWindow = (csrf) => {
    ReactDOM.render(
        <MainPageWindow csrf={csrf} />,
        document.querySelector("#content")
    );
};

const setup = (csrf) => {
    const loginButton = document.querySelector("#loginbutton");
    // const signupButton = document.querySelector("#signupButton");
    //New Option Page
    const optionButton = document.querySelector("#payOption");
    //New PayInfo Page
    const infoButton = document.querySelector("#payInfo");
    //New Example Main Page
    const mainButton = document.querySelector("#mainExample");

    loginButton.addEventListener("click", (e) => {
        e.preventDefault();
        createLoginWindow(csrf);
        return false;
    });

    //New Option Page
    optionButton.addEventListener("click", (e) => {
        e.preventDefault();
        createOptionWindow(csrf);
        return false;
    });

    //New Pay Info Page
    infoButton.addEventListener("click", (e) => {
        e.preventDefault();
        createPayInfoWindow(csrf);
        return false;
    });

    //New Example Main Page
    mainButton.addEventListener("click", (e) => {
        e.preventDefault();
        createMainPageWindow(csrf);
        return false;
    });

    createLoginWindow(csrf);
};

const getToken = () => {
    sendAjax('GET', '/getToken', null, (result) => {
        setup(result.csrfToken);
    });
};

$(document).ready(function() {
    getToken();
});