import { FaPencil } from "react-icons/fa6";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const User = ({ user, id, deleteUser }) => {
  const { _id, name, email, selectedGender, selectedStatus } = user;

  return (
    <tr className="hover">
      <th>{Number(id) + 1}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>{selectedGender}</td>
      <td>{selectedStatus}</td>
      <td className="flex justify-around">
        <Link to={`/updateUser/${_id}`}>
          <button className="btn btn-outline hover:bg-info shadow-md">
            <FaPencil className="text-black" />
          </button>
        </Link>
        <button onClick={() => deleteUser(_id)} className="btn btn-outline shadow-md hover:bg-red-400">
          <RiDeleteBin5Line />
        </button>
      </td>
    </tr>
  );
};

export default User;
