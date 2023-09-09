import React, { useState } from "react";
import BulkBen from "./Bulkben";
import CreateBen from "./CreateBen";


export default function Beneficiary() {
  const [selectedTab, setSelectedTab] = useState("create");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="bg-white p-4">
      <div className="flex justify-center gap-5 mb-4">
        <div
          className={`cursor-pointer ${
            selectedTab === "create" ? "text-blue-500" : ""
          }`}
          onClick={() => handleTabChange("create")}
        >
          Create Beneficiary
        </div>
        <div
          className={`cursor-pointer ${
            selectedTab === "bulk" ? "text-blue-500" : ""
          }`}
          onClick={() => handleTabChange("bulk")}
        >
          Bulk Upload
        </div>
      </div>
      {selectedTab === "create" ? <CreateBen /> : <BulkBen />}
    </div>
  );
}
