var http = require("http")
	, url = require("url");

function start(route, handle) {
	function onRequest(req, res){
		var pathName = url.parse(req.url).pathname;

		route(pathName, handle, res, req);
	}

	console.log("Server started on 8080");
	http.createServer(onRequest).listen(8080);
}

exports.start = start;