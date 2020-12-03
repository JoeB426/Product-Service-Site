const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let CardModel = {};

const convertId = mongoose.Types.ObjectId;

const CardSchema = new mongoose.Schema({
  // attributes for the user input pars
  cardPar1: {
    type: String,
    required: true,
  },

  cardPar2: {
    type: String,
    required: true,
  },

  cardPar3: {
    type: String,
    required: true,
  },

  cardPar4: {
    type: String,
    required: true,
  },

  cardPar5: {
    type: String,
    required: true,
  },

  cardPar6: {
    type: String,
    required: true,
  },

  cardPar7: {
    type: String,
    required: true,
  },

  cardPar8: {
    type: String,
    required: true,
  },

  cardPar9: {
    type: String,
    required: true,
  },

  // attributes for the user input scores
  userScore1: {
    type: String,
    required: true,
  },

  userScore2: {
    type: String,
    required: true,
  },

  userScore3: {
    type: String,
    required: true,
  },

  userScore4: {
    type: String,
    required: true,
  },

  userScore5: {
    type: String,
    required: true,
  },

  userScore6: {
    type: String,
    required: true,
  },

  userScore7: {
    type: String,
    required: true,
  },

  userScore8: {
    type: String,
    required: true,
  },

  userScore9: {
    type: String,
    required: true,
  },

  owner: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: 'Account',
  },

  createdData: {
    type: Date,
    default: Date.now,
  },
});

CardSchema.statics.toAPI = (doc) => ({
  cardPar1: doc.cardPar1,
  cardPar2: doc.cardPar2,
  cardPar3: doc.cardPar3,
  cardPar4: doc.cardPar4,
  cardPar5: doc.cardPar5,
  cardPar6: doc.cardPar6,
  cardPar7: doc.cardPar7,
  cardPar8: doc.cardPar8,
  cardPar9: doc.cardPar9,

  userScore1: doc.userScore1,
  userScore2: doc.userScore2,
  userScore3: doc.userScore3,
  userScore4: doc.userScore4,
  userScore5: doc.userScore5,
  userScore6: doc.userScore6,
  userScore7: doc.userScore7,
  userScore8: doc.userScore8,
  userScore9: doc.userScore9,
});

CardSchema.statics.findByOwner = (ownerId, callback) => {
  const search = {
    owner: convertId(ownerId),
  };

  return CardModel.find(search).select('cardPar1 cardPar2 cardPar3'
  + 'cardPar4 cardPar5 cardPar6 cardPar7 cardPar8 cardPar9'
  + 'userScore1 userScore2 userScore3 userScore4 userScore5'
  + 'userScore6 userScore7 userScore8 userScore9').lean().exec(callback);
};

CardModel = mongoose.model('Card', CardSchema);

module.exports.CardModel = CardModel;
module.exports.CardSchema = CardSchema;
