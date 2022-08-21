'use strict';
const express = require('express');
const router = express.Router();
const { VentSurvey, Technician, Unit, Vent } = require('../model');

router.post('/ventSurvey', async (req, res) => {
	try{
		const json = req.body;
		let newRecord = await VentSurvey.create(json);
		res.status(201).send(newRecord);
	}
	catch(e){
		return e;
	}
});

router.get('/ventSurvey', async (req, res) => {
	try{
		console.log('in here')
		let records = await VentSurvey.findAll({
			include: [{
				model: Vent, as: 'vent',
				include: [{
					model: Unit, as: 'unit'
				}],
			}],
	});
		console.log(records)
		res.status(200).send(records);
	}
	catch(e){
		console.log(e)
		return e;
	}
});

router.get('/allVentSurveys/:id', async (req, res) => {
	try{
		const ventId = parseInt(req.params.id);
		console.log(ventId)
		let records = await VentSurvey.findAll({
			where: { ventId },
			include: { model: Technician, as: 'technician'}
		});
		console.log(records)
		res.status(200).send(records);
	}
	catch(e){
		console.log(e)
		return e;
	};
});

router.get('/ventSurvey/:id', async (req, res) => {
	try{
		const ventSurveyId = parseInt(req.params.id);
		let record = await VentSurvey.findOne({where: { ventSurveyId }});
		res.status(200).send(record);
	}
	catch(e){
		return e;
	};
});

router.get('/unitVentSurvey/:id', async (req, res) => {
	console.log('in here')
	try{
		const unitId = parseInt(req.params.id);
		let record = await VentSurvey.findOne({where: { unitId }});
		res.status(200).send(record);
	}
	catch(e){
		return e;
	};
});

router.put('/ventSurvey/:id', async (req, res) => {
	try{
		const ventSurveyId = parseInt(req.params.id)
		const json = req.body;
		const record = await VentSurvey.findOne({ where: { ventSurveyId } });
		const updatedRecord = await record.update(json);
		res.status(200).send(updatedRecord);
	}
	catch(e){
		return e;
	}

});

router.delete('/ventSurvey/:id', async (req, res) => {
	try{
		const ventSurveyId = parseInt(req.params.id);
		await VentSurvey.destroy({ where: { ventSurveyId } });
		res.status(204).send('your entry has been deleted');
	}
	catch(e){
		return e;
	}
});

module.exports = router;