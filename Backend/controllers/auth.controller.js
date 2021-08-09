const { DB } = require('../database')
const { validationResult } = require('express-validator')

const authCtrl = {};


authCtrl.login = (req, res) => {
   const { email, pass } = req.body
   try {
      DB.query('SELECT 1 FROM users WHERE email = ? AND pass = ?', [email, pass], (err, result) => {
         if (err) throw err
         if (result.length > 0) {
            res.json({ msg: `Login Ok !!!, Hola ${email}`, estado: true })
         } else {
            res.json({ msg: "Ups, Parece que no estas Registrado ", email, pass, result, estado: false })
         }

      })

   } catch (error) {
      res.json({ msg: " error" })
   }

};

authCtrl.register = (req, res) => {
   const { email, pass } = req.body
   try {
      DB.query('SELECT 1 FROM users WHERE email = ?', email, (err, result) => {
         if (err) throw err
         if (result.length > 0) {
            res.json({ msg: `Usuario ${email} ya existe`, estado: false })
         } else {
            DB.query("INSERT INTO users (email, pass) VALUES (?,?)", [email, pass], (err, result) => {
               if (err) throw err
               res.json({ msg: `Usuario ${email} Creado`, estado: true })
            })
         }

      })

   } catch (error) {
      res.status(500).json({ msg: " error" })
   }

};

module.exports = authCtrl