import { Link } from "react-router-dom";

export default function Footer() {
  const FooterLinks = {
    categories: [
      { name: "Home", path: "/" },
      { name: "Culture", path: "/culture" },
      { name: "Economy", path: "/economy" },
      { name: "Politics", path: "/politics" },
      { name: "Science", path: "/science" },
      { name: "Technology", path: "/technology" },
      { name: "Travel", path: "/travel" },
      { name: "Gaming", path: "/gaming" },
    ],
    information: [
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms & Conditions", path: "/terms" },
      { name: "FAQ", path: "/faq" },
      { name: "Location", path: "/location" },
      // { name: "Site Map", path: "/sitemap" },
    ],
    company: [
      { name: "About", path: "/about" },
      { name: "Contact", path: "/contact" },
      // { name: "Our Staff", path: "/team" },
      { name: "Help Center", path: "/faq" },
      { name: "Advertise", path: "/advertise" },
      { name: "Subscription", path: "/subscription" },
    ],
  };

  const socialIcons = [
    { name: "Facebook", icon: "fab fa-facebook-f", href: "#" },
    { name: "Email", icon: "fas fa-envelope", href: "#" },
    { name: "Instagram", icon: "fab fa-instagram", href: "#" },
    { name: "YouTube", icon: "fab fa-youtube", href: "#" },
    { name: "Telegram", icon: "fab fa-telegram-plane", href: "#" },
  ];

  return (
    <footer className="bg-black text-gray-400 pt-12 pb-6 px-6 select-none .relative">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
        {/* Business Hours & Social Icons */}
        <div>
          <h3 className="text-white font-semibold mb-3">Business Hours</h3>
          <p>
            <span className="font-semibold text-gray-600">Mon - Fri:</span> 08:00 - 20:00
          </p>
          <p>
            <span className="font-semibold text-gray-600">Sat - Sun:</span> 09:00 - 14:00
          </p>
          <div className="flex space-x-3 mt-5">
            {socialIcons.map(({ name, icon, href }) => (
              <a
                key={name}
                href={href}
                aria-label={name}
                className="bg-gray-900 p-2 rounded-md hover:bg-gray-700 transition"
              >
                <i className={icon}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-white font-semibold mb-3">Categories</h3>
          <ul className="space-y-1">
            {FooterLinks.categories.map(({ name, path }) => (
              <li key={name}>
                <Link
                  to={path}
                  className="text-sm font-semibold hover:text-blue-500 hover:border-b-2 hover:border-blue-500 pb-1"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-white font-semibold mb-3">Information</h3>
          <ul className="space-y-1">
            {FooterLinks.information.map(({ name, path }) => (
              <li key={name}>
                <Link
                  to={path}
                  className="hover:text-white transition"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-1">
            {FooterLinks.company.map(({ name, path }) => (
              <li key={name}>
                <Link
                  to={path}
                  className="hover:text-white transition"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-700 mb-6" />

      {/* Center Logo + Tagline */}
      <div className="text-center mb-6">
        <h2 className="text-white text-3xl font-serif font-bold">Daily News</h2>
        <p className="text-gray-500 text-sm mt-1">
          Render Lab Solution — Every voice matters.
        </p>
      </div>

      <hr className="border-gray-700 mb-6" />

      {/* Copyright */}
      <p className="text-center text-gray-600 text-xs">
        © 2025 Render Lab Solution. All rights reserved.
      </p>
    </footer>
  );
}
