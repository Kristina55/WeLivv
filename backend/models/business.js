const db = require("../db");


class Business {

  static async findAll() {
    const companyRes = await db.query(
      `SELECT name, address, city, state, country, phone, website
          FROM business`)

    const company = companyRes.rows;
    console.log(company)
    return company;
  }
}

module.exports = Business;