const models = require('../models');

const { Card } = models;

const makerPage = (req, res) => {
  Card.CardModel.findByOwner(req.session.account._id, (err, docs) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: 'An error occurred' });
    }

    return res.render('app', { csrfToken: req.csrfToken(), cards: docs });
  });
};

const makeCard = (req, res) => {
  if (!req.body.cardPar1 || !req.body.cardPar2 || !req.body.cardPar3 || !req.body.cardPar4
    || !req.body.cardPar5 || !req.body.cardPar6 || !req.body.cardPar7 || !req.body.cardPar8
    || !req.body.cardPar9 || !req.body.userScore1 || !req.body.userScore2 || !req.body.userScore3
    || !req.body.userScore4 || !req.body.userScore5 || !req.body.userScore6 || !req.body.userScore7
    || !req.body.userScore8 || !req.body.userScore9) {
    return res.status(400).json({ error: 'Your set pars and your score per hole are all required!' });
  }

  const cardData = {
    cardPar1: req.body.cardPar1,
    cardPar2: req.body.cardPar2,
    cardPar3: req.body.cardPar3,
    cardPar4: req.body.cardPar4,
    cardPar5: req.body.cardPar5,
    cardPar6: req.body.cardPar6,
    cardPar7: req.body.cardPar7,
    cardPar8: req.body.cardPar8,
    cardPar9: req.body.cardPar9,

    userScore1: req.body.userScore1,
    userScore2: req.body.userScore2,
    userScore3: req.body.userScore3,
    userScore4: req.body.userScore4,
    userScore5: req.body.userScore5,
    userScore6: req.body.userScore6,
    userScore7: req.body.userScore7,
    userScore8: req.body.userScore8,
    userScore9: req.body.userScore9,

    owner: req.session.account._id,
  };

  const newCard = new Card.CardModel(cardData);

  const cardPromise = newCard.save();

  cardPromise.then(() => res.json({ redirect: '/maker' }));

  cardPromise.catch((err) => {
    console.log(err);
    if (err.code === 11000) {
      return res.status(400).json({ error: 'You have played this course already and created a card!' });
    }

    return res.status(400).json({ error: 'An error occurred' });
  });

  return cardPromise;
};

const getCards = (request, response) => {
  const req = request;
  const res = response;

  return Card.CardModel.findByOwner(req.session.account._id, (err, docs) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: 'An error occurred' });
    }

    return res.json({ cards: docs });
  });
};

module.exports.makerPage = makerPage;
module.exports.getCards = getCards;
module.exports.make = makeCard;
