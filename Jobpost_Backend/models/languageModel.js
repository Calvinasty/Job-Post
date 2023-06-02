import Sequelize from "../dataBase/dbConfig.js";
import { DataTypes } from "sequelize";

const languages = Sequelize.define("language", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },

    js_id: {
        type: DataTypes.UUID,
        references: {
            model: "jobSeekers",
            key: "id",
        }
    },

    language: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false
});
    (async () => {
    await Sequelize.sync()
})();

export default languages;

