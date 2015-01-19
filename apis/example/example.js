function respond(request, response, next) {
        
        var world = request.params.world
        response.send("Hello " + world);
  
    return next();

}

module.exports = function() {
    server.get({name: "hello/world", path: "/hello/:world"}, respond);
};

