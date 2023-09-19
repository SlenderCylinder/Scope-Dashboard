import React, { useState, useEffect } from "react";
import { Routes, Route,  BrowserRouter as Router, Navigate } from "react-router-dom";
import LoginPage from "./LoginPage"; 
import Nav from "./Nav";
import Title from "./Components/Title";
import BenCard from "./Components/BenCard";
import ReCard from "./Components/ReCard";
import Search from "./Components/Search";
import Table from "./Components/Table";
import Beneficiary from "./Beneficiary";
import axios from "axios";

export default function App({ userLoggedIn }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [fetchedData, setFetchedData] = useState([]); // State variable for fetched data

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };
  
  //temp placeholder for date and lastpurchase - remove later
  const getRandomItem = (items) => {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
  };

  useEffect(() => {

    axios
      .get("http://localhost:3000/beneficiaries")
      .then((response) => {
        setFetchedData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data from MongoDB API:", error);
      });
  }, []);

  const beneficiaries = fetchedData.map((item) => ({
    firstName: item.firstName || "", 
    lastName: item.lastName || "",
    lastPurchase: getRandomItem(["Shoes", "Shirt", "Eggs", "Milk", "Potatoes", "Apples", "Oranges"]), //temporarily select last purchase
    balance: item.balance || "",
    date: getRandomItem(["2023-07-30", "2023-08-03", "2023-08-05"]),//terporarily select last purchase date
  }));

  return (
    <Routes>
      <Route
        path="/createBeneficiary"
        element={userLoggedIn ? <Beneficiary /> : <Navigate to="/login" />}
      />
      <Route
        path="/login"
        element={!userLoggedIn ? <LoginPage /> : <Navigate to="/" />}
      />
      <Route
        path="/"
        element={
          userLoggedIn ? (
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
          ) : (
            <Navigate to="/login" />
          )
        }
      ></Route>
    </Routes>
  );
}
