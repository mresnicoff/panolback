
const { DataTypes, TimeoutError } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("prestamo", {
    profesor: { type: DataTypes.STRING, allowNull: false, unique: false },
    herramienta: { type: DataTypes.STRING, allowNull: false, unique: false },
    curso: { type: DataTypes.STRING, allowNull: false, unique: false },
    cantidad: { type: DataTypes.INTEGER, allowNull: false, unique: false }
   

  });
};



