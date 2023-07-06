import { Sequelize } from "sequelize";
import path from "path";
import { currDir } from "../OtherModules/getDir.js";

const __dirname = currDir(import.meta.url);
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: path.resolve(__dirname, "..", "database.db"),
    logging: false
});

export default sequelize;