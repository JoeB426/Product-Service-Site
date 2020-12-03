"use strict";

var handleLogin = function handleLogin(e) {
  e.preventDefault();
  $("#otherMessage").animate({
    width: 'hide'
  }, 500);

  if ($("#user").val() == '' || $("#pass").val() == '') {
    handleError("You need to enter a username and password!");
    return false;
  }

  console.log($("input[name=_csrf]").val());
  sendAjax('POST', $("#loginForm").attr("action"), $("#loginForm").serialize(), redirect);
  return false;
};

var handleSignup = function handleSignup(e) {
  e.preventDefault();
  $("#otherMessage").animate({
    width: 'hide'
  }, 350);

  if ($("#user").val() == '' || $("#pass").val() == '' || $("#pass2").val() == '') {
    handleError("All fields are required");
    return false;
  }

  if ($("#pass").val() !== $("#pass2").val()) {
    handleError("Passwords do not match");
    return false;
  }

  sendAjax('POST', $("#payInfoForm").attr("action"), $("#payInfoForm").serialize(), redirect);
  return false;
};

var handleOption = function handleOption(e) {
  e.preventDefault();
  $("#otherMessage").animate({
    width: 'hide'
  }, 350);
  sendAjax('POST', $("#optionForm").attr("action"), $("#optionForm").serialize(), redirect);
  return false;
};

var LoginWindow = function LoginWindow(props) {
  return /*#__PURE__*/React.createElement("form", {
    id: "loginForm",
    name: "loginForm",
    onSubmit: handleLogin,
    action: "/login",
    method: "POST",
    className: "mainForm"
  }, /*#__PURE__*/React.createElement("h1", {
    id: "logInTitle"
  }, "Log In Now"), /*#__PURE__*/React.createElement("input", {
    className: "logInInfo",
    id: "user",
    type: "text",
    name: "username",
    placeholder: "Enter Username"
  }), /*#__PURE__*/React.createElement("input", {
    className: "logInInfo",
    id: "pass",
    type: "password",
    name: "pass",
    placeholder: "Enter Password"
  }), /*#__PURE__*/React.createElement("input", {
    type: "hidden",
    name: "_csrf",
    value: props.csrf
  }), /*#__PURE__*/React.createElement("input", {
    className: "logInSubmit",
    type: "submit",
    value: "Log in"
  }), /*#__PURE__*/React.createElement("p", {
    id: "break"
  }, "Need an account? ", /*#__PURE__*/React.createElement("input", {
    className: "signInSubmit",
    type: "submit",
    value: "Sign Up"
  })));
}; //New Option Page


var OptionWindow = function OptionWindow(props) {
  return /*#__PURE__*/React.createElement("form", {
    id: "optionForm",
    name: "optionForm",
    onSubmit: handleOption,
    action: "/option",
    method: "POST",
    className: "optionPageForm"
  }, /*#__PURE__*/React.createElement("section", {
    id: "payOptionOne"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "optionMonth"
  }, "1"), /*#__PURE__*/React.createElement("h2", {
    className: "optionSub"
  }, "Month Sub"), /*#__PURE__*/React.createElement("h3", {
    className: "optionValue"
  }, "0.99$"), /*#__PURE__*/React.createElement("input", {
    className: "selectSubmit",
    type: "submit",
    value: "Select"
  })), /*#__PURE__*/React.createElement("section", {
    id: "payOptionTwo"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "optionMonth"
  }, "6"), /*#__PURE__*/React.createElement("h2", {
    className: "optionSub"
  }, "Month Sub"), /*#__PURE__*/React.createElement("h3", {
    className: "optionValue"
  }, "2.99$"), /*#__PURE__*/React.createElement("input", {
    className: "selectSubmit",
    type: "submit",
    value: "Select"
  })), /*#__PURE__*/React.createElement("section", {
    id: "payOptionThree"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "optionMonth"
  }, "12"), /*#__PURE__*/React.createElement("h2", {
    className: "optionSub"
  }, "Month Sub"), /*#__PURE__*/React.createElement("h3", {
    className: "optionValue"
  }, "4.99$"), /*#__PURE__*/React.createElement("input", {
    className: "selectSubmit",
    type: "submit",
    value: "Select"
  })), /*#__PURE__*/React.createElement("input", {
    type: "hidden",
    name: "_csrf",
    value: props.csrf
  }));
};

