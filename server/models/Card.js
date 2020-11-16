const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const _ = require('underscore');

let CardModel = {};

const convertId = mongoose.Types.ObjectId;
const setName = (name) => _.escape(name).trim();

const CardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    set: setName,
  },

  pars: {
    type: Number,
    required: true,
  },

  playerScore: {
    type: Number,
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
  name: doc.name,
  pars: doc.pars,
  playerScore: doc.playerScore,
});

CardSchema.statics.findByOwner = (ownerId, callback) => {
  const search = {
    owner: convertId(ownerId),
  };

  return CardModel.find(search).select('name pars playerScore').lean().exec(callback);
};

CardModel = mongoose.model('Card', CardSchema);

module.exports.CardModel = CardModel;
module.exports.CardSchema = CardSchema;
