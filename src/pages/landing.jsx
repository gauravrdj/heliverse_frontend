import { useEffect, useState } from "react"
import { UserCard } from "../components/Usercard"
import axios from 'axios'
import { Navbar } from "../components/Navbar";

import { Skeleton } from "../components/skeleton";
import { Pagination } from "../components/Pagination";



 
export const Landing = ()=>{
    
    const [filter, setFilter]=useState('');
    const [users, setUsers]=useState([]);
    const [loading, setLoading]=useState(true);


    //other filters
   const [domainFilter, setDomainFilter]=useState('');
   const [genderFilter, setGenderFilter]=useState('');
   const [availableFilter, setAvailableFilter]=useState('');

    useEffect(()=>{
        try{
        axios.get(`https://heliverse-backend-ylp9.onrender.com/api/users?filter=${filter}&domain=${domainFilter}&available=${availableFilter}&gender=${genderFilter}`).then((res)=>{
              setUsers(res.data.allUsers);
              setLoading(false)
        })
    }
    catch(e){
        alert('Failed to get users');
    }
    }, [filter, domainFilter, genderFilter, availableFilter])


    //Pagination

    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(20);


    let currentRecords = [];
let nPages = 0;

if (users && users.length > 0) {
  const safeIndexOfLastRecord = Math.min(currentPage * recordsPerPage, users.length);
  const indexOfFirstRecord = safeIndexOfLastRecord - recordsPerPage;
  currentRecords = users.slice(indexOfFirstRecord, safeIndexOfLastRecord);
  nPages = Math.ceil(users.length / recordsPerPage);
}

   
    return (
         <div>
            <Navbar/>
            <div className="relative rounded-md shadow-md overflow-hidden w-3/5 mx-auto mb-4">
     
      <input
        type="text"
        id="nameFilter"
        className="form-input mt-2 pt-4 pb-6 block w-full h-5 text-center"
        placeholder="Search for a user..."
        onChange={(e)=>{
            setFilter(e.target.value)
        }}
      />

    </div>
     <Otherfilters setDomainFilter={setDomainFilter} setGenderFilter={setGenderFilter} setAvailableFilter={setAvailableFilter}></Otherfilters>
{loading===true ? <DisplaySkeleton/> : 
<>
<DisplayData className={"mb-4"} data={currentRecords}/>  
<Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />

</>}
</div>
);
}


function DisplaySkeleton(){
    return (
    <div className="flex justify-center">
    <div>
             <Skeleton/>
              <Skeleton/>
              <Skeleton/>
              <Skeleton/>
              <Skeleton/>
              <Skeleton/>
              <Skeleton/>
              </div>
    </div>
    );
}

function DisplayData({data}){
    
    return (
        <div>
          {data.map((user, index)=>(
             <UserCard user={user}></UserCard>
          ))}
          
        </div>

    )
}

function Otherfilters({setDomainFilter, setGenderFilter, setAvailableFilter}){
    return (
        <div>
          <div className="mb-4 w-3/5 mx-auto">
            <label htmlFor="domainFilter" className="block text-gray-700 font-bold mb-1">Filter by Domain:</label>
            <div className="relative">
              <select
                id="domainFilter"
                className="form-select mt-1 block w-full border border-gray-300 rounded-md py-2 pl-3 pr-10 text-gray-900 focus:outline-none focus:ring focus:border-blue-300"
                onChange={(e)=>{
                    
                    setDomainFilter(e.target.value)
                }}
              >
                <option value="">Select Domain</option>
                <option value="Sales">Sales</option>
                <option value="Marketing">Marketing</option>
                <option value="IT">IT</option>
                <option value="Finance">Finance</option>
                <option value="UI designing">UI designing</option>
                <option value="Management">Management</option>
                {/* Add more options as needed */}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.293 7.293a1 1 0 0 1 1.414 0L10 9.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414zM10 11a1 1 0 0 1-1-1V5a1 1 0 1 1 2 0v5a1 1 0 0 1-1 1z"></path>
                </svg>
              </div>
            </div>
          </div>
      
          <div className="mb-4 w-3/5 mx-auto">
            <label htmlFor="genderFilter" className="block text-gray-700 font-bold mb-1">Filter by Gender:</label>
            <div className="relative">
              <select
                id="genderFilter"
                className="form-select mt-1 block w-full border border-gray-300 rounded-md py-2 pl-3 pr-10 text-gray-900 focus:outline-none focus:ring focus:border-blue-300"
                onChange={(e)=>{
                   
                    setGenderFilter(e.target.value)
                }}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                {/* Add more options as needed */}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.293 7.293a1 1 0 0 1 1.414 0L10 9.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414zM10 11a1 1 0 0 1-1-1V5a1 1 0 1 1 2 0v5a1 1 0 0 1-1 1z"></path>
                </svg>
              </div>
            </div>
          </div>
      
          <div className="mb-4 w-3/5 mx-auto">
            <label htmlFor="availabilityFilter" className="block text-gray-700 font-bold mb-1">Filter by Availability:</label>
            <div className="relative">
              <select
                id="availabilityFilter"
                className="form-select mt-1 block w-full border border-gray-300 rounded-md py-2 pl-3 pr-10 text-gray-900 focus:outline-none focus:ring focus:border-blue-300"
                onChange={(e)=>{
                   
                    setAvailableFilter(e.target.value)
                }}
              >
                <option value="">Select Availability</option>
                <option value="Available">Available</option>
                <option value="Unavailable">Unavailable</option>
                {/* Add more options as needed */}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.293 7.293a1 1 0 0 1 1.414 0L10 9.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414zM10 11a1 1 0 0 1-1-1V5a1 1 0 1 1 2 0v5a1 1 0 0 1-1 1z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      );
      
    }

