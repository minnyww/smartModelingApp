const express = require("express");
var router = express.Router();

var knex = require("./knex");

var STATIC_VARIABLE = require("./staticVariable"); // FAIL,SUCCESS

//signup
router.get("/countryList", async (req, res) => {
  var data = await knex.table("Country").select();
  res.send(data);
});

router.post("/validateEmail", async (req, res) => {
  var data = await knex
            .table("UserProfile")
            .select()
            .where({
                email: req.body.email,
            });
  if (data.length > 0) {
      //duplicate
    res.send({ status: STATIC_VARIABLE.FAIL, message: "The email address you have entered is already registered." });
  } else {
      //success
    res.send({ status: STATIC_VARIABLE.SUCCESS, message: "" });
  }
});

router.post("/signup", async (req, res) => {
  console.log(req.body)
  var data = await knex.table("UserProfile")
            .returning('fullname')
            .insert({
               email : req.body.email,
               password: req.body.password,
               personalId: req.body.personalId,
               laserCode: req.body.laserCode,
               fullname: req.body.fullname,
               nickname: req.body.nickname,
               gender : req.body.gender,
               phonenumber: req.body.phonenumber,
               address: req.body.address,
               city : req.body.city,
               state: req.body.state,
               zipcode: req.body.zipcode,
               lineId : req.body.lineId,
               facebook : req.body.facebook,
               twitter: req.body.twitter,
               instagram: req.body.instagram,
               photoOfPassportCard: req.body.photoOfPassportCard,
               pictureProfile : req.body.pictureProfile,
               countryId: req.body.countryId,
               role: req.body.role
            })
            .catch(function(err) {
                res.send({ status: STATIC_VARIABLE.FAIL, message: err });
            }).then(function(data) {
                console.log('SUCCESS')
                res.send({ status: STATIC_VARIABLE.SUCCESS, message: data });
            })
});

module.exports = router;
