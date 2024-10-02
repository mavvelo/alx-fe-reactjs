// Profile.jsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
      <nav>
        <Link to="details">Profile Details</Link>
        <Link to="settings">Profile Settings</Link>
      </nav>
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
};

const ProfileDetails = () => {
  return <div>Profile Details Page</div>;
};

const ProfileSettings = () => {
  return <div>Profile Settings Page</div>;
};

export default Profile;