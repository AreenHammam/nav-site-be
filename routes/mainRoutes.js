/**
 * Created by wael on 01/01/2017.
 */
var express = require('express');
var UserToken = require('../models/userToken');
var User = require('../models/schemaModels/user');
var Summary = require('../models/schemaModels/summary');
var SHA256 = require('../utils/sha256');
var routes = function () {
        var mainRouter = express.Router();

        mainRouter.route('/api/summary/:placeid')
            .get(function (req, res) {
                // var id =req.params._id;
                Summary.find(req.params, function (err, result) {
                    if (err) {
                        console.log(err);
                        res.status(500).send();
                    }
                    else {
                        console.log(result);
                        res.status(200).send({"data":result});
                    }

                })
            })
            .post(function (req, res) {

                var s = new Summary(req.body);
                s.save(function (err, result) {
                    if (err) {
                        console.log(err);
                        res.status(500).send(err);
                    }
                    else {
                        res.status(201).send(result);
                    }

                })
            })
            .delete(function(req,res) {
                // var query = {"category": req.params.name};
                Summary.remove(req.params, function (err, result) {
                    if (err) {
                        res.status(500).send(err);
                    }
                    else {
                        res.status(200).send(result);
                    }

                })
            })

        return mainRouter;
    }
    ;
module.exports = routes;