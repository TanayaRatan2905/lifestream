// // File: routes/donorRoutes.js
// import express from 'express';
// import {
//   createDonor,
//   getAllDonors,
//   getDonorById,
//   updateDonor,
//   deleteDonor
// } from '../controllers/donorController.js';

// const router = express.Router();

// router.post('/', createDonor);
// router.get('/', getAllDonors);
// router.get('/:id', getDonorById);
// router.put('/:id', updateDonor);
// router.delete('/:id', deleteDonor);

// export default router;
import express from 'express';
import {
  createDonor,
  getAllDonors,
  getDonorById,
  updateDonor,
  deleteDonor
} from '../controllers/donorController.js';

const router = express.Router();
console.log('Donor routes initialized.');

router.post('/', createDonor);
console.log('POST /donors route defined.');
router.get('/', getAllDonors);
console.log('GET /donors route defined.');
router.get('/:id', getDonorById);
console.log('GET /donors/:id route defined.');
router.put('/:id', updateDonor);
console.log('PUT /donors/:id route defined.');
router.delete('/:id', deleteDonor);
console.log('DELETE /donors/:id route defined.');

export default router;