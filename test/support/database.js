const { ANALYTICS_DATA_TABLE_NAME } = require("../../src/publish/postgres")

const knex = require("knex")

const connection = {
  host: "localhost",
  database: process.env.TRAVIS ? "travis_ci_test" : "analytics_reporter_test",
}

const resetSchema = () => {
  const db = knex({ client: "pg", connection })
  return db("analytics_data").delete()
}

module.exports = { connection, resetSchema }
