var adapter = {

    server: null,
    dataPath: null,
    callback: null,

    get: function (id, callback) {
        var http = require('https');
        var _this = this;

        this.callback = callback;

        var options = {
            host: 'wakelet.com',
            path: this.dataPath + id
        };
        http.request(options, _this.createDataFromResponse.bind(_this)).end();
    }
    ,

    createDataFromResponse: function (response) {
        var str = '';
        var _this = this;

        //another chunk of data has been recieved, so append it to `str`
        response.on('data', function (chunk) {
            str += chunk;
        });

        //the whole response has been recieved, so we just print it out here
        response.on('end', function () {
            _this.constructResponse(str);
        });
    }
    ,

    constructResponse: function (data) {
        this.callback(data);
    }
}

module.exports = adapter;