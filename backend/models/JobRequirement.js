const mongoose = require('mongoose');

// Schema for user reviews on job requirements
const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // User who gave the review
  content: String, // Content of the review
  createdAt: { type: Date, default: Date.now }, // Timestamp of the review
});

// Schema for links related to job requirements
const linkSchema = new mongoose.Schema({
  url: String, // URL for a related resource
  addedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // User who added the link
  createdAt: { type: Date, default: Date.now }, // Timestamp of the added link
});

// Schema for file attachments related to job requirements
const attachmentSchema = new mongoose.Schema({
  filePath: String, // Path to the file
  addedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // User who added the file
  createdAt: { type: Date, default: Date.now }, // Timestamp of the added file
});

// Main schema for job requirements
const jobRequirementSchema = new mongoose.Schema({
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' }, // Reference to the Job model
  requirements: [String], // List of job requirements
  reviews: [reviewSchema], // List of reviews associated with the job requirements
  links: [linkSchema], // List of links associated with the job requirements
  attachments: [attachmentSchema], // List of attachments related to job requirements
});

const JobRequirement = mongoose.model('JobRequirement', jobRequirementSchema);

module.exports = JobRequirement;
