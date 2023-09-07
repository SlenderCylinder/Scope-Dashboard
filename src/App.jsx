import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Title from "./Components/Title";
import BenCard from "./Components/BenCard";
import ReCard from "./Components/ReCard";
import Search from "./Components/Search";
import Table from "./Components/Table";
import Beneficiary from "./Beneficiary";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const beneficiaries = [
    {
      firstName: "John",
      lastName: "Doe",
      lastPurchase: "Shoes",
      date: "2021-09-01",
    },
    {
      firstName: "Jane",
      lastName: "Doe",
      lastPurchase: "Shirt",
      date: "2021-08-15",
    },
    {
      firstName: "Bob",
      lastName: "Smith",
      lastPurchase: "Pants",
      date: "2021-07-30",
    },
  ];

  return (
    <Routes>
      <Route path="/createBeneficiary" element={<Beneficiary />} />
      <Route
        path="/"
        element={
          <>
            <div className="flex flex-col h-screen">
              <Nav />
              <div className="flex flex-col flex-1 p-5">
                <Title name={"Manjula"} />
                <div className="flex flex-row items-start justify-start space-x-5 my-5">
                  <BenCard mp={60} fp={40} />
                  <ReCard
                    color1Percentage={20}
                    color2Percentage={40}
                    color3Percentage={80}
                    color4Percentage={40}
                  />
                </div>
                <div className="my-5">
                  <Search
                    searchQuery={searchQuery}
                    onSearchQueryChange={handleSearchQueryChange}
                  />
                </div>
                <div className="my-5">
                  <Table
                    searchQuery={searchQuery}
                    beneficiaries={beneficiaries}
                  />
                </div>
              </div>
            </div>
          </>
        }
      ></Route>
    </Routes>
  );
}
