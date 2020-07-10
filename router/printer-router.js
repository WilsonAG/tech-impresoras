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

    return res.status(201).json({
      ok: true,
      impresora: data,
      message: 'Impresora agregada.',
    });
  });
});

// ========================================
//                 UPDATE A PRINTER
// ========================================
router.put('/:id', (req, res) => {
  const id = req.params.id;
  let body = req.body;

  delete body.marca;
  delete body.serie;
  delete body.contador;

  Printer.findOneAndUpdate({ _id: id }, body, { new: true }, (err, data) => {
    if (err)
      return res.status(500).json({
        ok: false,
        error: {
          message: 'Peticion no valida.',
        },
      });

    if (!data)
      return res.status(404).json({
        ok: false,
        error: {
          message: 'No existe la impresora.',
        },
      });

    return res.json({
      ok: true,
      impresora: data,
      message: 'Impresora actualizada.',
    });
  });
});

// ========================================
//             Delete a printer
// ========================================

router.delete('/:id', (req, res) => {
  const id = req.params.id;

  Printer.findOneAndDelete({ _id: id }, (err, deleted) => {
    if (err)
      return res.status(400).json({
        ok: false,
        error: {
          message: 'Error en la peticion.',
        },
      });

    if (!deleted)
      return res.status(404).json({
        ok: false,
        error: {
          message: 'No se encuentra impresora.',
        },
      });

    return res.json({
      ok: true,
      impresora: deleted,
      message: 'Impresora eliminada.',
    });
  });
});

module.exports = router;
