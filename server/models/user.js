const mongoose = require('mongoose');

const { Schema } = mongoose;
const TIMESTAMPS = {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
};

module.exports = (connection) => {
  const schema = new Schema({
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    salt: {
      type: String,
      required: true,
    },
  }, TIMESTAMPS);

  return connection.model('User', schema);
};