import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const navLink = [
    { path: "", text: "Profile" },
    { path: "", text: "Explore" },
    { path: "", text: "Dashboard" },
  ];

  const location = useLocation();
  const path = location.pathname;

  return (
    <div>
      <div className="top-0 left-0 h-18 w-full flex items-center justify-between border-b pl-50 pr-50">
        <ul className="justify-items-start flex gap-5 text-md font-medium text-[#1877F2]">
          {navLink.map((link, i) => (
            <li key={i}>
              <Link
                to={link.path}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
        <div className="justify-items-end rounded-full bg-gray-300 w-12 h-12 overflow-hidden">
          <img src="/" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
