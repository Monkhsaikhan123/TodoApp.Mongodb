const Dog = require("../models/dog");
const router = require("express").Router()

router.post("/edit/todo/:_id", (req, res) => {
    const { _id } = req.params;
    const updateData = { $set: { status: "active" } };

    Dog.updateOne({ _id }, updateData, function(err, res) {
        if (err) {
            console.log(err);
            res.send("Error updating the document");
        } else {
            console.log("Document updated successfully");
            res.redirect("/");
        }
    });
});

module.exports = router;