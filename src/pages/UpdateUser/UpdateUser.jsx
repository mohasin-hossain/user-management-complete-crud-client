import { useState } from "react";
import { AiOutlineBackward } from "react-icons/ai";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateUser = () => {
  const user = useLoaderData();
  const {
    _id,
    name,
    email,
    selectedGender: sGender,
    selectedStatus: sStatus,
  } = user;
  const [selectedGender, setSelectedGender] = useState(sGender);
  const [selectedStatus, setSelectedStatus] = useState(sStatus);
  const navigate = useNavigate();

  const handleUpdateUser = (e) => {
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

    fetch(`http://localhost:3000/users/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "User Updated successfully!",
            icon: "success",
            confirmButtonText: "Close",
          });

          navigate("/");
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

        <h1 className="text-center text-3xl">Update User - {name}</h1>
        <p className="text-gray-400 text-center mt-3">
          Use the below form to Update the existing user
        </p>
        <form onSubmit={handleUpdateUser} className="card-body w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              defaultValue={name}
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
              defaultValue={email}
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
                checked={selectedGender === "Male" ? true : false}
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
                checked={selectedGender === "Female" ? true : false}
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
                checked={selectedStatus === "Active" ? true : false}
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
                checked={selectedStatus === "Inactive" ? true : false}
                onChange={(e) => setSelectedStatus(e.target.value)}
              />
              <label htmlFor="Inactive">Inactive</label>
            </div>
          </div>

          <input
            className="btn btn-accent mt-6"
            type="submit"
            value="Update User"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
