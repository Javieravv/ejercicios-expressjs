const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const logger = require('./middleware/logger')

const app = express();

// Middlewares globales
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(logger);

// Rutas
app.use('/acercade', require('./routes/acercade'));
app.use('/login', require('./routes/login'));
app.use('/dashboard', require('./routes/dashboard'));
app.use('/ayuda', require('./routes/ayuda'));

// Ruta para página no encontrada (Error 404)
app.use((req, res, next) => {
  res.status(404).json({ error: 'Página no encontrada' });
});

// Middleware de manejo de errores
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Error interno del servidor' });
});

module.exports = app;
