const express = require('express');

const app = express();

const user = require('./controller/user.controller');
const loginValidade = require('./middleware/loginValidate');
const createUser = require('./middleware/createUserValidate');

app.use(express.json());

app.post('/login', loginValidade, user.loginPost);

app.post('/user', createUser, user.userPost);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
