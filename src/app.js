const express = require('express'),
      path = require('path'),
      morgan = require('morgan'),
      mysql = require('mysql'),
      myConnection = require('express-myconnection');

const app = express();

// importing routes
const customerRoutes = require('./routes/customer');

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
  host: 'localhost',
  user: 'root',
  password: '1234',
  port: 3307,
  database: 'USUARIOS'
}, 'single'));
app.use(express.urlencoded({extended: false}));

// routes
app.use('/', customerRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});

app.get("/backgrounds", function(req, res){
  res.sendfile(__dirname + "/backgrounds/03.png");    //aqui envias el HTML
});

app.get("/Inicio", function(req, res){
  res.sendfile("./src/Inicio/layout.css");    //aqui envias el HTML
});

app.get("/framework.css", function(req, res){
  res.sendfile(__dirname + "/Inicio/framework.css");    //aqui envias el HTML
});

app.get("/webfonts/css/fontawesome-all.min.css", function(req, res){
  res.sendfile(__dirname + "/webfonts/css/fontawesome-all.min.css");    //aqui envias el HTML
});

app.get("/webfonts/css/fontawesome-all.min.css", function(req, res){
  res.sendfile(__dirname + "/webfonts/css/fontawesome-all.min.css");    //aqui envias el HTML
});


app.get("/Pagos", function(req, res){
  res.sendfile(__dirname + "/Pagos/layout/styles/layout.css");    //aqui envias el HTML
});