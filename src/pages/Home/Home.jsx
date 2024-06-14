// import { useEffect, useState } from "react";
import { FiUserPlus } from "react-icons/fi";
import { Link, useLoaderData } from "react-router-dom";
import User from "./User/User";

const Home = () => {
  const users = useLoaderData();

  return (
    <div>
      <div className="container mx-auto px-10 py-20">
        <Link to="/addUser">
          <button className="btn btn-accent text-black text-base">
            New User <FiUserPlus className="text-2xl" />
          </button>
        </Link>
        {/* TABLE */}

        <div className="overflow-x-auto">
          <table className="table mt-10">
            {/* head */}
            <thead className="bg-accent text-black">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Status</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <User key={user._id} user={user} id={idx}></User>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
