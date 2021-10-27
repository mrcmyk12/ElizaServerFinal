const express = require("express");
const Animal = require("../models/animal");
const cors = require("./cors");

const animalRouter = express.Router();

animalRouter
	.route("/")
	.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
	.get(cors.cors, (req, res, next) => {
		Animal.find()
			.then((animals) => {
				res.statusCode = 200;
				res.setHeader("Content-Type", "application/json");
				res.json(animals);
			})
			.catch((err) => next(err));
	}
    )
    .post(cors.corsWithOptions, (req,res,next) => {
        Animal.create(req.body)
            .then((animal) => {
                console.log("Animal Created", animal);
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json(animal);
            })
            .catch((err) => next(err));
    })

    animalRouter
        .route("/:_id")
        .options(cors.corsWithOptions, (req,res) => res.sendStatus(200))
        .get(cors.cors, (req,res,next) => {
            Animal.findById(req.params._id)
                .then((animal) => {
                    res.statusCode = 200;
                    res.setHeader("Content-Type", "application/json");
                    res.json(animal);
                })
                .catch((err) => next(err));
        })



module.exports = animalRouter;
