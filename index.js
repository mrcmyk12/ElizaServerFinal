const createError = require("http-errors");
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./config/keys");

mongoose.connect(keys.mongoURI).then(
	() => console.log("Connected to the Eliza Server"),
	(err) => console.log(err)
);

const indexRouter = require("./routes/index");
const animalRouter = require("./routes/animalRouter");
const uploadRouter = require("./routes/uploadRouter");
const inventoryRouter = require("./routes/inventoryRouter");

const app = express();

app.use(express.json());

//view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use("/", indexRouter);
app.use("/animals", animalRouter);
// app.use("/inventory", inventoryRouter);
// app.use("/imageUpload", uploadRouter);

//catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

//error handler
app.use(function (err, req, res, next) {
	//set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	//render the error page
	res.status(err.status || 500);
	res.render("error");
});

const PORT = 5001;

app.listen(PORT);

module.exports = app;
