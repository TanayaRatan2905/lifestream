// // // // const Donor = require('../models/Donor');

// // // // exports.createDonor = async (req, res) => {
// // // //   try {
// // // //     const donor = await Donor.create(req.body);
// // // //     res.status(201).json(donor);
// // // //   } catch (err) {
// // // //     res.status(500).json({ error: err.message });
// // // //   }
// // // // };

// // // // exports.getAllDonors = async (req, res) => {
// // // //   const donors = await Donor.findAll();
// // // //   res.json(donors);
// // // // };

// // // // exports.getDonorById = async (req, res) => {
// // // //   const donor = await Donor.findByPk(req.params.id);
// // // //   if (donor) res.json(donor);
// // // //   else res.status(404).json({ error: 'Donor not found' });
// // // // };

// // // // exports.updateDonor = async (req, res) => {
// // // //   const donor = await Donor.findByPk(req.params.id);
// // // //   if (donor) {
// // // //     await donor.update(req.body);
// // // //     res.json(donor);
// // // //   } else {
// // // //     res.status(404).json({ error: 'Donor not found' });
// // // //   }
// // // // };

// // // // exports.deleteDonor = async (req, res) => {
// // // //   const donor = await Donor.findByPk(req.params.id);
// // // //   if (donor) {
// // // //     await donor.destroy();
// // // //     res.json({ message: 'Donor deleted' });
// // // //   } else {
// // // //     res.status(404).json({ error: 'Donor not found' });
// // // //   }
// // // // };
// // // // controllers/donorController.js
// // // import Donor from '../models/Donor.js'; // Make sure you're using ES module style

// // // // Create a donor
// // // export const createDonor = async (req, res) => {
// // //   try {
// // //     const donor = await Donor.create(req.body);
// // //     res.status(201).json(donor);
// // //   } catch (error) {
// // //     res.status(400).json({ error: error.message });
// // //   }
// // // };

// // // // Get all donors
// // // export const getAllDonors = async (req, res) => {
// // //   try {
// // //     const donors = await Donor.findAll();
// // //     res.status(200).json(donors);
// // //   } catch (error) {
// // //     res.status(500).json({ error: error.message });
// // //   }
// // // };

// // // // Get donor by ID
// // // export const getDonorById = async (req, res) => {
// // //   try {
// // //     const donor = await Donor.findByPk(req.params.id);
// // //     if (donor) {
// // //       res.status(200).json(donor);
// // //     } else {
// // //       res.status(404).json({ error: 'Donor not found' });
// // //     }
// // //   } catch (error) {
// // //     res.status(500).json({ error: error.message });
// // //   }
// // // };

// // // // Update donor
// // // export const updateDonor = async (req, res) => {
// // //   try {
// // //     const donor = await Donor.findByPk(req.params.id);
// // //     if (donor) {
// // //       await donor.update(req.body);
// // //       res.status(200).json(donor);
// // //     } else {
// // //       res.status(404).json({ error: 'Donor not found' });
// // //     }
// // //   } catch (error) {
// // //     res.status(500).json({ error: error.message });
// // //   }
// // // };

// // // // Delete donor
// // // export const deleteDonor = async (req, res) => {
// // //   try {
// // //     const donor = await Donor.findByPk(req.params.id);
// // //     if (donor) {
// // //       await donor.destroy();
// // //       res.status(204).end();
// // //     } else {
// // //       res.status(404).json({ error: 'Donor not found' });
// // //     }
// // //   } catch (error) {
// // //     res.status(500).json({ error: error.message });
// // //   }
// // // };
// // import Donor from '../models/Donor.js'; // Make sure you're using ES module style

// // // Create a donor
// // export const createDonor = async (req, res) => {
// //   console.log('createDonor controller called with data:', req.body);
// //   try {
// //     const donor = await Donor.create(req.body);
// //     console.log('Donor created successfully:', donor);
// //     res.status(201).json(donor);
// //   } catch (error) {
// //     console.error('Error creating donor:', error);
// //     res.status(400).json({ error: error.message });
// //   }
// // };

// // // Get all donors
// // export const getAllDonors = async (req, res) => {
// //   console.log('getAllDonors controller called.');
// //   try {
// //     const donors = await Donor.findAll();
// //     console.log('Donors retrieved:', donors);
// //     res.status(200).json(donors);
// //   } catch (error) {
// //     console.error('Error getting all donors:', error);
// //     res.status(500).json({ error: error.message });
// //   }
// // };

