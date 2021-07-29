require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
require('./database')

// settings
const PORT = process.env.PORT || 4000;
const PATH = '/api/datos'

// CORS
app.use(cors());
// Lectura y parseo del body
app.use(express.json());
// Directorio Público
app.use(express.static('public'));
// Rutas de mi aplicación
app.use(PATH, require('./routes/datos.route'));


app.listen(PORT, () => {
   console.log('Servidor corriendo en puerto:', PORT);
});








