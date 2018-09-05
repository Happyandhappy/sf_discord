const fs = require('fs');
const csv = require('fast-csv');
const config = require('./config.json');
function read(fileName){
  	var dt = [];
  	return new Promise((resolve, reject) => {
    		fs.createReadStream(fileName)
    		.pipe(csv())
    		.on('data', function(data){
  			   dt.push(data);
    		})
    		.on('end', function(){
      			resolve(dt);
    		});
  	});
}

function write(fileName, data){
    var ws = fs.createWriteStream(fileName);
    csv.write(data)
    .pipe(ws);
}

exports.getCsvData = function(msg){
   return new Promise((res, rej)=>{
      var data = read(config.CsvFile).then((re)=>{
          for (var i = 0 ; i < re.length ; i++){
              if (msg.content.toLowerCase() === re[i][0] && msg.channel.id === re[i][3]){
                  res(re[i][1]);
                  if (re[i].length < 5)
                    re[i].push("posted");
              }
          }
          write(config.CsvFile, re);
          return "";
      })
   });
}
