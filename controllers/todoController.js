
let data = [ {item: 'Feed the dog'}, { item: 'learn NODE JS'}, {item: 'GO Shopping'}];
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = (app) => {

    app.get('/todo', (req, res) => {
        res.render('todo', {todos: data});
    })

    app.post('/todo',urlencodedParser, (req, res) => {
        data.push(req.body);
    });

    app.delete('/todo', (req,res) => {

    });
};