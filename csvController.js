const fs = require('fs');
const config = JSON.parse(fs.readFileSync('config.json'));

exports.getCsvData = function(csvName){
  return "CSV";
}
