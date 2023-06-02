import DataTypes from "sequelize";
import sequelize from "../dataBase/dbConfig.js";

const companies = sequelize.define("Companies", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },

  company_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  mobile_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  verification_method: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  logo: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  timestamps: false
});

(async () => {
  await sequelize.sync();
})();

export default companies;