// import { useEffect, useState } from "react";
import { FiUserPlus } from "react-icons/fi";
import { Link, useLoaderData } from "react-router-dom";
import User from "./User/User";
import Swal from "sweetalert2";
import { useState } from "react";

const Home = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const deleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remainingUsers = loadedUsers.filter(
                (user) => user._id !== id
              );
              setUsers(remainingUsers);

              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

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
                <User
                  key={user._id}
                  user={user}
                  id={idx}
                  deleteUser={deleteUser}
                ></User>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
