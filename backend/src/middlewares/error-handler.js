module.exports = (err, req, res, next) => {
  if (err) {
    if(err.isJoi) return res.status(400).send({err});
    
    return res.status(err.status || 500).send({err});
  }
  return next();
};