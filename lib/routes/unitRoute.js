'use strict';
const express = require('express');
const router = express.Router();
const { Unit } = require('../model');

router.post('/unit', async (req, res) => {
	try{
		const json = req.body;
		let newRecord = await Unit.create(json);
		res.status(201).send(newRecord);
	}
	catch(e){
		return e;
	}
});

router.get('/unit', async (req, res) => {
	try{
		let records = await Unit.findAll();
		res.status(200).send(records);
	}
	catch(e){
		return e;
	}
});

router.get('/unit/:id', async (req, res) => {
	try{
		const unitId = parseInt(req.params.id);
		let record = await Unit.findOne({where: { unitId }});
		res.status(200).send(record);
	}
	catch(e){
		return e;
	};
});

router.put('/unit/:id', async (req, res) => {
	try{
		const unitId = parseInt(req.params.id)
		const json = req.body;
		const record = await Unit.findOne({ where: { unitId } });
		const updatedRecord = await record.update(json);
		res.status(200).send(updatedRecord);
	}
	catch(e){
		return e;
	};

});

router.delete('/unit/:id', async (req, res) => {
	try{
		const unitId = parseInt(req.params.id)
		await Unit.destroy({ where: { unitId } });
		res.status(204).send('your entry has been deleted');
	}
	catch(e){
		return e;
	}
});

module.exports = router;