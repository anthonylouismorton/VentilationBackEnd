'use strict';

const express = require('express');
const app = express();
const modelRoutes = require('./routes/modelRoutes');
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(modelRoutes);


module.exports = {
	app,
	start: (port) => {
		app.listen(port, () => console.log(`listening on ${port}`));
	},
};