

// // import React, { useState, useEffect } from 'react';
// // import { Badge } from './ui/badge';
// // import { Button } from './ui/button';
// // import axios from 'axios';
// // import { toast } from 'sonner';

// // const Jobreq = ({ jobId }) => {
// //   const [jobRequirements, setJobRequirements] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   // States for review form
// //   const [review, setReview] = useState('');
// //   const [userId, setUserId] = useState('');

// //   // States for file upload form
// //   const [file, setFile] = useState(null);

// //   // Fetch job requirements when the component loads
// //   useEffect(() => {
// //     const fetchJobRequirements = async () => {
// //       try {
// //         const response = await axios.get(`/api/job/${jobId}/requirements`);
// //         setJobRequirements(response.data);
// //         setLoading(false);
// //       } catch (err) {
// //         setError(err.response?.data?.message || 'Failed to fetch job requirements');
// //         setLoading(false);
// //       }
// //     };
// //     fetchJobRequirements();
// //   }, [jobId]);

// //   // Add a new review
// //   const handleReviewSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await axios.post(`/api/job/${jobId}/requirements/review`, {
// //         content: review,
// //         userId: userId,
// //       });
// //       setJobRequirements(response.data); // Update job requirements with the new review
// //       setReview(''); // Clear the form
// //       setUserId('');
// //       toast.success('Review added successfully');
// //     } catch (err) {
// //       setError(err.response?.data?.message || 'Failed to add review');
// //       toast.error('Failed to add review');
// //     }
// //   };

// //   // Handle file upload
// //   const handleFileSubmit = async (e) => {
// //     e.preventDefault();
// //     const formData = new FormData();
// //     formData.append('file', file);
// //     formData.append('userId', userId);

// //     try {
// //       const response = await axios.post(`/api/job/${jobId}/requirements/attachment`, formData, {
// //         headers: { 'Content-Type': 'multipart/form-data' },
// //       });
// //       setJobRequirements(response.data); // Update with the new attachment
// //       setFile(null); // Clear the file input
// //       setUserId('');
// //       toast.success('File uploaded successfully');
// //     } catch (err) {
// //       setError(err.response?.data?.message || 'Failed to upload file');
// //       toast.error('Failed to upload file');
// //     }
// //   };

// //   if (loading) return <p className="text-center text-lg">Loading...</p>;
// //   if (error) return <p className="text-center text-red-500">Error: {error}</p>;

// //   return (
// //     <div className="max-w-7xl mx-auto my-10">
// //       <div className="border-b-2 border-b-gray-300 py-4 mb-6">
// //         <h1 className="text-xl font-bold text-gray-900">Job Requirements for Job ID: {jobId}</h1>
// //       </div>

// //       {jobRequirements ? (
// //         <div className="space-y-6">
// //           <div>
// //             <h3 className="font-bold text-lg">Requirements:</h3>
// //             <ul className="list-disc pl-6">
// //               {jobRequirements.requirements && jobRequirements.requirements.length > 0 ? (
// //                 jobRequirements.requirements.map((req, index) => (
// //                   <li key={index} className="text-gray-700">
// //                     {req}
// //                   </li>
// //                 ))
// //               ) : (
// //                 <p className="text-gray-500">No requirements available</p>
// //               )}
// //             </ul>
// //           </div>

// //           <div>
// //             <h3 className="font-bold text-lg">Reviews:</h3>
// //             <ul className="list-disc pl-6">
// //               {jobRequirements.reviews && jobRequirements.reviews.length > 0 ? (
// //                 jobRequirements.reviews.map((review) => (
// //                   <li key={review._id} className="text-gray-700">
// //                     {review.content} - <span className="text-sm text-gray-500">by {review.user}</span>
// //                   </li>
// //                 ))
// //               ) : (
// //                 <p className="text-gray-500">No reviews available</p>
// //               )}
// //             </ul>
// //           </div>

