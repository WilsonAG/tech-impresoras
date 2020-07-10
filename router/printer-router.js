const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({
    message: 'funciona',
  });
});

module.exports = router;
