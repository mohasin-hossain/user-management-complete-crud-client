import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-accent text-black text-xl">
        <Link to="/" className="btn btn-ghost text-xl text-center mx-auto">User Management Sytem</Link>
      </div>
    </div>
  );
};

export default Header;
