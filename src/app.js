const express = require('express');
const app = express();

// routes
app.use(require('./routes/main'));
app.use(require('./routes/heroes'));

module.exports = app;