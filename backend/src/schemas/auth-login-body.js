const joi = require('joi');

const PASSWORD_REGEX = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W+)(?=^.{6,50}$).*$/;

const schema = joi.object().keys({
  username: joi.string().alphanum().min(4).max(12).required(),
  password: joi.string().regex(PASSWORD_REGEX).required(),
}).required();

module.exports = schema;