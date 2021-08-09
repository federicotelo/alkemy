const mysql = require('mysql');

const DB = mysql.createConnection({
   host: "localhost",
   user: "root",
   // password: "root"
   //database: "test"
});

DB.connect(function (err) {
   if (err) throw err;
   console.log("Connected!")

   DB.query("CREATE DATABASE IF NOT EXISTS alkemy", function (err, result) {
      if (err) throw err;
      console.log("Database 'Alkemy' is Ready !!");
   });

   DB.query("USE alkemy", function (err, result) {
      if (err) throw err;
      console.log("Using 'Alkemy' Database ;)");
   });

   DB.query(`CREATE TABLE IF NOT EXISTS finance(id INT(11) NOT NULL AUTO_INCREMENT, concepto VARCHAR(20),
             monto INT(10),fecha VARCHAR(10),tipo VARCHAR(6), PRIMARY KEY (id))`, (err, result) => {
      if (err) throw err;
      console.log("Table 'Finance' Created !!");
   });

   DB.query(`CREATE TABLE IF NOT EXISTS users(id INT(11) NOT NULL AUTO_INCREMENT, 
      email VARCHAR(50) UNIQUE KEY, pass VARCHAR(20), PRIMARY KEY (id))`, (err, result) => {
      if (err) throw err;
      console.log("Table 'User' Created too !!");
   });

});

module.exports = {
   DB
}


