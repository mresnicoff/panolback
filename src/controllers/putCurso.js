const { Curso, } = require("../db.js");
const postDatos = async (req, res) => {

  const  cargar=req.body
  console.log("hola",cargar)
try{
  const curso= await Curso.findOne({ where: { id: parseInt(cargar.id) } });
  consol
await curso.update({ nombre: cargar.nombre })
    res.json(cargar);
  } 
  catch(error){res.status(300).json({error:"Error"})}
}
module.exports = postDatos;