// // // Get donor by ID
// // export const getDonorById = async (req, res) => {
// //   console.log('getDonorById controller called with ID:', req.params.id);
// //   try {
// //     const donor = await Donor.findByPk(req.params.id);
// //     if (donor) {
// //       console.log('Donor found:', donor);
// //       res.status(200).json(donor);
// //     } else {
// //       console.log('Donor not found with ID:', req.params.id);
// //       res.status(404).json({ error: 'Donor not found' });
// //     }
// //   } catch (error) {
// //     console.error('Error getting donor by ID:', error);
// //     res.status(500).json({ error: error.message });
// //   }
// // };

// // // Update donor
// // export const updateDonor = async (req, res) => {
// //   console.log('updateDonor controller called with ID:', req.params.id, 'and data:', req.body);
// //   try {
// //     const donor = await Donor.findByPk(req.params.id);
// //     if (donor) {
// //       await donor.update(req.body);
// //       const updatedDonor = await Donor.findByPk(req.params.id); // Fetch updated record
// //       console.log('Donor updated successfully:', updatedDonor);
// //       res.status(200).json(updatedDonor);
// //     } else {
// //       console.log('Donor not found for update with ID:', req.params.id);
// //       res.status(404).json({ error: 'Donor not found' });
// //     }
// //   } catch (error) {
// //     console.error('Error updating donor:', error);
// //     res.status(500).json({ error: error.message });
// //   }
// // };

// // // Delete donor
// // export const deleteDonor = async (req, res) => {
// //   console.log('deleteDonor controller called with ID:', req.params.id);
// //   try {
// //     const donor = await Donor.findByPk(req.params.id);
// //     if (donor) {
// //       await donor.destroy();
// //       console.log('Donor deleted successfully with ID:', req.params.id);
// //       res.status(204).end();
// //     } else {
// //       console.log('Donor not found for deletion with ID:', req.params.id);
// //       res.status(404).json({ error: 'Donor not found' });
// //     }
// //   } catch (error) {
// //     console.error('Error deleting donor:', error);
// //     res.status(500).json({ error: error.message });
// //   }
// // };

// // File: controllers/donorController.js
// import Donor from '../models/Donor.js'; // Make sure you're using ES module style

// // Create a donor
// export const createDonor = async (req, res) => {
//   console.log('createDonor controller called with data:', req.body);
//   try {
//     const donor = await Donor.create(req.body);
//     console.log('Donor created successfully:', donor);
//     res.status(201).json(donor);
//   } catch (error) {
//     console.error('Error creating donor:', error);
//     res.status(400).json({ error: error.message });
//   }
// };

// // Get all donors
// export const getAllDonors = async (req, res) => {
//   console.log('getAllDonors controller called.');
//   try {
//     const donors = await Donor.findAll();
//     console.log('Donors retrieved:', donors);
//     res.status(200).json(donors);
//   } catch (error) {
//     console.error('Error getting all donors:', error);
//     res.status(500).json({ error: error.message });
//   }
// };

// // Get donor by ID and check eligibility
// export const getDonorById = async (req, res) => {
//   console.log('getDonorById controller called with ID:', req.params.id);
//   try {
//     const donor = await Donor.findByPk(req.params.id);
//     if (donor) {
//       console.log('Donor found:', donor);
//       const { age, haemoglobin_level, smoking_history } = donor.dataValues;

//       const isEligible = age >= 18 && haemoglobin_level >= 12.5 && !smoking_history; // Assuming a minimum haemoglobin level of 12.5 for eligibility

//       if (isEligible) {
//         res.status(200).json({ ...donor.dataValues, eligibility_status: 'You are eligible' });
//       } else {
//         res.status(200).json({ ...donor.dataValues, eligibility_status: 'You are not eligible' });
//       }
//     } else {
//       console.log('Donor not found with ID:', req.params.id);
//       res.status(404).json({ error: 'Donor not found' });
//     }
//   } catch (error) {
//     console.error('Error getting donor by ID:', error);
//     res.status(500).json({ error: error.message });
//   }
// };

