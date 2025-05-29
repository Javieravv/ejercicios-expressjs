const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ mensaje: 'Acerca de la aplicación' });
});

module.exports = router;
