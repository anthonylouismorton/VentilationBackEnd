'use strict';
const express = require('express');
const router = express.Router();
const { VentSurvey, Technician, Unit, Vent, VentMeasurement } = require('../model');

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

router.post('/ventSurveyMeasurements', async (req, res) => {
	try{
		const json = req.body;
		let newRecord = await VentMeasurement.create(json);
		console.log(newRecord)
		res.status(201).send(newRecord);
	}
	catch(e){
		return e;
	}
});

router.put('/ventSurveyMeasurements/:id', async (req, res) => {
	try{
		const ventMeasurementId = parseInt(req.params.id)
		const json = req.body;
		const record = await VentMeasurement.findOne({ where: { ventMeasurementId } });
		const updatedRecord = await record.update(json);
		res.status(200).send(updatedRecord);
	}
	catch(e){
		return e;
	}

});

router.get('/ventSurveyMeasurements', async (req, res) => {
	try{
		let records = await VentMeasurement.findAll();
		res.status(200).send(records);
	}
	catch(e){
		return e;
	}
});

router.get('/ventSurveyMeasurements/:id', async (req, res) => {
	const ventSurveyId = parseInt(req.params.id);
	try{
		let records = await VentMeasurement.findAll({where: { ventSurveyId }});
		res.status(200).send(records);
	}
	catch(e){
		return e;
	}
});

router.get('/ventSurvey', async (req, res) => {
	try{
		
		let records = await VentSurvey.findAll({
			include: [{
				model: Vent, as: 'vent',
				include: [{
					model: Unit, as: 'unit'
				}]
			},
			{
				model: Technician, as: 'technician'
			}
		]})
		// .then(async (records) => {
		// 	ventSurveys = records;
		// 	return records
		// })
		// .then(async (ventMeasurements) => {
		// 	let updatedVentSurveys = []
		// 	ventMeasurements.forEach((ventSurvey) => {
		// 		VentMeasurement.findAll({
		// 			where: {ventSurveyId: ventSurvey.ventSurveyId}
		// 		})
		// 		.then(async (response) => {
		// 			updatedVentSurveys.push({...ventSurvey,response})
		// 			return response
		// 		})
		// 	})
		// 	console.log(updatedVentSurveys)
		// 	return ventMeasurements
		// })
		const updatedRecords = await Promise.all(records.map(async (ventSurvey) => {
			
			let ventMeasurements = await VentMeasurement.findAll({ where: {ventSurveyId: ventSurvey.ventSurveyId} })
			ventSurvey = {ventSurvey, ventMeasurements: ventMeasurements}
			return ventSurvey
		}))

		res.status(200).send(updatedRecords);
	}
	catch(e){
		console.log(e)
		return e;
	}
});

router.get('/unitVentSurveys/:id', async (req, res) => {
	try{
		const ventId = parseInt(req.params.id);
		let records = await VentSurvey.findAll({
			where: { ventId },
			include: [{
				model: Vent, as: 'vent',
				include: [{
					model: Unit, as: 'unit'
				}]
			},
			{
				model: Technician, as: 'technician'
			},
		]
		});
		const updatedRecords = await Promise.all(records.map(async (ventSurvey) => {
			
			let ventMeasurements = await VentMeasurement.findAll({ where: {ventSurveyId: ventSurvey.ventSurveyId} })
			ventSurvey = {ventSurvey, ventMeasurements: ventMeasurements}
			return ventSurvey
		}))
		
		res.status(200).send(updatedRecords);
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