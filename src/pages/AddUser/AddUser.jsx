import { useState } from "react";
import { AiOutlineBackward } from "react-icons/ai";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddUser = () => {
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleAddUser = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const newUser = {
      name,
      email,
      selectedGender,
      selectedStatus,
    };

    fetch("https://user-management-complete-crud-se-production.up.railway.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "User added successfully!",
            icon: "success",
            confirmButtonText: "Close",
          });
          form.reset();
        }
      });
  };

  return (
    <div>
      <div className="container mx-auto px-10 py-20">
        <Link to="/">
          <button className="flex items-center gap-2 text-xl link-accent">
            <AiOutlineBackward />
            All Users
          </button>
        </Link>

        <h1 className="text-center text-3xl">New User</h1>
        <p className="text-gray-400 text-center mt-3">
          Use the below form to create a new user
        </p>
        <form onSubmit={handleAddUser} className="card-body w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>

          <div className="flex items-center space-x-6 gap-3">
            <div>
              <label className="label font-bold text-xl text-gray-400">
                Gender
              </label>
            </div>
            <div className="flex gap-2">
              <input
                type="radio"
                id="Male"
                value="Male"
                name="gender"
                className="radio radio-accent"
                onChange={(e) => setSelectedGender(e.target.value)}
              />
              <label htmlFor="Male">Male</label>
            </div>
            <div className="flex gap-2">
              <input
                type="radio"
                id="Female"
                name="gender"
                value="Female"
                className="radio radio-accent"
                onChange={(e) => setSelectedGender(e.target.value)}
              />
              <label htmlFor="Female">Female</label>
            </div>
          </div>

          <div className="flex items-center space-x-6 gap-3">
            <div>
              <label className="label font-bold text-xl text-gray-400">
                Status
              </label>
            </div>
            <div className="flex gap-2">
              <input
                type="radio"
                id="Active"
                value="Active"
                name="status"
                className="radio radio-accent"
                onChange={(e) => setSelectedStatus(e.target.value)}
              />
              <label htmlFor="Active">Active</label>
            </div>
            <div className="flex gap-2">
              <input
                type="radio"
                id="Inactive"
                value="Inactive"
                name="status"
                className="radio radio-accent"
                onChange={(e) => setSelectedStatus(e.target.value)}
              />
              <label htmlFor="Inactive">Inactive</label>
            </div>
          </div>

          <input
            className="btn btn-accent mt-6"
            type="submit"
            value="Add User"
          />
        </form>
      </div>
    </div>
  );
};

export default AddUser;
