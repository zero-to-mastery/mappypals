const fs = require('fs');

function isEmpty (path, callback) {
  fs.readdir(path, function (err, files) {
    if (err === null) {
      callback(null, !!!files.length)
    } else {
      callback(err);
    }
  });
};

isEmpty.sync = function (path) {
  var files = fs.readdirSync(path);
  return !!!files.length;
};

module.exports = isEmpty;
