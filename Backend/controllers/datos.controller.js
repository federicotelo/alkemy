const { DB } = require('../database')
const datosCtrl = {};



datosCtrl.getInformation = (req, res) => {
   DB.query("SELECT * FROM finance ORDER BY id DESC LIMIT 10", (err, result) => {
      if (err) throw err
      console.log(result)
      res.json(result)
   })
};

datosCtrl.createData = (req, res) => {
   const { concepto, monto, fecha, tipo } = req.body
   DB.query("INSERT INTO finance (concepto, monto,fecha,tipo) VALUES (?,?,?,?)", [concepto, monto, fecha, tipo], (err, result) => {
      if (err) throw err
      res.json({ msg: 'Nuevo Dato Creado', concepto, monto, fecha, tipo })
   })
};

datosCtrl.getData = (req, res) => {
   const { id } = req.params
   DB.query("SELECT * FROM finance WHERE id = ?", id, (err, result) => {
      if (err) throw err
      res.json(result)
   })
};

datosCtrl.deleteData = (req, res) => {
   const { id } = req.params
   DB.query(`DELETE FROM finance WHERE id=(?)`, id, (err) => {
      if (err) throw err
      console.log(req.params)
      res.json({ msg: 'Un Dato Eliminado', id })
   })
};

datosCtrl.updateData = (req, res) => {
   const { concepto, monto, fecha, tipo } = req.body
   const { id } = req.params
   DB.query(`UPDATE finance SET concepto=?, monto=?, fecha=?, tipo=? WHERE id=?`, [concepto, monto, fecha, tipo, id], (err) => {
      if (err) throw err
      console.log(req.body)
      res.json({ msg: 'Un Dato actualizado', id })
   })
};

datosCtrl.getBalance = (req, res) => {
   DB.query("SELECT * FROM finance", (err, result) => {
      if (err) throw err
      console.log(result)
      res.json(result)
   })
};

module.exports = datosCtrl;