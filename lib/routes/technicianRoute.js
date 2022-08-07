'use strict';
const express = require('express');
const router = express.Router();
const { Technician } = require('../model');

router.post('/technician', async (req, res, next) => {
	try{
		const json = req.body;
		let newRecord = await Technician.create(json);
		res.status(201).send(newRecord);
	}
	catch(e){
		return e;
	}
});

router.get('/technician', async (req, res, next) => {
	let records = await Technician.findAll();
	res.status(200).send(records);
});

router.get('/technician/:id', async (req, res) => {
	const technicianId = parseInt(req.params.id);
	let record = await Technician.findOne({where: { technicianId }});
	res.status(200).send(record);
});

router.put('/technician/:id', async (req, res, next) => {
	const technicianId = parseInt(req.params.id)
	const json = req.body;
	const record = await Technician.findOne({ where: { technicianId } });
	const updatedRecord = await record.update(json);
	res.status(200).send(updatedRecord);

});

router.delete('/technician/:id', async (req, res) => {
	const technicianId = parseInt(req.params.id)
	await Technician.destroy({ where: { technicianId } });
	res.status(204).send('your entry has been deleted');
});

module.exports = router;