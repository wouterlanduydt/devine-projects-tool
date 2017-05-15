const Joi = require(`Joi`);

const schema = {

  name: {
    type: String,
    required: true,
    validation: Joi.string()
  },

  deadline: {
    type: String,
    required: true,
    validation: Joi.string()
  },

  consultday: {
    type: String,
    required: true,
    validation: Joi.string()
  },

  note: {
    type: String,
    required: true,
    validation: Joi.string()
  }

};

module.exports = {
  schema
};
