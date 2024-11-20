import React from 'react';
import './ProfilePage.css'; // Importing CSS for styling
import WorkingDataDropdowns from './WorkingDataDropdowns'; // Import the WorkingDataDropdowns component



function ProfilePage() {
    // Mock data, you can replace this with actual user data (e.g., fetched from context or props)
    const username = "johndoe";
    const jobRole = "Software Developer";

    return (
        <div className="profile-page">
            <div className="profile-header">
                <div className="profile-info">
                    <div className="username-container">
                        <div className="avatar"></div> {/* Optional avatar */}
                        <h1 className="username">{username}</h1>
                        <p className="job-role">{jobRole}</p>
                    </div>
                </div>
            </div>

            {/* Container for last 7 days working data */}
            <WorkingDataDropdowns />

        </div>
    );
}

export default ProfilePage;
