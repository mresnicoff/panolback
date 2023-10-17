const { Herramienta, } = require("../db.js");
const getHerramienta = async (req, res) => {


var herramientas
    herramientas = await Herramienta.findAll({attributes:['nombre']});

    //
    console.log(herramientas)
    res.json(herramientas);
  } 

module.exports = getHerramienta;
