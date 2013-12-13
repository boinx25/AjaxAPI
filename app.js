var server = require("./server")
	, router = require("./router")
	, controller = require("./controller")
	, handle = {};

handle["/"] = controller.index;
handle["/data"] = controller.data;

server.start(router.route, handle);