var PayInfoWindow = function PayInfoWindow(props) {
  return /*#__PURE__*/React.createElement("form", {
    id: "payInfoForm",
    name: "payInfoForm",
    onSubmit: handleSignup,
    action: "/info",
    method: "POST",
    className: "infoPageForm"
  }, /*#__PURE__*/React.createElement("h1", null, "Enter Your Payment Information and Create a Username and Password"), /*#__PURE__*/React.createElement("label", {
    htmlFor: "cardNumber"
  }, "Card Number: "), /*#__PURE__*/React.createElement("input", {
    id: "cardNumberInput",
    type: "text",
    name: "cardNumber",
    placeholder: "Number"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
    htmlFor: "holderName"
  }, "Holder Name:"), /*#__PURE__*/React.createElement("input", {
    id: "holderNameInput",
    type: "text",
    name: "holderName",
    placeholder: "Name"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
    htmlFor: "expDate"
  }, "Exp Date:"), /*#__PURE__*/React.createElement("input", {
    id: "expDateInput",
    type: "text",
    name: "expDate",
    placeholder: "Date"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
    htmlFor: "cvv"
  }, "CVV:"), /*#__PURE__*/React.createElement("input", {
    id: "cvvInput",
    type: "text",
    name: "cvv",
    placeholder: "Number"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
    htmlFor: "username"
  }, "Username: "), /*#__PURE__*/React.createElement("input", {
    id: "user",
    type: "text",
    name: "username",
    placeholder: "Username"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
    htmlFor: "pass"
  }, "Password: "), /*#__PURE__*/React.createElement("input", {
    id: "pass",
    type: "password",
    name: "pass",
    placeholder: "Password"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
    htmlFor: "pass2"
  }, "Confirm Password: "), /*#__PURE__*/React.createElement("input", {
    id: "pass2",
    type: "password",
    name: "pass2",
    placeholder: "Retype password"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "hidden",
    name: "_csrf",
    value: props.csrf
  }), /*#__PURE__*/React.createElement("input", {
    className: "infoSubmit",
    type: "submit",
    value: "Sign Up"
  }));
};

