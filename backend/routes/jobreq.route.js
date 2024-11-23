// const express = require('express');
// const { 
//     getJobRequirementByJobId, 
//     addJobLink, 
//     addJobReview, 
//     addJobAttachment, 
//     deleteJobLink, 
//     deleteJobReview 
// } = require('../controllers/jobRequirements.controller'); // Importing the controller functions
// const multer = require('multer');
// const router = express.Router();

// // File upload configuration using multer
// const upload = multer({ dest: 'uploads/' });

// // Get job requirements, links, reviews, and attachments
// router.get('/:jobId', getJobRequirementByJobId);

// // Add a new link to job requirements
// router.post('/:jobId/links', addJobLink);

// // Add a new review to job requirements
// router.post('/:jobId/reviews', addJobReview);

// // Upload file as attachment
// router.post('/:jobId/attachments', upload.single('file'), addJobAttachment);

// // Delete a link
// router.delete('/:jobId/links/:linkId', deleteJobLink);

// // Delete a review
// router.delete('/:jobId/reviews/:reviewId', deleteJobReview);

// module.exports = router;
import express from 'express';
import { 
  getJobRequirementByJobId, 
  addJobLink, 
  addJobReview, 
  addJobAttachment, 
  deleteJobLink, 
  deleteJobReview 
} from '../controllers/JobController'; // Import controller functions
import { singleUpload } from '../middlewares/mutler.js'; // Import singleUpload middleware

const router = express.Router();

// Route to get job requirements by jobId
router.get('/job/:jobId/requirements', getJobRequirementByJobId);

// Route to add a new link to job requirements
router.post('/job/:jobId/requirements/link', addJobLink);

// Route to add a new review to job requirements
router.post('/job/:jobId/requirements/review', addJobReview);

// Route to upload an attachment (with single file upload)
router.post('/job/:jobId/requirements/attachment', singleUpload, addJobAttachment);

// Route to delete a link from job requirements
router.delete('/job/:jobId/requirements/link/:linkId', deleteJobLink);

// Route to delete a review from job requirements
router.delete('/job/:jobId/requirements/review/:reviewId', deleteJobReview);

export default router;

