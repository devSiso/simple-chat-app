const express = require('express');
const router = express.Router();

const validateMiddleware = require('../middlewares/validation');
const authSchema = require('../schemas/auth-login-body');

router.post('/login', validateMiddleware('body', authSchema),
  (req, res, next) => {
    res.send('Ok!');
});

module.exports = router;