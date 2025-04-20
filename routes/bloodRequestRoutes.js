import express from 'express';
import {
  createBloodRequest,
  getAllBloodRequests,
  getMatchingDonors,
  updateBloodRequestStatus,
} from '../controllers/bloodRequestController.js';

const router = express.Router();

// Create a new blood request
router.post('/', createBloodRequest);

// Get all blood requests
router.get('/', getAllBloodRequests);

// Get matching donors for a specific blood request
router.get('/:requestId/matching-donors', getMatchingDonors);

// Update blood request status
router.patch('/:requestId/status', updateBloodRequestStatus);

export default router; 