// // Update donor
// export const updateDonor = async (req, res) => {
//   console.log('updateDonor controller called with ID:', req.params.id, 'and data:', req.body);
//   try {
//     const donor = await Donor.findByPk(req.params.id);
//     if (donor) {
//       await donor.update(req.body);
//       const updatedDonor = await Donor.findByPk(req.params.id); // Fetch updated record
//       console.log('Donor updated successfully:', updatedDonor);
//       res.status(200).json(updatedDonor);
//     } else {
//       console.log('Donor not found for update with ID:', req.params.id);
//       res.status(404).json({ error: 'Donor not found' });
//     }
//   } catch (error) {
//     console.error('Error updating donor:', error);
//     res.status(500).json({ error: error.message });
//   }
// };

// // Delete donor
// export const deleteDonor = async (req, res) => {
//   console.log('deleteDonor controller called with ID:', req.params.id);
//   try {
//     const donor = await Donor.findByPk(req.params.id);
//     if (donor) {
//       await donor.destroy();
//       console.log('Donor deleted successfully with ID:', req.params.id);
//       res.status(204).end();
//     } else {
//       console.log('Donor not found for deletion with ID:', req.params.id);
//       res.status(404).json({ error: 'Donor not found' });
//     }
//   } catch (error) {
//     console.error('Error deleting donor:', error);
//     res.status(500).json({ error: error.message });
//   }
// };
// File: controllers/donorController.js
import Donor from '../models/Donor.js'; // Make sure you're using ES module style

// Create a donor
export const createDonor = async (req, res) => {
  console.log('createDonor controller called with data:', req.body);
  try {
    const { age, haemoglobin_level, smoking_history, ...restOfBody } = req.body;

    const isEligible = age >= 18 && parseFloat(haemoglobin_level) >= 12.5 && !smoking_history;

    const donor = await Donor.create({ ...restOfBody, is_eligible: isEligible });
    console.log('Donor created successfully:', donor);
    res.status(201).json(donor);
  } catch (error) {
    console.error('Error creating donor:', error);
    res.status(400).json({ error: error.message });
  }
};

// Get all donors
export const getAllDonors = async (req, res) => {
  console.log('getAllDonors controller called.');
  try {
    const donors = await Donor.findAll();
    console.log('Donors retrieved:', donors);
    res.status(200).json(donors);
  } catch (error) {
    console.error('Error getting all donors:', error);
    res.status(500).json({ error: error.message });
  }
};

// Get donor by ID
export const getDonorById = async (req, res) => {
  console.log('getDonorById controller called with ID:', req.params.id);
  try {
    const donor = await Donor.findByPk(req.params.id);
    if (donor) {
      console.log('Donor found:', donor);
      res.status(200).json(donor);
    } else {
      console.log('Donor not found with ID:', req.params.id);
      res.status(404).json({ error: 'Donor not found' });
    }
  } catch (error) {
    console.error('Error getting donor by ID:', error);
    res.status(500).json({ error: error.message });
  }
};

// Update donor
export const updateDonor = async (req, res) => {
  console.log('updateDonor controller called with ID:', req.params.id, 'and data:', req.body);
  try {
    const { age, haemoglobin_level, smoking_history, ...restOfBody } = req.body;

    const isEligible = age >= 18 && parseFloat(haemoglobin_level) >= 12.5 && !smoking_history;

    const donor = await Donor.findByPk(req.params.id);
    if (donor) {
      await donor.update({ ...restOfBody, is_eligible: isEligible });
      const updatedDonor = await Donor.findByPk(req.params.id); // Fetch updated record
      console.log('Donor updated successfully:', updatedDonor);
      res.status(200).json(updatedDonor);
    } else {
      console.log('Donor not found for update with ID:', req.params.id);
      res.status(404).json({ error: 'Donor not found' });
    }
  } catch (error) {
    console.error('Error updating donor:', error);
    res.status(500).json({ error: error.message });
  }
};

// Delete donor
export const deleteDonor = async (req, res) => {
  console.log('deleteDonor controller called with ID:', req.params.id);
  try {
    const donor = await Donor.findByPk(req.params.id);
    if (donor) {
      await donor.destroy();
      console.log('Donor deleted successfully with ID:', req.params.id);
      res.status(204).end();
    } else {
      console.log('Donor not found for deletion with ID:', req.params.id);
      res.status(404).json({ error: 'Donor not found' });
    }
  } catch (error) {
    console.error('Error deleting donor:', error);
    res.status(500).json({ error: error.message });
  }
};