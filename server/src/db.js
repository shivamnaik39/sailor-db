const mysql = require('mysql')
require('dotenv').config()

// Create Connection
const db = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DATABASE,
})

// Connect
db.connect((err) => {
	if (err) throw err
	console.log('MySQL connected...')
})

module.exports = db
