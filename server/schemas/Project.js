const Joi = require(`Joi`);

const schema = {

  name: {
    type: String,
    required: true,
    validation: Joi.string().min(2).max(25)
  },

  deadline: {
    type: Date,
    required: true,
    validation: Joi.date()
  },

  consultday: {
    type: String,
    required: true,
    validation: Joi.string()
  },

  note: {
    type: String,
    required: false,
    validation: Joi.string().min(3)
  }

};

module.exports = {
  schema
};
