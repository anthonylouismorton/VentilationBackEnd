'use strict';
const express = require('express');
const router = express.Router();
const { equipment, vent, ventSurvey, technician, unit } = require('../model');
const Collection = require('../model/lib/Collection');
const modelWare = require('../middleware/modelWare');

const modelMap = {
	equipment: new Collection(equipment),
	vent: new Collection(vent),
  ventSurvey: new Collection(ventSurvey),
  technician: new Collection(technician),
  unit: new Collection(unit)
};

router.use('/:model', modelWare, (req, res, next) => {
	const model = modelMap[req.params.model];
	req.model = model;
	next();
});

router.post('/:model', async (req, res, next) => {
	const model = req.model;
	const json = req.body;

	let newRecord = await model.create(json);
	res.status(201).send(newRecord);
});

router.get('/:model', async (req, res, next) => {
	const model = req.model;
	let records = await model.read();
	res.status(200).send(records);
});

router.get('/:model/:id', async (req, res, next) => {
	const model = req.model;
	const id = req.params.id;
	let record = await model.read(id);
	res.status(200).send(record);
});

router.put('/:model/:id', async (req, res, next) => {
	const model = req.model;
	const id = req.params.id;
	const json = req.body;

	if (model.model === user) {
		let updatedRecord = await model.updateUser(id, json);
		res.status(200).send(updatedRecord);
	} else {
		let updatedRecord = await model.update(id, json);
		res.status(200).send(updatedRecord);
	}
});

router.delete('/:model/:id', async (req, res, next) => {
	const model = req.model;
	const id = req.params.id;
	let deletedRecord = await model.delete(id);
	res.status(204).send(deletedRecord);
});

module.exports = router;