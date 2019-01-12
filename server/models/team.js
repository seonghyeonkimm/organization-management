const mongoose = require('mongoose');
const { TIMESTAMPS } = require('../constants/models');

const { Schema } = mongoose;
const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
}, TIMESTAMPS);

module.exports = {
  schema,
  createModel: connection => connection.model('Team', schema),
};