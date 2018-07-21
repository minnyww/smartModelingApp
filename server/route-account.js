const express = require("express");
var router = express.Router();

var knex = require("./knex");

router.get("/listAccount", async (req, res) => {
  var data = await knex.table("UserProfile").select();
  console.log();
  res.send(data);
});

router.post("/signin", async (req, res) => {
  var data = await knex.table("UserProfile")
                .select()
                .where({
                    email: req.body.email,
                    password:  req.body.password
                });
  if(data.length >0){
     res.send({ status: true, message: data });
  }else{
     res.send({ status: false, message: 'User not found, please try again' });
  }
});

module.exports = router;
