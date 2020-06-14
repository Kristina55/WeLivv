const express = require('express')
const router = new express.Router()
const db = require('../db')

/** GET /business **/

// Query the db to return everything from business table.
router.get('/', async function (req, res, next) {
  try {
    const businessRes = await db.query(
      `SELECT id, name, address, address2, city, state, country, phone, website, zip
          FROM business`,
    )
    const business = businessRes.rows
    return res.json({ business })
  } catch (err) {
    console.log(err.message)
  }
})

/** GET /business/[id] **/

// Query the db to return everything for one business table based on given id.
router.get('/:id', async function (req, res, next) {
  try {
    const { id } = req.params
    const businessRes = await db.query(
      `SELECT id, name, address, address2, city, state, country, phone, website, zip
            FROM business
            WHERE id = $1`,
      [id],
    )
    const business = businessRes.rows[0]
    return res.json({ business })
  } catch (err) {
    console.log(err.message)
  }
})

/** PUT /business/[id] **/

// Query the db and return the updated fields based on id.
router.put('/:id', async function (req, res, next) {
  try {
    const { id } = req.params
    const {
      name,
      address,
      address2,
      city,
      state,
      country,
      phone,
      website,
      zip,
    } = req.body

    const update = await db.query(
      `UPDATE business SET name=$1, address=$2, address2=$3, city=$4, state=$5, country=$6, phone=$7, website=$8, zip=$9
            WHERE id = $10 RETURNING id, name, address, address2, city, state, country, phone, website, zip`,
      [name, address, address2, city, state, country, phone, website, zip, id],
    )
    return res.json(update.rows[0])
  } catch (err) {
    console.log(err.message)
  }
})

module.exports = router
