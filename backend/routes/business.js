const express = require("express");
const router = new express.Router();
const db = require("../db");

const Business = require("../models/business");


/** GET **/

router.get("/", async function (req, res, next) {
  try {
    const business = await Business.findAll(req.query);
    console.log(business)
    return res.json({ business });
  } catch (err) {
    return next(err);
  }
});



module.exports = router;