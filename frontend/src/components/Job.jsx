import React, { useState } from 'react'; // Import useState
import { Button } from './ui/button';
import { Bookmark } from 'lucide-react';
import { Avatar, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner'; // Ensure you import toast

const Job = ({ job }) => {
    const navigate = useNavigate();
    const [isBookmarked, setIsBookmarked] = useState(false); // State for bookmark

    const daysAgoFunction = (mongodbTime) => {
        const createdAt = new Date(mongodbTime);
        const currentTime = new Date();
        const timeDifference = currentTime - createdAt;
        return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
    };

    const toggleBookmark = () => {
        setIsBookmarked((prev) => !prev); // Toggle the bookmark state
    };

    return (
        <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100'>
            <div className='flex items-center justify-between'>
                <p className='text-sm text-gray-500'>{daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}</p>
                <Button
                    variant="outline"
                    className={`rounded-full ${isBookmarked ? 'bg-green-800 text-white' : 'text-gray-500'}`} // Change class based on bookmark state
                    size="icon"
                    onClick={toggleBookmark} // Toggle bookmark on click
                >
                    <Bookmark />
                </Button>
            </div>

            <div className='flex items-center gap-2 my-2'>
                <Button className="p-6" variant="outline" size="icon">
                    <Avatar>
                        <AvatarImage src={job?.company?.logo} />
                    </Avatar>
                </Button>
                <div>
                    <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
                    <p className='text-sm text-gray-500'>India</p>
                </div>
            </div>

            <div>
                <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
                <p className='text-sm text-gray-600'>{job?.description}</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className={'text-blue-700 font-bold'} variant="ghost">{job?.position} Positions</Badge>
                <Badge className={'text-[#F83002] font-bold'} variant="ghost">{job?.jobType}</Badge>
                <Badge className={'text-[#7209b7] font-bold'} variant="ghost">{job?.salary}LPA</Badge>
            </div>
            
            {/* Centering buttons section */}
            <div className='flex justify-center gap-4 mt-4'>
                <Button onClick={() => navigate(`/description/${job?._id}`)} variant="outline">Details</Button>
                <Button
                    onClick={() => {
                        const jobLink = job?.description || ''; // Use job.description
                        if (jobLink) {
                            window.open(jobLink, '_blank'); // Open job link in a new tab
                        } else {
                            toast.error("Job link is not available."); // Ensure toast is imported
                        }
                    }}
                    className='rounded-lg bg-[#7209b7] hover:bg-[#5f32ad]'
                >
                    Apply Now
                </Button>
            </div>
        </div>
    );
};

export default Job;