const { Prestamo, } = require("../db.js");
const postPrestamo = async (req, res) => {

  const  cargar=req.body

try{
await Prestamo.bulkCreate(cargar);
    res.json(cargar);
  } 
  catch(error){res.status(300).json({error:"Error"})}
}
module.exports = postPrestamo;
