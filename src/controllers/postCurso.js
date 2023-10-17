const { Curso, } = require("../db.js");
const postDatos = async (req, res) => {

  const  cargar=req.body
  console.log("hola",cargar)
try{
await Curso.bulkCreate(cargar);
    res.json(cargar);
  } 
  catch(error){res.status(300).json({error:"Error"})}
}
module.exports = postDatos;
