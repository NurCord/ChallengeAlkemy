import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import {User} from '../models/usuario'
import {Operation} from '../models/operation'
import {Category} from '../models/category.js'
dotenv.config();
const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;

export let sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`,
    { logging: false, native: false }
  );


User.hasMany(Operation, {as: 'operation', foreignKey: 'user_id'});
Operation.belongsTo(User, {as: 'operation', foreignKey: 'user_id'});

Operation.hasOne(Category, {as: 'operation', foreignKey: 'cagory_id'});
Category.belongsToMany(Operation, {as: 'cagory', foreignKey: 'cagory_id'});



