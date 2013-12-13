function route(pathName, handle, res, req) {
	if(typeof handle[pathName] === 'function'){
		handle[pathName](res, req);
	}
	else{
		console.log("No route found for "+pathName);
		res.writeHead(404, {"Content-Type":"text/plain"});
		res.write("404 Not Found");
		res.end();
	}
}

exports.route = route;