var MainPageWindow = function MainPageWindow(csrf) {
  return /*#__PURE__*/React.createElement("form", {
    id: "cardForm",
    name: "cardForm",
    action: "/maker",
    method: "POST",
    className: "mainPageForm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contentWrapper"
  }, /*#__PURE__*/React.createElement("div", {
    id: "containerPars"
  }, /*#__PURE__*/React.createElement("h1", {
    id: "parsTitle"
  }, "Enter The Pars For Each Hole"), /*#__PURE__*/React.createElement("label", {
    htmlFor: "holeOnePar"
  }, "1 Par: "), /*#__PURE__*/React.createElement("input", {
    className: "cardPar",
    type: "text",
    name: "holeOnePar",
    placeholder: "_"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "holeTwoPar"
  }, "2 Par: "), /*#__PURE__*/React.createElement("input", {
    className: "cardPar",
    type: "text",
    name: "holeTwoPar",
    placeholder: "_"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "holeThreePar"
  }, "3 Par: "), /*#__PURE__*/React.createElement("input", {
    className: "cardPar",
    type: "text",
    name: "holeThreePar",
    placeholder: "_"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "holeFourPar"
  }, "4 Par: "), /*#__PURE__*/React.createElement("input", {
    className: "cardPar",
    type: "text",
    name: "holeFourPar",
    placeholder: "_"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "holeFivePar"
  }, "5 Par: "), /*#__PURE__*/React.createElement("input", {
    className: "cardPar",
    type: "text",
    name: "holeFivePar",
    placeholder: "_"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "holeSixPar"
  }, "6 Par: "), /*#__PURE__*/React.createElement("input", {
    className: "cardPar",
    type: "text",
    name: "holeSixPar",
    placeholder: "_"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "holeSevenPar"
  }, "7 Par: "), /*#__PURE__*/React.createElement("input", {
    className: "cardPar",
    type: "text",
    name: "holeSevenPar",
    placeholder: "_"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "holeEightPar"
  }, "8 Par: "), /*#__PURE__*/React.createElement("input", {
    className: "cardPar",
    type: "text",
    name: "holeEightPar",
    placeholder: "_"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "holeNinePar"
  }, "9 Par: "), /*#__PURE__*/React.createElement("input", {
    className: "cardPar",
    type: "text",
    name: "holeNinePar",
    placeholder: "_"
  })), /*#__PURE__*/React.createElement("div", {
    id: "containerShots"
  }, /*#__PURE__*/React.createElement("h1", {
    id: "scoreTitle"
  }, "Enter Your Score For Each Hole"), /*#__PURE__*/React.createElement("label", {
    htmlFor: "holeOneScore"
  }, "1 Score: "), /*#__PURE__*/React.createElement("input", {
    className: "cardScore",
    type: "text",
    name: "holeOneScore",
    placeholder: "_"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "holeTwoScore"
  }, "2 Score: "), /*#__PURE__*/React.createElement("input", {
    className: "cardScore",
    type: "text",
    name: "holeTwoScore",
    placeholder: "_"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "holeThreeScore"
  }, "3 Score: "), /*#__PURE__*/React.createElement("input", {
    className: "cardScore",
    type: "text",
    name: "holeThreeScore",
    placeholder: "_"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "holeFourScore"
  }, "4 Score: "), /*#__PURE__*/React.createElement("input", {
    className: "cardScore",
    type: "text",
    name: "holeFourScore",
    placeholder: "_"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "holeFiveScore"
  }, "5 Score: "), /*#__PURE__*/React.createElement("input", {
    className: "cardScore",
    type: "text",
    name: "holeFiveScore",
    placeholder: "_"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "holeSixScore"
  }, "6 Score: "), /*#__PURE__*/React.createElement("input", {
    className: "cardScore",
    type: "text",
    name: "holeSixScore",
    placeholder: "_"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "holeSevenScore"
  }, "7 Score: "), /*#__PURE__*/React.createElement("input", {
    className: "cardScore",
    type: "text",
    name: "holeSevenScore",
    placeholder: "_"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "holeEightScore"
  }, "8 Score: "), /*#__PURE__*/React.createElement("input", {
    className: "cardScore",
    type: "text",
    name: "holeEightScore",
    placeholder: "_"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "holeNineScore"
  }, "9 Score: "), /*#__PURE__*/React.createElement("input", {
    className: "cardScore",
    type: "text",
    name: "holeNineScore",
    placeholder: "_"
  })), /*#__PURE__*/React.createElement("section", {
    id: "scoreCard"
  }, /*#__PURE__*/React.createElement("div", {
    className: "scoreCardWrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "holeName"
  }, /*#__PURE__*/React.createElement("p", null, "Hole")), /*#__PURE__*/React.createElement("div", {
    className: "hole1"
  }, /*#__PURE__*/React.createElement("p", null, "1")), /*#__PURE__*/React.createElement("div", {
    className: "hole2"
  }, /*#__PURE__*/React.createElement("p", null, "2")), /*#__PURE__*/React.createElement("div", {
    className: "hole3"
  }, /*#__PURE__*/React.createElement("p", null, "3")), /*#__PURE__*/React.createElement("div", {
    className: "hole4"
  }, /*#__PURE__*/React.createElement("p", null, "4")), /*#__PURE__*/React.createElement("div", {
    className: "hole5"
  }, /*#__PURE__*/React.createElement("p", null, "5")), /*#__PURE__*/React.createElement("div", {
    className: "hole6"
  }, /*#__PURE__*/React.createElement("p", null, "6")), /*#__PURE__*/React.createElement("div", {
    className: "hole7"
  }, /*#__PURE__*/React.createElement("p", null, "7")), /*#__PURE__*/React.createElement("div", {
    className: "hole8"
  }, /*#__PURE__*/React.createElement("p", null, "8")), /*#__PURE__*/React.createElement("div", {
    className: "hole9"
  }, /*#__PURE__*/React.createElement("p", null, "9")), /*#__PURE__*/React.createElement("div", {
    className: "parName"
  }, /*#__PURE__*/React.createElement("p", null, "Par")), /*#__PURE__*/React.createElement("div", {
    className: "par1"
  }, /*#__PURE__*/React.createElement("p", null)), /*#__PURE__*/React.createElement("div", {
    className: "par2"
  }, /*#__PURE__*/React.createElement("p", null)), /*#__PURE__*/React.createElement("div", {
    className: "par3"
  }, /*#__PURE__*/React.createElement("p", null)), /*#__PURE__*/React.createElement("div", {
    className: "par4"
  }, /*#__PURE__*/React.createElement("p", null)), /*#__PURE__*/React.createElement("div", {
    className: "par5"
  }, /*#__PURE__*/React.createElement("p", null)), /*#__PURE__*/React.createElement("div", {
    className: "par6"
  }, /*#__PURE__*/React.createElement("p", null)), /*#__PURE__*/React.createElement("div", {
    className: "par7"
  }, /*#__PURE__*/React.createElement("p", null)), /*#__PURE__*/React.createElement("div", {
    className: "par8"
  }, /*#__PURE__*/React.createElement("p", null)), /*#__PURE__*/React.createElement("div", {
    className: "par9"
  }, /*#__PURE__*/React.createElement("p", null)), /*#__PURE__*/React.createElement("div", {
    className: "scoreName"
  }, /*#__PURE__*/React.createElement("p", null, "Score")), /*#__PURE__*/React.createElement("div", {
    className: "score1"
  }, /*#__PURE__*/React.createElement("p", null)), /*#__PURE__*/React.createElement("div", {
    className: "score2"
  }, /*#__PURE__*/React.createElement("p", null)), /*#__PURE__*/React.createElement("div", {
    className: "score3"
  }, /*#__PURE__*/React.createElement("p", null)), /*#__PURE__*/React.createElement("div", {
    className: "score4"
  }, /*#__PURE__*/React.createElement("p", null)), /*#__PURE__*/React.createElement("div", {
    className: "score5"
  }, /*#__PURE__*/React.createElement("p", null)), /*#__PURE__*/React.createElement("div", {
    className: "score6"
  }, /*#__PURE__*/React.createElement("p", null)), /*#__PURE__*/React.createElement("div", {
    className: "score7"
  }, /*#__PURE__*/React.createElement("p", null)), /*#__PURE__*/React.createElement("div", {
    className: "score8"
  }, /*#__PURE__*/React.createElement("p", null)), /*#__PURE__*/React.createElement("div", {
    className: "score9"
  }, /*#__PURE__*/React.createElement("p", null))), /*#__PURE__*/React.createElement("input", {
    className: "cardSubmit",
    type: "submit",
    value: "Create Card"
  })), /*#__PURE__*/React.createElement("div", {
    className: "cardList"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "noCards"
  }, "You Have No Cards Yet"))));
};

