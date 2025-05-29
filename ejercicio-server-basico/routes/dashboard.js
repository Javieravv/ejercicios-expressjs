const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ mensaje: 'Panel de usuario (dashboard)' });
});

module.exports = router;
