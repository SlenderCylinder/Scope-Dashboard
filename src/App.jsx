import React, { useState, useEffect } from "react";
import { Routes, Route,  BrowserRouter as Router, Navigate } from "react-router-dom";
import LoginPage from "./LoginPage"; 
import NotFoundPage from "./Components/NotFoundPage";
import Nav from "./Nav";
import Title from "./Components/Title";
import BenCard from "./Components/BenCard";
import ReCard from "./Components/ReCard";
import Search from "./Components/Search";
import Table from "./Components/Table";
import Beneficiary from "./Beneficiary";
import ProfileSettings from "./ProfileSettings";
import axios from "axios";
import { getAuth } from "firebase/auth";

export default function App({ userLoggedIn }) {

  const auth = getAuth();
  const user = auth.currentUser;

  const [searchQuery, setSearchQuery] = useState("");
  const [fetchedData, setFetchedData] = useState([]);
  const [Name, setName] = useState(""); 
  const [displayName, setDisplayName] = useState(""); 

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };
  
  //temp placeholder for date and lastpurchase - remove later
  const getRandomItem = (items) => {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
  };

  useEffect(() => {
    if (user) {
      const emailParts = user.email.split("@");
      const displayName = user.displayName
      if (displayName){
        setName(displayName);
      } else {
        const name = emailParts[0];
        setName(name);
      }

    }
  }, [user]);
  
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
                  <Title name={Name} />
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
      <Route
        path="*"
        element={ <Navigate to="/404notfound" /> }
      />
      <Route path="/404notfound" element={<NotFoundPage />} />
      <Route path="/edit_profile" element={userLoggedIn ? <ProfileSettings /> : <Navigate to="/login" />} />
    </Routes>
  );
}
