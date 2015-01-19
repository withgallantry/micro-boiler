var _ = require('underscore');
var baseAdapter = require('./base.js');

module.exports = function() {

    return _.extend({}, baseAdapter, {dataPath: '/hello/world/'}, {
        constructResponse: function (data) {

            var example = JSON.parse(data);

            this.callback(example);

        }
    });

};