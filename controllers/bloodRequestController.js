import BloodRequest from '../models/BloodRequest.js';
import Donor from '../models/Donor.js';

// Create a new blood request
export const createBloodRequest = async (req, res) => {
  try {
    const bloodRequest = await BloodRequest.create(req.body);
    
    // Find matching eligible donors
    const matchingDonors = await Donor.findAll({
      where: {
        blood_group: bloodRequest.blood_group,
        is_eligible: true,
      },
    });

    // Return both the created request and matching donors
    res.status(201).json({
      success: true,
      data: {
        bloodRequest,
        matchingDonors,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

// Get all blood requests
export const getAllBloodRequests = async (req, res) => {
  try {
    const bloodRequests = await BloodRequest.findAll({
      order: [['created_at', 'DESC']],
    });
    res.status(200).json({
      success: true,
      data: bloodRequests,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// Get matching donors for a specific blood request
export const getMatchingDonors = async (req, res) => {
  try {
    const { requestId } = req.params;
    
    const bloodRequest = await BloodRequest.findByPk(requestId);
    if (!bloodRequest) {
      return res.status(404).json({
        success: false,
        error: 'Blood request not found',
      });
    }

    const matchingDonors = await Donor.findAll({
      where: {
        blood_group: bloodRequest.blood_group,
        is_eligible: true,
      },
    });

    res.status(200).json({
      success: true,
      data: matchingDonors,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// Update blood request status
export const updateBloodRequestStatus = async (req, res) => {
  try {
    const { requestId } = req.params;
    const { status } = req.body;

    const bloodRequest = await BloodRequest.findByPk(requestId);
    if (!bloodRequest) {
      return res.status(404).json({
        success: false,
        error: 'Blood request not found',
      });
    }

    bloodRequest.status = status;
    await bloodRequest.save();

    res.status(200).json({
      success: true,
      data: bloodRequest,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}; 