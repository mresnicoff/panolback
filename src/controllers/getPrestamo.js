const { Prestamo, } = require("../db.js");
const getPrestamo = async (req, res) => {


var herramientas
    herramientas = await Prestamo.findAll();

    //
    console.log(herramientas)
    res.json(herramientas);
  } 

module.exports = getPrestamo;
