const joi = require('joi');

const schema = joi.object().keys({
  username: joi.string().alphanum().min(4).max(12).required(),
  password: joi.string().regex(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W+)(?=^.{6,50}$).*$/).required(),
}).required();

module.exports = schema;