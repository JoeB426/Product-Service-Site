"use strict";

var handleCard = function handleCard(e) {
  e.preventDefault();
  $("#otherMessage").animate({
    width: 'hide'
  }, 350);

  if ($("#cardPar1").val() == '' || $("#cardPar2").val() == '' || $("#cardPar3").val() == '' || $("#cardPar4").val() == '' || $("#cardPar5").val() == '' || $("#cardPar6").val() == '' || $("#cardPar7").val() == '' || $("#cardPar8").val() == '' || $("#cardPar9").val() == '' || $("#userScore1").val() == '' || $("#userScore2").val() == '' || $("#userScore3").val() == '' || $("#userScore4").val() == '' || $("#userScore5").val() == '' || $("#userScore6").val() == '' || $("#userScore7").val() == '' || $("#userScore8").val() == '' || $("#userScore9").val() == '') {
    handleError("You must add ALL of your pars and scores!");
    return false;
  }

  sendAjax('POST', $("cardForm").attr("action"), $("cardForm").serialize(), function () {
    loadCardsFromServer();
  });
  return false;
};

var CardForm = function CardForm(props) {
  return /*#__PURE__*/React.createElement("form", {
    id: "cardForm",
    name: "cardForm",
    onSubmit: handleCard,
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
    id: "cardPar1",
    type: "text",
    name: "holeOnePar",
    placeholder: "_"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "holeTwoPar"
  }, "2 Par: "), /*#__PURE__*/React.createElement("input", {
    className: "cardPar",
    id: "cardPar2",
    type: "text",
    name: "holeTwoPar",
    placeholder: "_"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "holeThreePar"
  }, "3 Par: "), /*#__PURE__*/React.createElement("input", {
    className: "cardPar",
    id: "cardPar3",
    type: "text",
    name: "holeThreePar",
    placeholder: "_"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "holeFourPar"
  }, "4 Par: "), /*#__PURE__*/React.createElement("input", {
    className: "cardPar",
    id: "cardPar4",
    type: "text",
    name: "holeFourPar",
    placeholder: "_"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "holeFivePar"
  }, "5 Par: "), /*#__PURE__*/React.createElement("input", {
    className: "cardPar",
    id: "cardPar5",
    type: "text",
    name: "holeFivePar",
    placeholder: "_"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "holeSixPar"
  }, "6 Par: "), /*#__PURE__*/React.createElement("input", {
    className: "cardPar",
    id: "cardPar6",
    type: "text",
    name: "holeSixPar",
    placeholder: "_"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "holeSevenPar"
  }, "7 Par: "), /*#__PURE__*/React.createElement("input", {
    className: "cardPar",
    id: "cardPar7",
    type: "text",
    name: "holeSevenPar",
    placeholder: "_"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "holeEightPar"
  }, "8 Par: "), /*#__PURE__*/React.createElement("input", {
    className: "cardPar",
    id: "cardPar8",
    type: "text",
    name: "holeEightPar",
    placeholder: "_"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "holeNinePar"
  }, "9 Par: "), /*#__PURE__*/React.createElement("input", {
    className: "cardPar",
    id: "cardPar9",
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
    id: "userScore1",
    type: "text",
    name: "holeOneScore",
    placeholder: "_"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "holeTwoScore"
  }, "2 Score: "), /*#__PURE__*/React.createElement("input", {
    className: "cardScore",
    id: "userScore2",
    type: "text",
    name: "holeTwoScore",
    placeholder: "_"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "holeThreeScore"
  }, "3 Score: "), /*#__PURE__*/React.createElement("input", {
    className: "cardScore",
    id: "userScore3",
    type: "text",
    name: "holeThreeScore",
    placeholder: "_"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "holeFourScore"
  }, "4 Score: "), /*#__PURE__*/React.createElement("input", {
    className: "cardScore",
    id: "userScore4",
    type: "text",
    name: "holeFourScore",
    placeholder: "_"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "holeFiveScore"
  }, "5 Score: "), /*#__PURE__*/React.createElement("input", {
    className: "cardScore",
    id: "userScore5",
    type: "text",
    name: "holeFiveScore",
    placeholder: "_"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "holeSixScore"
  }, "6 Score: "), /*#__PURE__*/React.createElement("input", {
    className: "cardScore",
    id: "userScore6",
    type: "text",
    name: "holeSixScore",
    placeholder: "_"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "holeSevenScore"
  }, "7 Score: "), /*#__PURE__*/React.createElement("input", {
    className: "cardScore",
    id: "userScore7",
    type: "text",
    name: "holeSevenScore",
    placeholder: "_"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "holeEightScore"
  }, "8 Score: "), /*#__PURE__*/React.createElement("input", {
    className: "cardScore",
    id: "userScore8",
    type: "text",
    name: "holeEightScore",
    placeholder: "_"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "holeNineScore"
  }, "9 Score: "), /*#__PURE__*/React.createElement("input", {
    className: "cardScore",
    id: "userScore9",
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
    type: "hidden",
    name: "_csrf",
    value: props.csrf
  }), /*#__PURE__*/React.createElement("input", {
    className: "cardSubmit",
    type: "submit",
    value: "Create Card"
  }))));
};

