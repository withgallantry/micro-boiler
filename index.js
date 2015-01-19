var restify = require("restify");
var util = require('util');

function NotImplementedError(unimplementedFunctionDescription) {
    restify.RestError.call(this, {
        restCode: "NotImplementedError",
        statusCode: "501",
        message: "Function " + unimplementedFunctionDescription + " is not implemented...",
        constructorOpt: NotImplementedError
    });
    this.name = "NotImplementedError";
}

util.inherits(NotImplementedError, restify.RestError);


GLOBAL.server = restify.createServer();
server.use(restify.bodyParser());
require('./apis/apis.js')();

server.name = "";

GLOBAL.genesisHost = "https://wakelet.com";

function respondNotSupported(request, response, next) {
    return next(new NotImplementedError("not supported"));
}


server.get({name: "example/unsupported", path: "/example/unsupported"}, respondNotSupported);


server.listen(process.env.PORT || 5000, function () {
    console.log("%s listening at %s", server.name, server.url);
});
