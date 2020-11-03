/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'user',

  attributes: {
    id: { type: 'number', autoIncrement: true },
    name: { type: 'string'},
    email: { type: 'string'},
    password: { type: 'string'}
  },

};

