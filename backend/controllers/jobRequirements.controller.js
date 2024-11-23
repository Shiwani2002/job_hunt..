import { JobRequirement } from '../models/JobRequirement'; // Importing the JobRequirement model

// Get job requirements by jobId
export const getJobRequirementByJobId = async (req, res) => {
  try {
    const jobRequirements = await JobRequirement.findOne({ jobId: req.params.jobId });
    if (!jobRequirements) {
      return res.status(404).json({ message: 'Job requirements not found' });
    }
    res.json(jobRequirements);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new link to job requirements
export const addJobLink = async (req, res) => {
  const { url, userId } = req.body;
  try {
    let jobRequirements = await JobRequirement.findOne({ jobId: req.params.jobId });
    if (!jobRequirements) {
      jobRequirements = new JobRequirement({ jobId: req.params.jobId, links: [], reviews: [], attachments: [] });
    }
    jobRequirements.links.push({ url, addedBy: userId });
    await jobRequirements.save();
    res.json({ message: 'Link added', links: jobRequirements.links });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new review to job requirements
export const addJobReview = async (req, res) => {
  const { content, userId } = req.body;
  try {
    let jobRequirements = await JobRequirement.findOne({ jobId: req.params.jobId });
    if (!jobRequirements) {
      jobRequirements = new JobRequirement({ jobId: req.params.jobId, links: [], reviews: [], attachments: [] });
    }
    jobRequirements.reviews.push({ content, user: userId });
    await jobRequirements.save();
    res.json({ message: 'Review added', reviews: jobRequirements.reviews });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Upload a file as attachment to job requirements
export const addJobAttachment = async (req, res) => {
  const { userId } = req.body;
  try {
    let jobRequirements = await JobRequirement.findOne({ jobId: req.params.jobId });
    if (!jobRequirements) {
      jobRequirements = new JobRequirement({ jobId: req.params.jobId, links: [], reviews: [], attachments: [] });
    }
    jobRequirements.attachments.push({ filePath: req.file.path, addedBy: userId });
    await jobRequirements.save();
    res.json({ message: 'File uploaded', attachments: jobRequirements.attachments });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a link from job requirements
export const deleteJobLink = async (req, res) => {
  try {
    const jobRequirements = await JobRequirement.findOne({ jobId: req.params.jobId });
    if (!jobRequirements) return res.status(404).json({ message: 'Job requirements not found' });

    jobRequirements.links = jobRequirements.links.filter(link => link._id != req.params.linkId);
    await jobRequirements.save();
    res.json({ message: 'Link deleted', links: jobRequirements.links });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a review from job requirements
export const deleteJobReview = async (req, res) => {
  try {
    const jobRequirements = await JobRequirement.findOne({ jobId: req.params.jobId });
    if (!jobRequirements) return res.status(404).json({ message: 'Job requirements not found' });

    jobRequirements.reviews = jobRequirements.reviews.filter(review => review._id != req.params.reviewId);
    await jobRequirements.save();
    res.json({ message: 'Review deleted', reviews: jobRequirements.reviews });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