var createLoginWindow = function createLoginWindow(csrf) {
  ReactDOM.render( /*#__PURE__*/React.createElement(LoginWindow, {
    csrf: csrf
  }), document.querySelector("#content"));
}; //New Option Page


var createOptionWindow = function createOptionWindow(csrf) {
  ReactDOM.render( /*#__PURE__*/React.createElement(OptionWindow, {
    csrf: csrf
  }), document.querySelector("#content"));
}; //New PayInfo Page


var createPayInfoWindow = function createPayInfoWindow(csrf) {
  ReactDOM.render( /*#__PURE__*/React.createElement(PayInfoWindow, {
    csrf: csrf
  }), document.querySelector("#content"));
}; //New Example Main Page


var createMainPageWindow = function createMainPageWindow(csrf) {
  ReactDOM.render( /*#__PURE__*/React.createElement(MainPageWindow, {
    csrf: csrf
  }), document.querySelector("#content"));
};

var setup = function setup(csrf) {
  var loginButton = document.querySelector("#loginbutton"); // const signupButton = document.querySelector("#signupButton");
  //New Option Page

  var optionButton = document.querySelector("#payOption"); //New PayInfo Page

  var infoButton = document.querySelector("#payInfo"); //New Example Main Page

  var mainButton = document.querySelector("#mainExample");
  loginButton.addEventListener("click", function (e) {
    e.preventDefault();
    createLoginWindow(csrf);
    return false;
  }); //New Option Page

  optionButton.addEventListener("click", function (e) {
    e.preventDefault();
    createOptionWindow(csrf);
    return false;
  }); //New Pay Info Page

  infoButton.addEventListener("click", function (e) {
    e.preventDefault();
    createPayInfoWindow(csrf);
    return false;
  }); //New Example Main Page

  mainButton.addEventListener("click", function (e) {
    e.preventDefault();
    createMainPageWindow(csrf);
    return false;
  });
  createLoginWindow(csrf);
};

var getToken = function getToken() {
  sendAjax('GET', '/getToken', null, function (result) {
    setup(result.csrfToken);
  });
};

$(document).ready(function () {
  getToken();
});
"use strict";

var handleError = function handleError(message) {
  $("#errorMessage").text(message);
  $("#otherMessage").animate({
    width: 'toggle'
  }, 350);
};

var redirect = function redirect(response) {
  $("#otherMessage").animate({
    width: 'hide'
  }, 350);
  window.location = response.redirect;
};

var sendAjax = function sendAjax(type, action, data, success) {
  $.ajax({
    cache: false,
    type: type,
    url: action,
    data: data,
    dataType: "json",
    success: success,
    error: function error(xhr, status, _error) {
      var messageObj = JSON.parse(xhr.responseText);
      handleError(messageObj.error);
    }
  });
};
