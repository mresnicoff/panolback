
const { DataTypes, TimeoutError } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("herramienta", {
    nombre: { type: DataTypes.STRING, allowNull: false, unique: true },
    cantidad: { type: DataTypes.INTEGER, allowNull: false }
   

  });
};



