import React, { useState } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Nav from "./Nav";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ProfileSettings()  {
  const auth = getAuth();
  const user = auth.currentUser;
  const [profilePicture, setProfilePicture] = useState(user.photoURL);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      return;
    }
  
    const storage = getStorage();
    const storageRef = ref(storage, `profilePictures/${user.uid}`);
  
    try {

      // Upload the new profile picture to Firebase
      await uploadBytes(storageRef, selectedFile);
  
      const downloadURL = await getDownloadURL(storageRef);
  
      await updateProfile(user, { photoURL: downloadURL });
      setProfilePicture(downloadURL);
      setSelectedFile(null);
      setUploadSuccess(true);
      toast.success("Successfully updated.", {
        position: toast.POSITION.TOP_CENTER,
      });
      console.log("Profile picture updated.")


    } catch (error) {
      setUploadSuccess(false);
      toast.error("There was an issue with updating the profile picture.", {
        position: toast.POSITION.TOP_CENTER,
      });
      console.error("Error uploading profile picture:", error);
    }
  };


  return (
    <div><Nav />
    <ToastContainer/>
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white p-4 rounded-md shadow-md text-center">
                <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>
                <div className="flex flex-col items-center space-y-4">
                <div className="relative w-20 h-20">
                    <img
                    src={profilePicture || "/default-profile-picture.png"}
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover"
                    />
                    <label
                    htmlFor="profile-picture-input"
                    className="absolute bottom-0 right-0 bg-primary text-white rounded-full cursor-pointer p-2"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                    </svg>
                    </label>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="picture">Upload a new profile picture</Label>
                  <Input
                      id="picture"
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                  <button
                    onClick={handleUpload}
                    className="bg-primary text-black px-4 py-2 rounded-md hover:bg-primary-dark focus:outline-none"
                  >
                    Upload
                  </button>
                </div>
                </div>
            </div>
            </div>
    </div>
  );
}