var CardList = function CardList(props) {
  if (props.cards.length === 0) {
    return /*#__PURE__*/React.createElement("div", {
      className: "cardList"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "noCards"
    }, "You Have No Cards Yet"));
  }

  ;
  var userCards = props.cards.map(function (card) {
    return /*#__PURE__*/React.createElement("div", {
      key: card._id,
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
    }, /*#__PURE__*/React.createElement("p", null, card.cardPar1)), /*#__PURE__*/React.createElement("div", {
      className: "par2"
    }, /*#__PURE__*/React.createElement("p", null, card.cardPar2)), /*#__PURE__*/React.createElement("div", {
      className: "par3"
    }, /*#__PURE__*/React.createElement("p", null, card.cardPar3)), /*#__PURE__*/React.createElement("div", {
      className: "par4"
    }, /*#__PURE__*/React.createElement("p", null, card.cardPar4)), /*#__PURE__*/React.createElement("div", {
      className: "par5"
    }, /*#__PURE__*/React.createElement("p", null, card.cardPar5)), /*#__PURE__*/React.createElement("div", {
      className: "par6"
    }, /*#__PURE__*/React.createElement("p", null, card.cardPar6)), /*#__PURE__*/React.createElement("div", {
      className: "par7"
    }, /*#__PURE__*/React.createElement("p", null, card.cardPar7)), /*#__PURE__*/React.createElement("div", {
      className: "par8"
    }, /*#__PURE__*/React.createElement("p", null, card.cardPar8)), /*#__PURE__*/React.createElement("div", {
      className: "par9"
    }, /*#__PURE__*/React.createElement("p", null, card.cardPar9)), /*#__PURE__*/React.createElement("div", {
      className: "scoreName"
    }, /*#__PURE__*/React.createElement("p", null, "Score")), /*#__PURE__*/React.createElement("div", {
      className: "score1"
    }, /*#__PURE__*/React.createElement("p", null, card.userScore1)), /*#__PURE__*/React.createElement("div", {
      className: "score2"
    }, /*#__PURE__*/React.createElement("p", null, card.userScore2)), /*#__PURE__*/React.createElement("div", {
      className: "score3"
    }, /*#__PURE__*/React.createElement("p", null, card.userScore3)), /*#__PURE__*/React.createElement("div", {
      className: "score4"
    }, /*#__PURE__*/React.createElement("p", null, card.userScore4)), /*#__PURE__*/React.createElement("div", {
      className: "score5"
    }, /*#__PURE__*/React.createElement("p", null, card.userScore5)), /*#__PURE__*/React.createElement("div", {
      className: "score6"
    }, /*#__PURE__*/React.createElement("p", null, card.userScore6)), /*#__PURE__*/React.createElement("div", {
      className: "score7"
    }, /*#__PURE__*/React.createElement("p", null, card.userScore7)), /*#__PURE__*/React.createElement("div", {
      className: "score8"
    }, /*#__PURE__*/React.createElement("p", null, card.userScore8)), /*#__PURE__*/React.createElement("div", {
      className: "score9"
    }, /*#__PURE__*/React.createElement("p", null, card.userScore9)));
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "cardList"
  }, userCards);
};

var loadCardsFromServer = function loadCardsFromServer() {
  sendAjax('GET', '/getCards', null, function (data) {
    ReactDOM.render( /*#__PURE__*/React.createElement(CardList, null), document.querySelector(""));
  });
};

var setup = function setup(csrf) {
  ReactDOM.render( /*#__PURE__*/React.createElement(CardForm, {
    csrf: csrf
  }), document.querySelector("#makeCard"));
  ReactDOM.render( /*#__PURE__*/React.createElement(CardList, {
    cards: []
  }), document.querySelector("#cards"));
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
