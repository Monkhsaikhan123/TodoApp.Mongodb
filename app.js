const express = require("express");
const mongoose = require("mongoose");
const path = require('path')

const app = express();

// conenction to mongodb
mongoose.connect("mongodb+srv://munkh:munkh123@cluster0.n2wxvcz.mongodb.net/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "views");

// app.set("views", path.join(__dirname, "views"));


/* const indexRouter = require('./routes/index');

app.use(indexRouter);
const todoRouter = require('./routes/todo');

app.use(todoRouter); */
// routesW
app.use(require("./routes/index"))
app.use(require("./routes/todo"))
app.use(require("./routes/edit"))


// server configurations....
app.listen(4000, () => console.log("Server started listening on port: 4000"));