const express = require('express');
const todoController = require('./controllers/todoController');

const app = express();

app.set('view engine', 'ejs'); 
/* app.set('views', path.join(__dirname, 'views')); */

app.use(express.static('./public')); 

//Controllers
todoController(app);

app.listen(3000);
console.log('You are listening port 3000');

