const Pool = require('pg').Pool;

const pool = new Pool({
    user: "swetabhmukherjee",
    password: "password",
    database: "crm",
    host: "localhost",
    port: 5432
});

module.exports = pool;


