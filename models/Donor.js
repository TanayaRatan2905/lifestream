// import { DataTypes } from 'sequelize';
// import sequelize from '../config/db.js';

// const Donor = sequelize.define('Donor', {
//   name: DataTypes.STRING,
//   age: DataTypes.INTEGER,
//   gender: DataTypes.STRING,
//   blood_group: DataTypes.STRING,
//   contact_number: DataTypes.STRING,
//   email: DataTypes.STRING,
//   address: DataTypes.TEXT,
//   last_donation_date: DataTypes.DATE,
//   is_eligible: {
//     type: DataTypes.BOOLEAN,
//     defaultValue: true,
//   },
//   haemoglobin_level: DataTypes.DECIMAL(4, 1),
//   smoking_history: {
//     type: DataTypes.BOOLEAN,
//     defaultValue: false,
//   },
// });

// export default Donor;
// File: models/Donor.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

console.log('Donor model definition started.');

const Donor = sequelize.define('Donor', {
  donor_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: DataTypes.STRING,
  age: DataTypes.INTEGER,
  gender: DataTypes.STRING,
  blood_group: DataTypes.STRING,
  contact_number: DataTypes.STRING,
  email: DataTypes.STRING,
  address: DataTypes.TEXT,
  last_donation_date: DataTypes.DATE,
  is_eligible: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  haemoglobin_level: DataTypes.DECIMAL(4, 1),
  smoking_history: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
},
{
  tableName: 'User',
  timestamps: false, // Disable automatic createdAt and updatedAt
  underscored: false,
});

console.log('Donor model defined:', Donor);

export default Donor;