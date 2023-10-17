const { Curso } = require("../db.js");
const getUsuario = async (req, res) => {

try{
  const cursos = await Curso.findAll();
    res.json(cursos);}
    catch{console.log("algo salio mal")}
  } 

module.exports = getUsuario;
