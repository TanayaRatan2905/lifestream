import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const BloodRequest = sequelize.define('BloodRequest', {
  request_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  patient_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  blood_group: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hospital_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hospital_address: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  contact_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  required_units: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  urgency_level: {
    type: DataTypes.ENUM('low', 'medium', 'high', 'critical'),
    defaultValue: 'medium',
  },
  status: {
    type: DataTypes.ENUM('pending', 'fulfilled', 'cancelled'),
    defaultValue: 'pending',
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'BloodRequest',
  timestamps: true,
  underscored: true,
});

export default BloodRequest; 