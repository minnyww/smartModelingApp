var knex = require("knex")({
  client: "mysql",
  connection: {
    host: "localhost",
    user: "root",
    password: "020540",
    database: "Smartmodeling"
  }
});

module.exports = knex;