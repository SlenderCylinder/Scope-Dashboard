import React, { useEffect } from "react";
import { getAuth, signOut } from "firebase/auth"; 
import Title from "./Title";

const ProfileMenu = ({ onClose }) => {

  const auth = getAuth();
  const user = auth.currentUser;

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="profile-menu" > 
        {/* <Button onClick={handleManageAccount}>Manage Account</Button> */}
        <h1 onClick={handleSignOut}>Sign Out</h1>
    </div>
  );
};

export default ProfileMenu;
