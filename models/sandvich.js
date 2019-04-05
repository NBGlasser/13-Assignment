var orm = require("../config/orm.js");

var sandvich = {
    selectAll: function(cb) {
        orm.selectAll("sandviches", function(res){
            cb(res)
        })
    },
    insertOne: function(cols, vals, cb){
        orm.insertOne("sandviches", cols, vals, function(res){
            cb(res)
        })
    },
    updateOne: function(vals, condition, cb) {
        orm.updateOne("sandviches", vals, condition, function(res) {
            cb(res)
        })
    }
}

module.exports = sandvich