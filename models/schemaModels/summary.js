/**
 * Created by wael on 17/01/2017.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var summary = new Schema({

    "placeid": {
        type: String,
        default: ""
    },
    "summary": {
        type: String,
        default: ""
    },
    "date": {
        type: String,
        default: ""
    },
    "references": []

})
module.exports = mongoose.model('summary', summary);

