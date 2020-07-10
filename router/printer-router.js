const router = require('express').Router();
const Printer = require('../models/printer-model');

// ========================================
//                 GET ALL PRINTERS
// ========================================
router.get('/', (req, res) => {
  Printer.find((err, data) => {
    if (err)
      return res.status(400).json({
        ok: false,
        error: err,
      });

    if (!data) {
      return res.status(500).json({
        ok: false,
        error: {
          message: 'No hay impresoras.',
        },
      });
    }

    data = data.map((printer) => {
      printer.contador = undefined;
      return printer;
    });

    return res.json({
      ok: true,
      impresoras: data,
    });
  });
});

// ========================================
//                 GET PRINTER BY ID
// ========================================
router.get('/:id', (req, res) => {
  const id = req.params.id;
  Printer.findOne({ _id: id }, (err, data) => {
    if (err)
      return res.status(400).json({
        ok: false,
        error: {
          message: 'Error en la peticion',
        },
      });

    if (!data) {
      return res.status(500).json({
        ok: false,
        error: {
          message: 'No se encontro impresora.',
        },
      });
    }

    data.contador = undefined;

    return res.json({
      ok: true,
      impresora: data,
    });
  });
});

// ========================================
//                 CREATE NEW PRINTER
// ========================================
router.post('/', (req, res) => {
  let printer = new Printer(req.body);

  printer.save((err, data) => {
    if (err)
      return res.status(400).json({
        ok: false,
        error: err,
      });

    if (!data) {
      return res.status(500).json({
        ok: false,
        error: {
          message: 'Verifique los campos.',
        },
      });
    }

    return res.json({
      ok: true,
      impresora: data,
      message: 'Impresora agregada.',
    });
  });
});

// ========================================
//                 UPDATE A PRINTER
// ========================================
router.put('/', (req, res) => {
  return res.json({
    message: 'put',
  });
});

router.delete('/', (req, res) => {
  return res.json({
    message: 'delete',
  });
});

module.exports = router;
