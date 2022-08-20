'use strict';
const express = require('express');
const router = express.Router();
const { Equipment, Calibration } = require('../model');

router.post('/equipment', async (req, res, next) => {
	console.log(req.body)
	try{
		const json = req.body;
		let equipmentRecord = await Equipment.create(json);
		let equipmentId = equipmentRecord.equipmentId
		let newCalibration = {...req.body, equipmentId: equipmentId}
		let calibrationRecord = await Calibration.create(newCalibration)
		res.status(201).send({...equipmentRecord, ...calibrationRecord});
	}
	catch(e){
		return e;
	}
});

router.get('/equipment', async (req, res) => {
	try{
		let equipmentRecords = await Equipment.findAll();
		let calibrationRecords = await Calibration.findAll();
		let recordArray = []
		equipmentRecords.map(record => {
			calibrationRecords.forEach(calibration => {
				if(record.equipmentId === calibration.equipmentId){
					let newRecord = {
						equipmentId: record.equipmentId,
						manufacturer: record.manufacturer,
						model: record.model,
						description: record.description,
						serialNumber:record.serialNumber,
						calibrationDate: calibration.calibrationDate,
						calibrationExpiration: calibration.calibrationExpiration,
						calibrationLocation: calibration.calibrationLocation,
						calibrationId: calibration.calibrationId
					}
					recordArray.push(newRecord)
				}
			});
			return recordArray
		})

		res.status(200).send(recordArray);
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