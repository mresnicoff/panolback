const { Rst, } = require("../db.js");
const getDatosRst = async (req, res) => {

const miCliente=req.query.cliente
console.log(miCliente)
var misDatos
if (miCliente){
    misDatos = await Rst.findAll({where:{NroCliente:miCliente}});}

    //
    console.log(misDatos)
    res.json(misDatos);
  } 

module.exports = getDatosRst;
