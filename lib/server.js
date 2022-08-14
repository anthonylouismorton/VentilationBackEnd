'use strict';

const express = require('express');
const app = express();
const technicianRoute = require('./routes/technicianRoute');
const unitRoute = require('./routes/unitRoute');
const equipmentRoute = require('./routes/equipmentRoute');
const ventRoute = require('./routes/ventRoute');
const ventSurveyRoute = require('./routes/ventSurveyRoute')
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(technicianRoute);
app.use(unitRoute);
app.use(equipmentRoute);
app.use(ventRoute);
app.use(ventSurveyRoute);


module.exports = {
	app,
	start: (port) => {
		app.listen(port, () => console.log(`listening on ${port}`));
	},
};