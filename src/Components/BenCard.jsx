import { useState, useEffect, React } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from 'axios';

export default function BenCard({ mp, fp }) {
  const [beneficiaryCount, setBeneficiaryCount] = useState(0);
  const [maleCount, setMaleCount] = useState(0);
  const [femaleCount, setFemaleCount] = useState(0);

  // Function to fetch beneficiary data from your API
  const fetchBeneficiaryData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/beneficiaries');
      const data = response.data;
      const count = data.length; // Get the number of entries
      setBeneficiaryCount(count);

      // Calculate male and female counts
      let male = 0;
      let female = 0;
      data.forEach((entry) => {
        if (entry.gender === 'male') {
          male++;
        } else if (entry.gender === 'female') {
          female++;
        }
      });
      setMaleCount(male);
      setFemaleCount(female);
    } catch (error) {
      console.error('Error fetching beneficiary data:', error);
    }
  };

  const total = maleCount + femaleCount;
  const malePercentage = (maleCount / total) * 100;

  // Fetch beneficiary data when the component mounts
  useEffect(() => {
    fetchBeneficiaryData();
  }, []);

  //CSS classes for light mode and dark mode
  const lightModeClass = "bg-white text-black";
  const darkModeClass = "bg-gray-600 text-white";


  // The rest of your component code remains the same, but use the maleCount and femaleCount state variables to display the counts
  return (
    <div className="flex mr-20 flex-col justify-between px-10 py-5 w-[300px] h-[200px] bg-white rounded-[60px] shadow">
      <div className="flex w-full">
        <h1 className="text-black text-base font-normal">
          Active beneficiaries️
        </h1>
        <FaUser className="w-6 h-6 ml-2" />
      </div>
      <h4 className="text-lime-500 text-start text-2xl font-normal">
        {beneficiaryCount}
      </h4>
      <div className="w-full">
      <div className="w-full h-[13px] bg-purple-800 rounded-[20px] relative">
        <div
          style={{ width: `${malePercentage}%`, background: 'yellow' }}
          className="absolute top-0 left-0 h-[13px] rounded-tl-[20px] rounded-bl-[20px]"
        />
      </div>
    </div>
      <div className="flex flex-row items-start justify-between">
        <div className="flex flex-col">
          <div className="flex items-center w-full h-1/2">
            <div className="w-[7px] h-[7px] bg-yellow-500 rounded-full mr-2" />
            <div className="text-black text-xs font-normal">Male</div>
          </div>
          <div className="flex items-center w-full h-1/2">
            <div className="w-[7px] h-[7px] bg-purple-800 rounded-full mr-2" />
            <div className="text-black text-xs font-normal">Female</div>
          </div>
        </div>
        <Link
          to="/createBeneficiary"
          className=" hover:underline text-right text-black text-xs mt-2 font-normal"
        >
          Create beneficiary ➕
        </Link>
      </div>
    </div>
  );
}