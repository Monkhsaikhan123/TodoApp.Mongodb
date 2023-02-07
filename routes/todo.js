const router = require("express").Router();
const Dog = require("../models/dog");

// routes
router
//   .post("/add/todo", (req, res) => {
//     const { todo } = req.body;
//     const data = new Dog({ todo },console.log(Dog));  //{todo} ni minii inputiin utgaa NewTodo ru hiisen

//     // save the todo
//     data.save().then(() => {
//         console.log("shine data-->",data)
//         console.log("Successfully added todo!");
//         res.redirect("/");
//       })
//       .catch((err) => console.log(err));
//   })

  .get("/delete/todo/:_id", (req, res) => {
    const { _id } = req.params;
    Dog.deleteOne({ _id })
      .then(() => {
        console.log("Deleted Todo Successfully!");
        res.redirect("/");
      })
      .catch((err) => console.log(err));
  });



    

module.exports = router;