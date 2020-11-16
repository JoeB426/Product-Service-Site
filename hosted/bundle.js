"use strict";

//For the time being I only have inputs for the user created pars for holes 1-9
//For the end goal I would like to have a better structure of how the user inputs their values into the card
//Also I am going to add par input boxes for holes 10-18 as well has user shot scores for holes 1-18
var cardForm = function cardForm(props) {
  return /*#__PURE__*/React.createElement("form", {
    id: "cardForm" // onSubmit={handleCard}
    ,
    name: "cardForm",
    action: "/maker",
    method: "POST",
    className: "cardForm"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "name"
  }, "Card Name: "), /*#__PURE__*/React.createElement("input", {
    id: "cardName",
    type: "text",
    name: "name",
    placeholder: "Card name"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "holeOnePar"
  }, "Hole 1 Par"), /*#__PURE__*/React.createElement("input", {
    id: "cardParOne",
    type: "text",
    name: "age",
    placeholder: "Hole One Par"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "holeTwoPar"
  }, "Hole 2 Par"), /*#__PURE__*/React.createElement("input", {
    id: "cardParTwo",
    type: "text",
    name: "age",
    placeholder: "Hole Two Par"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "holeThreePar"
  }, "Hole 3 Par"), /*#__PURE__*/React.createElement("input", {
    id: "cardParThree",
    type: "text",
    name: "age",
    placeholder: "Hole Three Par"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "holeFourPar"
  }, "Hole 4 Par"), /*#__PURE__*/React.createElement("input", {
    id: "cardParFour",
    type: "text",
    name: "age",
    placeholder: "Hole Four Par"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "holeFivePar"
  }, "Hole 5 Par"), /*#__PURE__*/React.createElement("input", {
    id: "cardParFive",
    type: "text",
    name: "age",
    placeholder: "Hole Five Par"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "holeSixPar"
  }, "Hole 6 Par"), /*#__PURE__*/React.createElement("input", {
    id: "cardParSix",
    type: "text",
    name: "age",
    placeholder: "Hole Six Par"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "holeSevenPar"
  }, "Hole 7 Par"), /*#__PURE__*/React.createElement("input", {
    id: "cardParSeven",
    type: "text",
    name: "age",
    placeholder: "Hole Seven Par"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "holeEightPar"
  }, "Hole 8 Par"), /*#__PURE__*/React.createElement("input", {
    id: "cardParEight",
    type: "text",
    name: "age",
    placeholder: "Hole Eight Par"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "holeNinePar"
  }, "Hole 9 Par"), /*#__PURE__*/React.createElement("input", {
    id: "cardParNine",
    type: "text",
    name: "age",
    placeholder: "Hole Nine Par"
  }), /*#__PURE__*/React.createElement("input", {
    type: "hidden",
    name: "_csrf",
    value: props.csrf
  }), /*#__PURE__*/React.createElement("input", {
    className: "makeCardSubmit",
    type: "submit",
    value: "Make Card"
  }));
};

var setup = function setup(csrf) {
  ReactDOM.render( /*#__PURE__*/React.createElement(CardForm, {
    csrf: csrf
  }), document.querySelector("#makeCard"));
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
