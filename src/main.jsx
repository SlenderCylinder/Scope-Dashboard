import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "../public/index.css";
import App from "./App.jsx";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from './firebase/firebase-config.jsx';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import LoadingSpinner from "./Components/LoadingSpinner";

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();

function Main() {
  const [userLoggedIn, setUserLoggedIn] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is logged in:", user);
        setUserLoggedIn(true);
      } else {
        console.log("No user is logged in.");
        setUserLoggedIn(false);
      }
    });

    return () => {
      unsubscribe(); // Cleanup the subscription when the component unmounts
    };
  }, [auth]);

  if (userLoggedIn === null) {
    // Loading state
    return <LoadingSpinner />;
  }

  return (
    <React.StrictMode>
      <Router>
        <App userLoggedIn={userLoggedIn} />
      </Router>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
