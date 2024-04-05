import axios from 'axios'
import { useNavigate } from 'react-router-dom';


export function UserCard({ user }) {
    const navigate=useNavigate()
    const { firstName, lastName, email, gender, avatar, domain, available } = user;
  
    return (
      <div className="relative bg-blue-200 rounded-lg shadow-md overflow-hidden w-3/5 mx-auto mb-2">
        <div className="flex items-center p-4">
          <img
            src={avatar}
            alt="Avatar"
            className="w-20 h-20 rounded-full object-cover mr-4"
          />
          <div>
            <h2 className="text-xl font-medium text-gray-800">
              {firstName} {lastName}
              <span className="text-gray-500 text-sm">
                {gender === 'male' ? " Male" : " Female"}
              </span>
            </h2>
            <p className="text-gray-600">{email}</p>
            <p className="text-gray-600">{domain}</p>
            <div className="mt-2 flex items-center">
              {available ? (
                <span className="text-green-500 font-medium">Available</span>
              ) : (
                <span className="text-red-500 font-medium">Unavailable</span>
              )}
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 bottom-0 flex justify-end items-center pr-4">
          {available === true ? (
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2 cursor-pointer">
              Add to Team
            </button>
          ) : (
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2 cursor-not-allowed">
              Add to Team
            </button>
          )}
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer" onClick={async()=>{
             const res= await axios.get(`https://heliverse-backend-ylp9.onrender.com/api/users/delete/${user._id}`);
              alert(res.data.msg);
              window.location.reload();
          }}>
            Delete
          </button>
        </div>
      </div>
    );
  }
  