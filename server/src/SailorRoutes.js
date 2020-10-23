const express = require('express')

const Router = new express.Router()

// Start database server and connect
const db = require('./db')

// Get All Sailors
Router.get('/sailor', (req, res) => {
	const sql = 'SELECT * FROM Sailor'
	const query = db.query(sql, (err, results) => {
		if (err) res.status(400).send(err)

		console.log(results)

		res.status(200).send(results)
	})
})

//  Get Sailor
Router.get('/sailor/:id', (req, res) => {
	const sql = `SELECT * FROM Sailor WHERE SID=${req.params.id}`
	const query = db.query(sql, (err, result) => {
		if (err) res.status(400).send(err)

		console.log(result)

		res.status(200).send(result)
	})
})

// Insert a Sailor
Router.post('/sailor', (req, res) => {
	const sailor = req.body
	const sql = 'INSERT INTO Sailor SET ?'
	const query = db.query(sql, sailor, (err, result) => {
		if (err) res.status(400).send(err)
		console.log(result)
		res.status(200).send()
	})
})

//  Update Sailor
Router.patch('/sailor/:id', (req, res) => {
	const updatedSailor = req.body
	const sql = `UPDATE Sailor SET ? WHERE SID=${req.params.id}`
	const query = db.query(sql, updatedSailor, (err, result) => {
		if (err) res.status(400).send(err)

		console.log(result)

		res.status(200).send()
	})
})

//  Delete Sailor
Router.delete('/sailor/:id', (req, res) => {
	const sql = `DELETE FROM Sailor WHERE SID=${req.params.id}`
	const query = db.query(sql, (err, result) => {
		if (err) res.status(400).send(err)

		console.log(result)

		res.status(200).send()
	})
})

module.exports = Router
