const express = require("express");
var router = express.Router();

var knex = require("./knex");

router.get("/listAccount", async (req, res) => {
  var data = await knex.table("UserProfile").select();
  console.log();
  res.send(data);
});

const FAIL = false;
const SUCCESS = true; 

// signin
router.post("/signin", async (req, res) => {
  var data = await knex.table("UserProfile")
                .select()
                .where({
                    email: req.body.email,
                    password:  req.body.password
                });
  if(data.length >0){
     res.send({ status: SUCCESS, message: data });
  }else{
     res.send({ status: FAIL, message: 'User not found, please try again' });
  }
});

//signup
router.post("/validateEmail", async (req, res) => {
  var data = await knex
            .table("UserProfile")
            .select()
            .where({
                email: req.body.email,
            });
  if (data.length > 0) {
      //duplicate
    res.send({ status: FAIL, message: "The email address you have entered is already registered." });
  } else {
      //success
    res.send({ status: SUCCESS, message: "" });
  }
});

router.post("/signup", async (req, res) => {
  var data = await knex.table("UserProfile")
            .returning('fullname')
            .insert({
               email : res.body.email,
               password: res.body.password,
               personalId: res.body.personalId,
               laserCode: res.body.laserCode,
               fullname: res.body.fullname,
               nickname: res.body.nickname,
               gender : res.body.gender,
               phonenumber: res.body.phonenumber,
               address: res.body.address,
               city : res.body.city,
               state: res.body.state,
               zipcode: res.body.zipcode,
               lineId : res.body.lineId,
               facebook : res.body.facebook,
               twitter: res.body.twitter,
               instagram: res.body.instagram,
               photoOfPassportCard: res.body.photoOfPassportCard,
               pictureProfile : res.body.pictureProfile,
               countryId: res.body.countryId,
               role: res.body.role
            })
            .catch(function(err) {
                res.send({ status: FAIL, message: err });
            }).then(function(data) {
                res.send({ status: SUCCESS, message: data });
            })
});

module.exports = router;
