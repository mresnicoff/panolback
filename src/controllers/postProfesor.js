const { Profesor, } = require("../db.js");
const postDatos = async (req, res) => {

  const  cargar=req.body
  console.log("hola",cargar)

await Profesor.bulkCreate(cargar);
    res.json(cargar);


}
module.exports = postDatos;
