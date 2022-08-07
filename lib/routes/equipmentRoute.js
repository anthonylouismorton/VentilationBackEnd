'use strict';
const express = require('express');
const router = express.Router();
const { Equipment } = require('../model');

router.post('/equipment', async (req, res, next) => {
	try{
		const json = req.body;
		let newRecord = await Equipment.create(json);
		res.status(201).send(newRecord);
	}
	catch(e){
		return e;
	}
});

router.get('/equipment', async (req, res) => {
	try{
		let records = await Equipment.findAll();
		res.status(200).send(records);
	}
	catch(e){
		return e;
	}
});

router.get('/equipment/:id', async (req, res) => {
	try{
		const equipmentId = parseInt(req.params.id);
		let record = await Equipment.findOne({where: { equipmentId }});
		res.status(200).send(record);
	}
	catch(e){
		return e;
	}
});

router.put('/equipment/:id', async (req, res) => {
	try{
		const equipmentId = parseInt(req.params.id)
		const json = req.body;
		const record = await Equipment.findOne({ where: { equipmentId } });
		const updatedRecord = await record.update(json);
		res.status(200).send(updatedRecord);
	}
	catch(e){
		return e;
	};
});

router.delete('/equipment/:id', async (req, res) => {
	try{
		const equipmentId = parseInt(req.params.id)
		await Equipment.destroy({ where: { equipmentId } });
		res.status(204).send('your entry has been deleted');
	}
	catch(e){
		return e;
	}
});

module.exports = router;