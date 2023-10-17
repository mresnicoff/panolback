const { Profesor, } = require("../db.js");
const getProfesor = async (req, res) => {


var herramientas
    herramientas = await Profesor.findAll({attributes:['nombre_apellido']});

    //
    console.log(herramientas)
    res.json(herramientas);
  } 

module.exports = getProfesor;
