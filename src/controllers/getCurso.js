const { Curso, } = require("../db.js");
const getCurso = async (req, res) => {


var herramientas
    herramientas = await Curso.findAll({attributes:['nombre']});

    //
    console.log(herramientas)
    res.json(herramientas);
  } 

module.exports = getCurso;
