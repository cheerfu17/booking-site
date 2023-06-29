import sequelize from "../database.js";
import { DataTypes, Model } from "sequelize";

class User extends Model{}

User.init({
    name: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    beginDate: {type: DataTypes.DATE, allowNull: true},
    endDate: {type: DataTypes.DATE, allowNull: true},
    avatar: {type: DataTypes.STRING, allowNull: true},
    division: {type: DataTypes.INTEGER, allowNull: true},
    roles: {type: DataTypes.ARRAY, allowNull: true}
}, {
    sequelize, 
    name: 'user'
});

