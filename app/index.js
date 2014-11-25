var config = require('./config/parameters');

var phantomjs = require('phantomjs');
var phantom=require('node-phantom');

phantom.create(function(err,ph) {
  console.log("Phantom Created");
  return ph.createPage(function(err,page) {
  	console.log("Page Created");
    return page.open(config.path, function(err,status) {
      console.log("opened site? ", status);
      	return page.evaluate(function() {
            return mapsfromcache;
          }, function(err,result) {
            console.log(result);
            page.close();
            ph.exit();
          });
    });
  });
},{
	"phantomPath": phantomjs.path,
	"parameters": {
		"ignore-ssl-errors":"true",
		"load-images":"false",
		"ssl-protocol":"any",
	}
});

