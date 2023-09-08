import React, { useState } from "react";
import * as XLSX from "xlsx";
import Papa from "papaparse";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../api/api";

export default function BulkBen() {
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [successfulUploadCount, setSuccessfulUploadCount] = useState(0); 

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    let successfulUploadCount = 0;
    // Simulate upload progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
      }
    }, 500);

    if (!file) {
      return;
    }
    // Check the file type (CSV or Excel)
    if (file.name.endsWith(".csv")) {
      // Parse CSV file using Papaparse
      Papa.parse(file, {
        skipEmptyLines: "greedy", // Skip empty lines
        complete: (result) => {
          console.log("Parsing complete");
          if (result.data && result.data.length > 0) {
            // Assuming the first row contains headers
            const headers = result.data[0];
      
            // Find the index of each required field in the headers
            const firstNameIndex = headers.indexOf("firstName");
            const lastNameIndex = headers.indexOf("lastName");
            const districtIndex = headers.indexOf("district");
            const dsDivisionIndex = headers.indexOf("dsDivision");
            const gnDivisionIndex = headers.indexOf("gnDivision");
            const genderIndex = headers.indexOf("gender");
      
            // Process the data and create an array of form data objects
            const formDataArray = result.data.slice(1).map((row) => ({
              firstName: row[firstNameIndex],
              lastName: row[lastNameIndex],
              district: row[districtIndex],
              dsDivision: row[dsDivisionIndex],
              gnDivision: row[gnDivisionIndex],
              gender: row[genderIndex],
              balance: 10000,
            }));
      
            

            try {
                for (const formDataItem of formDataArray) {
                  const response = api.post("http://localhost:3000/beneficiaries", formDataItem, {
                    headers: {
                      "Content-Type": "application/json",
                    },
                  });
                  console.log("Success:", response.data);
                  successfulUploadCount++;
                  setSuccessfulUploadCount(successfulUploadCount);
                }
                toast.success(`Successfully uploaded ${successfulUploadCount} beneficiaries`, {
                  position: toast.POSITION.TOP_CENTER, // You can adjust the position as needed
                });
              // Now you can set or use the formDataArray as needed
            } catch (error) {
              console.error("API Error:", error);
              if (error.response) {
                console.error("API Error Message:", error.response.data.message);
              }
            }
            // Now you can set or use the formDataArray as needed
          }
        },
      });
    } else {
      toast.error("Failed to upload beneficiaries. This file format is not supported.", {
        position: toast.POSITION.TOP_CENTER,
      });
    }

  };

  return (
    <div className="mt-4">
      <div className="flex items-center mb-4">
        <label htmlFor="file-upload" className="flex cursor-pointer mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <span className="ml-2">Upload CSV or Excel file</span>
        </label>
        <input
          id="file-upload"
          type="file"
          accept=".csv,.xlsx,.xls"
          className="hidden"
          onChange={handleFileChange}
        />
        {file && (
          <div className="flex items-center">
            <div className="w-32 truncate">{file.name}</div>
            <button
              className="ml-4 bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded"
              onClick={() => setFile(null)}
            >
              Remove
            </button>
          </div>
        )}
      </div>
      <div className="relative h-2 w-[300px] rounded bg-gray-200">
        <div
          className="absolute  top-0 left-0 h-full rounded bg-green-500"
          style={{ width: `${uploadProgress}%` }}
        />
      </div>
      {uploadProgress > 0 && (
        <div className="text-center mt-2">{`${uploadProgress}% uploaded`}</div>
      )}
      <ToastContainer />
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded mt-4"
        onClick={handleUpload}
        disabled={!file}
      >
        Upload
      </button>
    </div>
  );
}
