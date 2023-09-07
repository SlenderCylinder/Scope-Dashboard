import React, { useState } from "react";

export default function BulkBen() {
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Simulate upload progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
      }
    }, 500);
  };

  return (
    <div className="mt-4">
      <div className="flex w-full items-center mb-4">
        <label htmlFor="file-upload" className="cursor-pointer mr-4">
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
