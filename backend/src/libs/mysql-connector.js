const mysql = require('mysql'),
      pool = mysql.createPool({
        connectionLimit : 10,
        host: process.env.DBhost,
        user: process.env.DBuser,
        password: process.env.DBpassword,
        database: process.env.DBname,
      });

const DB = (function () {

  function _query(query, params, callback) {
    pool.getConnection(function (err, connection) {
      if (err) {
        callback(err);
        return
      }

      connection.query(query, params, function (err, rows) {
        connection.release();
        callback(err, rows);
      });

      connection.on('error', function (err) {
        connection && connection.release();
        callback(err);
      });
      
    });

  }
  return {
    query: _query
  }

})();

module.exports = DB;