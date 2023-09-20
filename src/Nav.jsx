import React, { useState } from "react";
import { getAuth } from "firebase/auth";
import ProfileMenu from "./Components/ProfileMenu";
import { Menu, Sparkles } from "lucide-react";
import { Button } from "./assets/button"

export default function Nav() {

  const toggleProfileMenu = () => {
    setProfileMenuOpen(true);
    setProfileMenuOpen(true);
  };
  
  const auth = getAuth();
  const user = auth.currentUser;

  return (
    <nav className="flex bg-gray-300 w-full justify-between p-2">
      <div className="flex items-center">
        <h1 className={"hidden md:block text-xl md:text-3xl font-bold text-primary"}>
          SCOPE
        </h1>
      </div>
      <div className="ml-auto flex items-left">
        <Button size="sm" variant="premium">
          <ProfileMenu />
        </Button>
      </div>
      <div className="ml-4 rounded-full w-10 h-10 bg-gray-600">
        <img
          src={user.photoURL || "/default-profile-picture.png"}
          alt="Profile"
          className="w-10 h-10 rounded-full"
          onClick={(e) => { console.log("Icon clicked"); toggleProfileMenu(); }}
        />
      </div>
    </nav>
  );
  
  
}
