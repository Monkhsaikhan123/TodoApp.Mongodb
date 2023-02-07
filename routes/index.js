const router = require("express").Router()
const Todo = require("../models/dog");
const Dog = require("../models/dog");


// routes will be here....
router.get("/", async(req, res) => {
    const allTodo = await Todo.find();
    console.log("all data-->", allTodo)
    res.render("index", {todo: allTodo}, /* console.log({todo: allTodo}) */)
})

router.post("/add/todo", (req, res) => {
    const { todo } = req.body;
    const data = new Dog({ todo },console.log(Dog));  //{todo} ni minii inputiin utgaa NewTodo ru hiisen

    // save the todo
    data.save().then(() => {
        console.log("shine data-->",data)
        console.log("Successfully added todo!");
        res.redirect("/");
      })
      .catch((err) => console.log(err));
})

router.get("/delete/todo/:_id", (req, res) => {
    const { _id } = req.params;
    Dog.deleteOne({ _id })
      .then(() => {
        console.log("Deleted Todo Successfully!");
        res.redirect("/");
      })
      .catch((err) => console.log(err));
  });


  router.post("/edit/todo/:id", async (req, res) => {
    const id = req.params.id;
    const newTodo = req.body.todo;

    try {
        await Todo.updateOne({ _id: id }, { todo: newTodo });
        console.log("Todo updated successfully!");
        res.redirect("/");
    } catch (err) {
        console.log(err);
    }
});


/* router.get("/edit/todo/:id", async (req, res) =>{
    const id = req.params.id
    console.log("id harag--->",req.params )
    const allTodo = await Todo.findOne(
        { _id: id }
    );
    console.log("data--->", allTodo.todo) */
/*     //  res.render('edit', { todo: allTodo.todo });
    //  res.render("edit",{allTodo});
    //  res.render('edit', { data: allTodo }); */

/* }) */

module.exports = router;