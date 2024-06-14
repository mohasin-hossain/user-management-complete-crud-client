import { FiUserPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div className="container mx-auto px-10 py-20">
                <Link to='/addUser'>
                <button className="btn btn-accent text-black text-base">New User <FiUserPlus className="text-2xl" /></button>
                </Link>
            </div>
        </div>
    );
};

export default Home;