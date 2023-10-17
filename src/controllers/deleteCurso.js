const { Curso, } = require("../db.js");
const postDatos = async (req, res) => {

  const  id=req.query.id
  console.log("hola",req.query)
try{
  await Curso.destroy({
    where: {
      id: parseInt(id)
    },
  });
    res.json(id);
  } 
  catch(error){res.status(300).json({error:"Error"})}
}
module.exports = postDatos;