// //           <div>
// //             <h3 className="font-bold text-lg">Attachments:</h3>
// //             <ul className="list-disc pl-6">
// //               {jobRequirements.attachments && jobRequirements.attachments.length > 0 ? (
// //                 jobRequirements.attachments.map((attachment) => (
// //                   <li key={attachment._id} className="text-gray-700">
// //                     <a href={attachment.filePath} className="text-blue-600 underline" download>
// //                       {attachment.fileName}
// //                     </a>
// //                   </li>
// //                 ))
// //               ) : (
// //                 <p className="text-gray-500">No attachments available</p>
// //               )}
// //             </ul>
// //           </div>

// //           {/* Add Review Form */}
// //           <div>
// //             <form onSubmit={handleReviewSubmit} className="space-y-4">
// //               <h4 className="font-bold text-lg">Add a Review:</h4>
// //               <input
// //                 value={review}
// //                 onChange={(e) => setReview(e.target.value)}
// //                 placeholder="Enter your review"
// //                 className="w-full p-2 border rounded-lg"
// //                 required
// //               />
// //               <input
// //                 value={userId}
// //                 onChange={(e) => setUserId(e.target.value)}
// //                 placeholder="User ID"
// //                 className="w-full p-2 border rounded-lg"
// //                 required
// //               />
// //               <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white">
// //                 Submit Review
// //               </Button>
// //             </form>
// //           </div>

