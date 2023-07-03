import sequelize from "../database.js";
import { DataTypes, Model } from "sequelize";

class User extends Model{}
class Division extends Model{}
class Hall extends Model{}
class Booking extends Model{}
class Role extends Model{}

User.init({
    name: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    beginDate: {type: DataTypes.DATE, allowNull: true},
    endDate: {type: DataTypes.DATE, allowNull: true},
    avatar: {type: DataTypes.STRING, allowNull: true},
    division: {type: DataTypes.INTEGER, allowNull: true},
}, {
    sequelize, 
    //name: 'user'
});

Division.init({
    name: {type: DataTypes.STRING}
}, {
    sequelize, 
    //name: 'division'
});

Hall.init({
    name: {type: DataTypes.STRING},
    volume: {type: DataTypes.INTEGER}
}, {
    sequelize, 
    //name: 'hall'
});

Booking.init({
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey:true},
    description: {type: DataTypes.STRING},
    beginDate: {type: DataTypes.DATE, allowNull: true},
    endDate: {type: DataTypes.DATE,  allowNull: true}
}, {
    sequelize, 
    //name: 'booking'
});

Role.init({
    name: {type: DataTypes.STRING, allowNull: false}
}, {sequelize, timestamps: false});



Role.hasOne(User);
Division.hasMany(User);
User.belongsToMany(Hall, {through: Booking});
Hall.belongsToMany(User, {through: Booking});


export {User, Role, Hall, Booking, Division};