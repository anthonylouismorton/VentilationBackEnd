'use strict';
const express = require('express');
const router = express.Router();
const { Technician } = require('../model');

router.post('/technician', async (req, res) => {
	try{
		const json = req.body;
		let newRecord = await Technician.create(json);
		res.status(201).send(newRecord);
	}
	catch(e){
		return e;
	}
});

router.get('/technician', async (req, res) => {
	try{
		let records = await Technician.findAll();
		res.status(200).send(records);
	}
	catch(e){
		return e;
	}
});

router.get('/technician/:id', async (req, res) => {
	try{
		const technicianId = parseInt(req.params.id);
		let record = await Technician.findOne({where: { technicianId }});
		res.status(200).send(record);
	}
	catch(e){
		return e;
	}
});

router.put('/technician/:id', async (req, res) => {
	try{
		const technicianId = parseInt(req.params.id)
		const json = req.body;
		const record = await Technician.findOne({ where: { technicianId } });
		const updatedRecord = await record.update(json);
		res.status(200).send(updatedRecord);
	}
	catch(e){
		return e;
	}

});

router.delete('/technician/:id', async (req, res) => {
	try{
		const technicianId = parseInt(req.params.id)
		await Technician.destroy({ where: { technicianId } });
		res.status(204).send('your entry has been deleted');
	}
	catch(e){
		return e;
	}
});

module.exports = router;