const { Herramienta, } = require("../db.js");
const postHerramienta = async (req, res) => {

  const  cargar=req.body
  console.log("hola",cargar)

await Herramienta.bulkCreate(cargar);
    res.json(cargar);


}
module.exports = postHerramienta
