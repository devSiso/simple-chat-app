const joi = require('joi');

function validationMiddlewareFactory(property, schema) {
  return (req, res, next) => {
    console.log('REQ: ', req[property], next);

    joi.validate(req[property], schema, next);
  }
}

module.exports = validationMiddlewareFactory;