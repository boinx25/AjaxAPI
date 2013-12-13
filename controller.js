var url = require("url");

function index(res, req) {
	res.writeHead(200, {"Content-Type": "text/plain"});
	res.write("Index page");
	res.end();
}

function data(res, req) {
	var result = "";

	var parsedUrl = url.parse(req.url, true) // true to get query as object
  	, queryAsObject = parsedUrl.query;
  	// , isAjax = req.xhr;

  if(queryAsObject.page && queryAsObject.page != "" && queryAsObject.page != "0"){
  	var temp = [];

  	for(i=1;i<=10;i++){
  		var id = ((queryAsObject.page-1) * 10) + i
  		temp.push({"id":id , "item":("List Item - " + id), "icon":((queryAsObject.page%2==0) ? "cross-green.png":"cross-on.png") });
  	}

  	result = JSON.stringify({"status":"success", "data":temp, "message":""})
  	
  }
  else{
  	result = JSON.stringify({"status":"error", "data":null, "message":"Invalid parameter."})
  	// res.writeHead(412, {"Content-Type": "application/json", "Access-Control-Allow-Origin":"*"});
  }

  res.writeHead(200, {"Content-Type": "application/json", "Access-Control-Allow-Origin":"*"});
  
	res.write(result);
	res.end();
}

exports.index = index;
exports.data = data;