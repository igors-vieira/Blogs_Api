const express = require('express');

const app = express();

const login = require('./controller/user.controller');
const loginValidade = require('./middleware/loginValidate');

app.use(express.json());

app.post('/login', loginValidade, login.postUsers);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
