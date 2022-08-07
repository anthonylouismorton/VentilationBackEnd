'use strict';
const express = require('express');
const router = express.Router();
const { Vent } = require('../model');

router.post('/vent', async (req, res, next) => {
	try{
		const json = req.body;
		let newRecord = await Vent.create(json);
		res.status(201).send(newRecord);
	}
	catch(e){
		return e;
	}
});

router.get('/vent', async (req, res, next) => {
	let records = await Vent.findAll();
	res.status(200).send(records);
});

router.get('/vent/:id', async (req, res) => {
	const ventId = parseInt(req.params.id);
	let record = await Vent.findOne({where: { ventId }});
	res.status(200).send(record);
});

router.put('/vent/:id', async (req, res, next) => {
	const ventId = parseInt(req.params.id)
	const json = req.body;
	const record = await Vent.findOne({ where: { ventId } });
	const updatedRecord = await record.update(json);
	res.status(200).send(updatedRecord);

});

router.delete('/vent/:id', async (req, res) => {
	const ventId = parseInt(req.params.id)
	await Vent.destroy({ where: { ventId } });
	res.status(204).send('your entry has been deleted');
});

module.exports = router;