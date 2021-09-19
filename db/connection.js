const mysql = require('mysql2');

// Connection to election Database// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'ultramax',
      database: 'election'
    },
    console.log('Connected to the election database.')
)

module.exports = db