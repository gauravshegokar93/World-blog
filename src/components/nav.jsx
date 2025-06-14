import { FaSearch, FaFire } from "react-icons/fa";
import { Link } from 'react-router-dom';



export default function Navbar() {
  const ListItems = {
    "Home": "/",
    "Culture": "/culture",
    "Economy": "/economy",
    "Politics": "/politics",
    "Science": "/science",
    "Technology": "/technology",
    "Travel": "/travel",
    "Gaming": "/gaming",
    "Contact": "/contact",
    "About": "/about"


  };

  return (
    <div className="bg-black text-white pt-4 px-6">
      {/* Top bar with logo left and Contribute button right */}
      <div className="flex items-center justify-between mb-4">
        {/* Logo */}
        <div className="flex items-center space-x-2 text-orange-500">
          <FaFire className="text-3xl" />
          <h1 className="text-2xl font-bold tracking-wide select-none">
            Trending News
          </h1>
        </div>

        {/* Contribute Button */}
        <button
          type="button"
          className="bg-orange-500 hover:bg-orange-600 text-black font-semibold py-2 px-5 rounded-full transition duration-300"
        >
          Contribute
        </button>
      </div>

      {/* Navbar with menu + search */}
      <nav className="bg-black sticky top-0 z-50 shadow-md rounded-md">
        <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Menu Items */}
          <ul className="flex space-x-6">
            {Object.entries(ListItems).map(([item, itemURL]) => (
              <li key={item}>
                <Link 
                  to={itemURL}
                  className="uppercase font-semibold text-sm hover:text-blue-500 hover:border-b-2 hover:border-blue-500 pb-1"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Search Input */}
          <div className="relative max-w-xs w-full ml-4">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="text"
              placeholder="Search..."
              className="
                w-full
                pl-12
                pr-4
                py-2
                rounded-full
                bg-white
                text-black
                text-sm
                font-medium
                shadow-md
                focus:outline-none
                focus:ring-2
                focus:ring-orange-400
                focus:ring-opacity-75
                transition
                duration-300
                ease-in-out
              "
            />
          </div>
        </div>
      </nav>
    </div>
  );
}
