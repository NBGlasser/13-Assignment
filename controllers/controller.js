var express = require("express");
var sandvich = require("../models/sandvich.js");

var router = express.Router();

router.get("/", function(req, res){
    sandvich.selectAll(function(data){
        var obj = {
            sandviches: data
        };
        console.log(obj)
        res.render("index", obj)
    })
})

router.post("/api/sandviches", function(req, res) {
    sandvich.insertOne([
        "name", "gone"],
        [req.body.name, false
    ], function(result) {
        res.json({ id: result.insertId });
      })
})

router.put("/api/sandviches/:id", function(req, res) {
    var condition = "id = " + req.params.id
    sandvich.updateOne({
        gone: true
    }, condition, function(result) {
        if (result.changedRows == 0) {
          return res.status(404).end()
        } else {
          res.status(200).end()
        }
    })
})

module.exports = router