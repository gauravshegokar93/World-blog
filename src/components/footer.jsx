export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 pt-12 pb-6 px-6 select-none">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
        
        {/* Business Hours */}
        <div>
          <h3 className="text-white font-semibold mb-3">Business Hours</h3>
          <p>
            <span className="font-semibold text-gray-600">Monday - Friday:</span> 08:00 - 20:00
          </p>
          <p>
            <span className="font-semibold text-gray-600">Saturday - Sunday:</span> 09-14:00
          </p>

          {/* Social Icons */}
          <div className="flex space-x-3 mt-5">
            {/* Use any icon library you want, here placeholders */}
            <a href="#" aria-label="Facebook" className="bg-gray-900 p-2 rounded-md hover:bg-gray-700 transition">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Email" className="bg-gray-900 p-2 rounded-md hover:bg-gray-700 transition">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="#" aria-label="Instagram" className="bg-gray-900 p-2 rounded-md hover:bg-gray-700 transition">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="YouTube" className="bg-gray-900 p-2 rounded-md hover:bg-gray-700 transition">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" aria-label="Telegram" className="bg-gray-900 p-2 rounded-md hover:bg-gray-700 transition">
              <i className="fab fa-telegram-plane"></i>
            </a>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-white font-semibold mb-3">Categories</h3>
          <ul className="space-y-1">
            {["Culture", "Economy", "Politics", "Science", "Technology", "Travel", "World"].map((cat) => (
              <li key={cat} className="hover:text-white cursor-pointer transition">
                {cat}
              </li>
            ))}
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-white font-semibold mb-3">Information</h3>
          <ul className="space-y-1">
            {[
              "Privacy Policy",
              "Terms & Conditions",
              "Site Map",
              "FAQ",
              "Locations",
              "Breaking News",
              "User Area",
            ].map((info) => (
              <li key={info} className="hover:text-white cursor-pointer transition">
                {info}
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-1">
            {[
              "About",
              "Contact",
              "Our Staff",
              "Help Center",
              "Advertise",
              "Subscription",
              "Startups",
            ].map((comp) => (
              <li key={comp} className="hover:text-white cursor-pointer transition">
                {comp}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-700 mb-6" />

      {/* Center Title */}
      <div className="text-center mb-6">
        <h2 className="text-white text-3xl font-serif font-bold">Tranding Blogs</h2>
        <p className="text-gray-500 text-sm mt-1">Render Lab Solution <p className = "text-black">except black</p></p>
      </div>

      {/* Divider */}
      <hr className="border-gray-700 mb-6" />

      {/* Copyright */}
      <p className="text-center text-gray-600 text-xs">
        Copyright © 2025 - Render Lab Solution
      </p>
    </footer>
  );
}
