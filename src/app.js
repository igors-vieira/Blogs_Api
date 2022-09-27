const express = require('express');

const app = express();

const user = require('./controller/user.controller');
const category = require('./controller/category.controller');
const blogPost = require('./controller/blogPost.controller');

const tokenValidate = require('./middleware/auth/validateJWT');
const loginValidade = require('./middleware/loginValidate');
const createCategoryMid = require('./middleware/createCategoryMid');
const createUser = require('./middleware/createUserValidate');
const createPost = require('./middleware/createPostValidate');

app.use(express.json());

app.get('/user', tokenValidate, user.getAllUsers);
app.get('/user/:id', tokenValidate, user.getUsersId);
app.get('/categories', tokenValidate, category.allCategories);
app.get('/post', tokenValidate, blogPost.getAllPosts);
app.get('/post/:id', tokenValidate, blogPost.getPostsId);

app.post('/login', loginValidade, user.loginPost);
app.post('/user', createUser, user.userPost);
app.post('/categories', createCategoryMid, tokenValidate, category.createCategory);
app.post('/post', createPost, tokenValidate, blogPost.createPost);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
