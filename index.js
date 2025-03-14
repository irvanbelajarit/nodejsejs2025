const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');

const layouts = require('express-ejs-layouts');
app.use(layouts);


app.set('layout', 'layouts/main.ejs');
// place all styles block in the layout at the head
app.set("layout extractStyles", true)
// place all scripts block in the layout at the end
app.set("layout extractScripts", true) 



app.use(bodyParser.urlencoded(
    {extended: true}
));

//connect to mongodb
require('./config/config');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false}
}));

//routes
const auth = require('./routes/auth');
app.use('/auth', auth);

const index = require('./routes/index');
app.use('/', index);

const todo = require('./routes/todo');
app.use('/todo', todo);



app.listen(3000, () => {
    console.log('Server running on port 3000');
});