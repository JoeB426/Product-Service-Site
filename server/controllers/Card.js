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
  if (!req.body.name || !req.body.pars || !req.body.playerScore) {
    return res.status(400).json({ error: 'Your cards name, set pars, and your score per hole are all required!' });
  }

  const cardData = {
    name: req.body.name,
    pars: req.body.pars,
    playerScore: req.body.playerScore,
    owner: req.session.account._id,
  };

  const newCard = new Card.CardModel(cardData);

  const cardPromise = newCard.save();

  cardPromise.then(() => res.json({ redirect: '/maker' }));

  cardPromise.catch((err) => {
    console.log(err);
    if (err.code === 11000) {
      return res.status(400).json({ error: 'This card already exists.' });
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
