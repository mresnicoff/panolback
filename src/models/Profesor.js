
const { DataTypes, TimeoutError } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("profesor", {
    nombre_apellido: { type: DataTypes.STRING, allowNull: false, unique: true },
    domicilio: { type: DataTypes.STRING, allowNull: false },
    documento: { type: DataTypes.STRING, allowNull: false }
   

  });
};



