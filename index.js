const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('dotenv').config();

//para poder hacer peticiones al servidor
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

//conection bd
mongoose.connect(process.env.DATABASE, {
  useUnifiedTopology: true
}).then(()=>{
  console.log('connect')
})

const port =  process.env.PORT;

app.listen(port, () => {
  console.log('aplicacion ejucatandose');
});

const usuario = require ('./src/routes/routeUsuario')
app.use(usuario);

const cobertura = require('./src/routes/routerCobertura')
app.use(cobertura);

const footer = require('./src/routes/routerFooter');
app.use(footer);

const formasPago = require('./src/routes/routerFormaPago')
app.use(formasPago);

const planes = require('./src/routes/routerPlanes');
app.use(planes);

const promociones = require('./src/routes/routerPromociones');
app.use(promociones);

const quienesSomos = require('./src/routes/routerQuienesSomos');
app.use(quienesSomos);

const miltel = require('./src/routes/routerMiltel');
app.use(miltel);