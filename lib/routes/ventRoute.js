'use strict';
const express = require('express');
const router = express.Router();
const { Vent, Unit } = require('../model');

router.post('/vents', async (req, res) => {

	try{
		const json = req.body;
		let newRecord = await Vent.create(json);
		console.log(newRecord)
		res.status(201).send(newRecord);
	}
	catch(e){
		console.log(e)
		return e;
	};
});

router.get('/vents', async (req, res) => {
	try{
		let records = await Vent.findAll({
			include: { model: Unit, as: 'unit'}
		});
		console.log(records)
		res.status(200).send(records);
	}
	catch(e){
		return e;
	}
});

router.get('/vents/:id', async (req, res) => {
	try{
		const ventId = parseInt(req.params.id);
		let record = await Vent.findOne({where: { ventId }});
		res.status(200).send(record);
	}
	catch(e){
		return e;
	}
});

router.get('/unitVents/:id', async (req, res) => {
	try{
		const unitId = parseInt(req.params.id);
		let records = await Vent.findAll({where: { unitId }});
		res.status(200).send(records);
	}
	catch(e){
		return e;
	}
});

router.put('/vents/:id', async (req, res) => {
	try{
		const ventId = parseInt(req.params.id)
		const json = req.body;
		const record = await Vent.findOne({ where: { ventId } });
		const updatedRecord = await record.update(json);
		res.status(200).send(updatedRecord);
	}
	catch(e){
		return e;
	}

});

router.delete('/vents/:id', async (req, res) => {
	try{
		const ventId = parseInt(req.params.id)
		await Vent.destroy({ where: { ventId } });
		res.status(204).send('your entry has been deleted');	
	}
	catch(e){
		return e;
	};
});

module.exports = router;