const { Prestamo, } = require("../db.js");
const deletePrestamo = async (req, res) => {

const id=parseInt(req.query.id)

var misConsumos

    misConsumos = await Prestamo.destroy({where:{id:id}});


    res.json(misConsumos);
  } 

module.exports = deletePrestamo;