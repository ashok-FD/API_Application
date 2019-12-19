const express = require('express');
const router = express.Router();
const Persons = require('./PersonsSchema');
//Post
router.post("/", async(req, res) => {
    try{
    const postPerson = await new Persons({
        username : req.body.username,
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        dob : req.body.dob
    });
    const savePersons = await postPerson.save();
     res.json(savePersons);
     }
     catch(err){
         res.json({"err":err})
     }
});

//Get
router.get("/", async (req, res) => {
  try {
    const getAll = await Persons.find();
    res.json(getAll);
  } catch (err) {
    res.json({ err: err });
  }
});
module.exports = router;
