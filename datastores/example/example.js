var mongoose = require('mongoose');
mongoose.connect('mongodb://example');

var exampleSubSchema = new mongoose.Schema({examples : { hello : String , world : String } , id: Number});

var example = mongoose.model('List',
    new mongoose.Schema({exampleOne: String, exampleTwo: String, exampleSubArray : [exampleSubSchema], id: Number}),
    'lists');

module.exports = {

    example : example,
    exampleSubSchema : exampleSubSchema,

    create: function (paramOne, paramTwo, callback) {

        new example({exampleOne: paramOne, exampleTwo: paramTwo})
            .save(function (err, doc) {
                if (err) // ...
                    console.log(err);
                else {
                    callback(doc);
                }
            });

    },

    get: function (params, callback) {
            example.find({'_id': params._id}, 'exampleOne exampleTwo _id', function (err, docs) {
                // docs is an array
                callback(docs);
            })

    }

};