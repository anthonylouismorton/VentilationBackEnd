'use strict';

const app = require('./lib/server.js');
require('dotenv').config();
const PORT = process.env.PORT || 3001;
const { db } = require('./lib/model/index.js');

db.sync()
	.then(() => {
		app.start(PORT);
	})
	.catch(console.error);