// //           {/* File Upload Form */}
// //           <div>
// //             <form onSubmit={handleFileSubmit} className="space-y-4">
// //               <h4 className="font-bold text-lg">Upload Attachment:</h4>
// //               <input
// //                 type="file"
// //                 onChange={(e) => setFile(e.target.files[0])}
// //                 className="w-full p-2 border rounded-lg"
// //                 required
// //               />
// //               <input
// //                 value={userId}
// //                 onChange={(e) => setUserId(e.target.value)}
// //                 placeholder="User ID"
// //                 className="w-full p-2 border rounded-lg"
// //                 required
// //               />
// //               <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
// //                 Upload File
// //               </Button>
// //             </form>
// //           </div>
// //         </div>
// //       ) : (
// //         <p className="text-gray-500">No job requirements found</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default Jobreq;
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Jobreq = ({ jobId }) => {
//   const [jobRequirements, setJobRequirements] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // States for review form
//   const [review, setReview] = useState("");
//   const [userId, setUserId] = useState("");

//   // States for file upload form
//   const [file, setFile] = useState(null);

//   // States for notes
//   const [note, setNote] = useState("");
//   const [notesList, setNotesList] = useState([]);

//   // States for links
//   const [link, setLink] = useState("");
//   const [linksList, setLinksList] = useState([]);

//   // Fetch job requirements when the component loads
//   useEffect(() => {
//     const fetchJobRequirements = async () => {
//       try {
//         const response = await axios.get(`/api/job/${jobId}/requirements`);
//         setJobRequirements(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError(err.response?.data?.message || "Failed to fetch job requirements");
//         setLoading(false);
//       }
//     };
//     fetchJobRequirements();
//   }, [jobId]);

//   // Add a new review
//   const handleReviewSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(`/api/job/${jobId}/requirements/review`, {
//         content: review,
//         userId: userId,
//       });
//       setJobRequirements(response.data); // Update job requirements with the new review
//       setReview(""); // Clear the form
//       setUserId("");
//     } catch (err) {
//       setError(err.response?.data?.message || "Failed to add review");
//     }
//   };

//   // Handle file upload
//   const handleFileSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("userId", userId);

//     try {
//       const response = await axios.post(`/api/job/${jobId}/requirements/attachment`, formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       setJobRequirements(response.data); // Update with the new attachment
//       setFile(null); // Clear the file input
//       setUserId("");
//     } catch (err) {
//       setError(err.response?.data?.message || "Failed to upload file");
//     }
//   };

//   // Add a note
//   const handleNoteSubmit = (e) => {
//     e.preventDefault();
//     if (note) {
//       setNotesList([...notesList, note]);
//       setNote(""); // Clear the input
//     }
//   };

//   // Add a link
//   const handleLinkSubmit = (e) => {
//     e.preventDefault();
//     if (link) {
//       setLinksList([...linksList, link]);
//       setLink(""); // Clear the input
//     }
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <h2>Job Requirements for Job ID: {jobId}</h2>

//       {jobRequirements ? (
//         <div>
//           <h3>Requirements:</h3>
//           <ul>
//             {jobRequirements.requirements && jobRequirements.requirements.length > 0 ? (
//               jobRequirements.requirements.map((req, index) => (
//                 <li key={index}>{req}</li>
//               ))
//             ) : (
//               <p>No requirements available</p>
//             )}
//           </ul>

//           <h3>Reviews:</h3>
//           <ul>
//             {jobRequirements.reviews && jobRequirements.reviews.length > 0 ? (
//               jobRequirements.reviews.map((review) => (
//                 <li key={review._id}>
//                   {review.content} - by {review.user}
//                 </li>
//               ))
//             ) : (
//               <p>No reviews available</p>
//             )}
//           </ul>

//           <h3>Attachments:</h3>
//           <ul>
//             {jobRequirements.attachments && jobRequirements.attachments.length > 0 ? (
//               jobRequirements.attachments.map((attachment) => (
//                 <li key={attachment._id}>
//                   <a href={attachment.filePath} download>
//                     {attachment.fileName}
//                   </a>
//                 </li>
//               ))
//             ) : (
//               <p>No attachments available</p>
//             )}
//           </ul>

//           {/* Notes Section */}
//           <h3>Add Your Notes:</h3>
//           <form onSubmit={handleNoteSubmit}>
//             <input
//               type="text"
//               value={note}
//               onChange={(e) => setNote(e.target.value)}
//               placeholder="Enter your note"
//               required
//             />
//             <button type="submit">Add Note</button>
//           </form>

//           <div style={{ overflowX: "auto", whiteSpace: "nowrap", marginTop: "10px" }}>
//             {notesList.length > 0 ? (
//               notesList.map((n, index) => (
//                 <div key={index} style={{ display: "inline-block", padding: "5px", border: "1px solid #ccc", marginRight: "5px" }}>
//                   {n}
//                 </div>
//               ))
//             ) : (
//               <p>No notes available</p>
//             )}
//           </div>

//           {/* Links Section */}
//           <h3>Add Useful Links:</h3>
//           <form onSubmit={handleLinkSubmit}>
//             <input
//               type="url"
//               value={link}
//               onChange={(e) => setLink(e.target.value)}
//               placeholder="Enter your link"
//               required
//             />
//             <button type="submit">Add Link</button>
//           </form>

//           <div style={{ marginTop: "10px" }}>
//             {linksList.length > 0 ? (
//               linksList.map((l, index) => (
//                 <div key={index}>
//                   <a href={l} target="_blank" rel="noopener noreferrer">
//                     {l}
//                   </a>
//                 </div>
//               ))
//             ) : (
//               <p>No links available</p>
//             )}
//           </div>

//           {/* Add Review Form */}
//           <form onSubmit={handleReviewSubmit}>
//             <h4>Add a Review:</h4>
//             <input
//               value={review}
//               onChange={(e) => setReview(e.target.value)}
//               placeholder="Enter your review"
//               required
//             />
//             <input
//               value={userId}
//               onChange={(e) => setUserId(e.target.value)}
//               placeholder="User ID"
//               required
//             />
//             <button type="submit">Submit Review</button>
//           </form>

//           {/* File Upload Form */}
//           <form onSubmit={handleFileSubmit}>
//             <h4>Upload Attachment:</h4>
//             <input
//               type="file"
//               onChange={(e) => setFile(e.target.files[0])}
//               required
//             />
//             <input
//               value={userId}
//               onChange={(e) => setUserId(e.target.value)}
//               placeholder="User ID"
//               required
//             />
//             <button type="submit">Upload File</button>
//           </form>
//         </div>
//       ) : (
//         <p>No job requirements found</p>
//       )}
//     </div>
//   );
// };

// export default Jobreq;
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Jobreq = ({ jobId }) => {
//   const [jobRequirements, setJobRequirements] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // States for review form
//   const [review, setReview] = useState("");
//   const [userId, setUserId] = useState("");

//   // States for file upload form
//   const [file, setFile] = useState(null);

//   // States for notes
//   const [note, setNote] = useState("");
//   const [notesList, setNotesList] = useState([]);

//   // States for links
//   const [link, setLink] = useState("");
//   const [linksList, setLinksList] = useState([]);

//   // Fetch job requirements when the component loads
//   useEffect(() => {
//     const fetchJobRequirements = async () => {
//       try {
//         const response = await axios.get(`/api/job/${jobId}/requirements`);
//         setJobRequirements(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError(err.response?.data?.message || "Failed to fetch job requirements");
//         setLoading(false);
//       }
//     };
//     fetchJobRequirements();
//   }, [jobId]);

//   // Add a new review
//   const handleReviewSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(`/api/job/${jobId}/requirements/review`, {
//         content: review,
//         userId: userId,
//       });
//       setJobRequirements(response.data); // Update job requirements with the new review
//       setReview(""); // Clear the form
//       setUserId("");
//     } catch (err) {
//       setError(err.response?.data?.message || "Failed to add review");
//     }
//   };

//   // Handle file upload
//   const handleFileSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("userId", userId);

//     try {
//       const response = await axios.post(`/api/job/${jobId}/requirements/attachment`, formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       setJobRequirements(response.data); // Update with the new attachment
//       setFile(null); // Clear the file input
//       setUserId("");
//     } catch (err) {
//       setError(err.response?.data?.message || "Failed to upload file");
//     }
//   };

//   // Add a note
//   const handleNoteSubmit = (e) => {
//     e.preventDefault();
//     if (note) {
//       setNotesList([...notesList, note]);
//       setNote(""); // Clear the input
//     }
//   };

//   // Add a link
//   const handleLinkSubmit = (e) => {
//     e.preventDefault();
//     if (link) {
//       setLinksList([...linksList, link]);
//       setLink(""); // Clear the input
//     }
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <h2>Job Requirements for Job ID: {jobId}</h2>

//       {jobRequirements ? (
//         <div>
//           <h3>Requirements:</h3>
//           <ul>
//             {jobRequirements.requirements && jobRequirements.requirements.length > 0 ? (
//               jobRequirements.requirements.map((req, index) => (
//                 <li key={index}>{req}</li>
//               ))
//             ) : (
//               <p>No requirements available</p>
//             )}
//           </ul>

//           <h3>Reviews:</h3>
//           <ul>
//             {jobRequirements.reviews && jobRequirements.reviews.length > 0 ? (
//               jobRequirements.reviews.map((review) => (
//                 <li key={review._id}>
//                   {review.content} - by {review.user}
//                 </li>
//               ))
//             ) : (
//               <p>No reviews available</p>
//             )}
//           </ul>

//           <h3>Attachments:</h3>
//           <ul>
//             {jobRequirements.attachments && jobRequirements.attachments.length > 0 ? (
//               jobRequirements.attachments.map((attachment) => (
//                 <li key={attachment._id}>
//                   <a href={attachment.filePath} download>
//                     {attachment.fileName}
//                   </a>
//                 </li>
//               ))
//             ) : (
//               <p>No attachments available</p>
//             )}
//           </ul>

//           {/* Notes Section */}
//           <h3>Add Your Notes:</h3>
//           <form onSubmit={handleNoteSubmit}>
//             <input
//               type="text"
//               value={note}
//               onChange={(e) => setNote(e.target.value)}
//               placeholder="Enter your note"
//               required
//             />
//             <button type="submit">Add Note</button>
//           </form>

//           <div style={{ overflowX: "auto", whiteSpace: "nowrap", marginTop: "10px" }}>
//             {notesList.length > 0 ? (
//               notesList.map((n, index) => (
//                 <div key={index} style={{ display: "inline-block", padding: "5px", border: "1px solid #ccc", marginRight: "5px" }}>
//                   {n}
//                 </div>
//               ))
//             ) : (
//               <p>No notes available</p>
//             )}
//           </div>

//           {/* Links Section */}
//           <h3>Add Useful Links:</h3>
//           <form onSubmit={handleLinkSubmit}>
//             <input
//               type="url"
//               value={link}
//               onChange={(e) => setLink(e.target.value)}
//               placeholder="Enter your link"
//               required
//             />
//             <button type="submit">Add Link</button>
//           </form>

//           <div style={{ marginTop: "10px" }}>
//             {linksList.length > 0 ? (
//               linksList.map((l, index) => (
//                 <div key={index}>
//                   <a href={l} target="_blank" rel="noopener noreferrer">
//                     {l}
//                   </a>
//                 </div>
//               ))
//             ) : (
//               <p>No links available</p>
//             )}
//           </div>

//           {/* Add Review Form */}
//           <form onSubmit={handleReviewSubmit}>
//             <h4>Add a Review:</h4>
//             <input
//               value={review}
//               onChange={(e) => setReview(e.target.value)}
//               placeholder="Enter your review"
//               required
//             />
//             <input
//               value={userId}
//               onChange={(e) => setUserId(e.target.value)}
//               placeholder="User ID"
//               required
//             />
//             <button type="submit">Submit Review</button>
//           </form>

//           {/* File Upload Form */}
//           <form onSubmit={handleFileSubmit}>
//             <h4>Upload Attachment:</h4>
//             <input
//               type="file"
//               onChange={(e) => setFile(e.target.files[0])}
//               required
//             />
//             <input
//               value={userId}
//               onChange={(e) => setUserId(e.target.value)}
//               placeholder="User ID"
//               required
//             />
//             <button type="submit">Upload File</button>
//           </form>
//         </div>
//       ) : (
//         <p>No job requirements found</p>
//       )}
//     </div>
//   );
// };

// export default Jobreq;

import React, { useEffect, useState } from "react";
import axios from "axios";

const Jobreq = ({ jobId }) => {
  const [jobRequirements, setJobRequirements] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // States for review form
  const [review, setReview] = useState("");
  const [userId, setUserId] = useState("");

  // States for file upload form
  const [file, setFile] = useState(null);

  // States for notes
  const [note, setNote] = useState("");
  const [notesList, setNotesList] = useState([]);

  // States for links
  const [link, setLink] = useState("");
  const [linksList, setLinksList] = useState([]);

  // Fetch job requirements when the component loads
  useEffect(() => {
    const fetchJobRequirements = async () => {
      try {
        const response = await axios.get(`/api/job/${jobId}/requirements`);
        setJobRequirements(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch job requirements");
        setLoading(false);
      }
    };
    fetchJobRequirements();
  }, [jobId]);

  // Add a new review
  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/job/${jobId}/requirements/review`, {
        content: review,
        userId: userId,
      });
      setJobRequirements((prev) => ({ ...prev, reviews: response.data.reviews })); // Update job requirements with the new review
      setReview(""); // Clear the form
      setUserId("");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to add review");
    }
  };

  // Handle file upload
  const handleFileSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("userId", userId);

    try {
      const response = await axios.post(`/api/job/${jobId}/requirements/attachment`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setJobRequirements((prev) => ({ ...prev, attachments: response.data.attachments })); // Update with the new attachment
      setFile(null); // Clear the file input
      setUserId("");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to upload file");
    }
  };

  // Add a note
  const handleNoteSubmit = (e) => {
    e.preventDefault();
    if (note) {
      setNotesList([...notesList, note]);
      setNote(""); // Clear the input
    }
  };

  // Add a link
  const handleLinkSubmit = (e) => {
    e.preventDefault();
    if (link) {
      setLinksList([...linksList, link]);
      setLink(""); // Clear the input
    }
  };

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-red-500 text-center">Error: {error}</p>;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">
        Here are all the resources which will help you to do your best for this job. Some may be paid, some not. You can also upload yours for this job.
      </h2>

      {/* Notes Section */}
      <div className="my-4">
        <h3 className="font-bold mb-2">Add Your Notes:</h3>
        <form onSubmit={handleNoteSubmit} className="flex mb-4">
          <input
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Enter your note"
            required
            className="flex-1 border rounded p-2 mr-2"
          />
          <button type="submit" className="bg-blue-600 text-white rounded px-4 hover:bg-blue-700">Add Note</button>
        </form>

        <div className="overflow-x-auto whitespace-nowrap">
          {notesList.length > 0 ? (
            notesList.map((n, index) => (
              <div key={index} className="inline-block border border-gray-300 rounded p-2 m-1 bg-gray-100">
                {n}
              </div>
            ))
          ) : (
            <p>No notes available</p>
          )}
        </div>
      </div>

      {/* Links Section */}
      <div className="my-4">
        <h3 className="font-bold mb-2">Add Useful Links:</h3>
        <form onSubmit={handleLinkSubmit} className="flex mb-4">
          <input
            type="url"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="Enter your link"
            required
            className="flex-1 border rounded p-2 mr-2"
          />
          <button type="submit" className="bg-blue-600 text-white rounded px-4 hover:bg-blue-700">Add Link</button>
        </form>

        <div className="mt-4">
          {linksList.length > 0 ? (
            linksList.map((l, index) => (
              <div key={index} className="mb-2">
                <a href={l} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{l}</a>
              </div>
            ))
          ) : (
            <p>No links available</p>
          )}
        </div>
      </div>

      {jobRequirements ? (
        <div>
          <h3 className="font-bold mb-2">Requirements:</h3>
          <ul className="list-disc pl-6 mb-4">
            {jobRequirements.requirements && jobRequirements.requirements.length > 0 ? (
              jobRequirements.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))
            ) : (
              <p>No requirements available</p>
            )}
          </ul>

          <h3 className="font-bold mb-2">Reviews:</h3>
          <ul className="list-disc pl-6 mb-4">
            {jobRequirements.reviews && jobRequirements.reviews.length > 0 ? (
              jobRequirements.reviews.map((review) => (
                <li key={review._id}>
                  {review.content} - by {review.user}
                </li>
              ))
            ) : (
              <p>No reviews available</p>
            )}
          </ul>

          <h3 className="font-bold mb-2">Attachments:</h3>
          <ul className="list-disc pl-6 mb-4">
            {jobRequirements.attachments && jobRequirements.attachments.length > 0 ? (
              jobRequirements.attachments.map((attachment) => (
                <li key={attachment._id}>
                  <a href={attachment.filePath} download className="text-blue-600 hover:underline">
                    {attachment.fileName}
                  </a>
                </li>
              ))
            ) : (
              <p>No attachments available</p>
            )}
          </ul>

          {/* Add Review Form */}
          <form onSubmit={handleReviewSubmit} className="mb-4">
            <h4 className="font-bold">Add a Review:</h4>
            <input
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Enter your review"
              required
              className="border rounded p-2 mr-2"
            />
            <input
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="User ID"
              required
              className="border rounded p-2 mr-2"
            />
            <button type="submit" className="bg-blue-600 text-white rounded px-4 hover:bg-blue-700">Submit Review</button>
          </form>

          {/* File Upload Form */}
          <form onSubmit={handleFileSubmit} className="mb-4">
            <h4 className="font-bold">Upload Attachment:</h4>
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              required
              className="border rounded p-2 mr-2"
            />
            <input
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="User ID"
              required
              className="border rounded p-2 mr-2"
            />
            <button type="submit" className="bg-blue-600 text-white rounded px-4 hover:bg-blue-700">Upload File</button>
          </form>
        </div>
      ) : (
        <p>No job requirements found</p>
      )}
    </div>
  );
};

export default Jobreq;
