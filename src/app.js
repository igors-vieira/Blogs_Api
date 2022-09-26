const express = require('express');

const app = express();

const user = require('./controller/user.controller');
const category = require('./controller/category.controller');

const tokenValidate = require('./middleware/auth/validateJWT');
const loginValidade = require('./middleware/loginValidate');
const createCategoryMid = require('./middleware/createCategoryMid');
const createUser = require('./middleware/createUserValidate');

app.use(express.json());

app.get('/user', tokenValidate, user.getAllUsers);

app.get('/user/:id', tokenValidate, user.getUsersId);

app.get('/categories', tokenValidate, category.allCategories);

app.post('/login', loginValidade, user.loginPost);

app.post('/user', createUser, user.userPost);

app.post('/categories', createCategoryMid, tokenValidate, category.createCategory);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
