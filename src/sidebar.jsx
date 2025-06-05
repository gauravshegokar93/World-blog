import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import placeholderImage from './assets/placeholder-news.jpg'; // Placeholder image for news items

// SearchBox Component 
function SearchBox() {
  return (
    <>
      <h2 className="font-bold text-base text-slate-900 mb-2">Live Search</h2>
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="w-full border border-slate-300 rounded px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 text-sm" />
      </div>
    </>
  );
}

// Financial News Component
function FinancialNews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const apiKey = import.meta.env.VITE_FINNHUB_API_KEY;
        console.log("API Key:", apiKey);
        const response = await axios.get(
          `/api/finnhub/api/v1/news?category=general&token=${apiKey}`
        );
        const limitedNews = response.data.slice(0, 6);
        setNews(limitedNews);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching news:", err.message, err.response?.data);
        setError("Failed to fetch news");
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <p className="text-sm text-slate-500">Loading...</p>;
  }

  if (error) {
    return <p className="text-sm text-red-500">{error}</p>;
  }

  return (
  <>
    <h2 className="font-bold text-base text-slate-900 mb-2">Financial News</h2>
    <ul className="space-y-4"> {/* Adjusted spacing */}
      {news.map((item) => {
  console.log("News Image URL:", item.image); // Add this line
  return (
    <li key={item.id}>
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-3 group"
      >
        <img
          src={item.image || placeholderImage}
          alt="News Thumbnail"
          onError={(e) => (e.target.src = placeholderImage)}
          className="w-[70px] h-[70px] object-cover"
        />
        <div>
          <p className="text-sm text-slate-800 group-hover:underline leading-tight">
            {item.headline}
          </p>
          <p className="text-xs text-slate-500">
            {new Date(item.datetime * 1000).toLocaleDateString()}
          </p>
        </div>
      </a>
    </li>
  );
})}
    </ul>
  </>
);
}

// Categories Component 
function Categories() {
  const categories = ["Art & Design", "Nature", "People", "Travel", "Trends"];
  const categorieLinks = {
    "Art & Design": "#",
    Nature: "#",
    People: "#",
    Travel: "#",
    Trends: "#",
  };

  return (
    <div>
      <h2 className="font-bold text-base text-slate-900 mb-2">Categories</h2>
      <ul className="space-y-1 text-slate-700">
        {categories.map((category, index) => (
          <li key={index}>
            <a href={categorieLinks[category]} className="hover:underline">
              {category}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
// QuoteCard Component 
function QuoteCard() {
  return (
    <div className="bg-blue-500 rounded-2xl p-12 w-full shadow-2xl h-[456px] font-serif text-lg text-gray-800">
      <div className="text-white relative">
        <p className="text-2xl md:text-3xl font-light leading-relaxed mb-8 relative z-10">
          <span className="absolute -top-8 -left-4 text-8xl text-white/10 font-serif z-0 select-none">
            &ldquo;
          </span>
          <span className="relative z-10">
            We began with just two interns and a vision. <br />
            Not money or answers, but belief made us start. <br />
            <br />
            Discere veritus detraxit pri ut, sea ei dicunt theophrastus. Eum harum animal debitis cu.
          </span>
        </p>
        <div className="pt-6">
          <p className="text-lg font-medium opacity-90">
            Render Lab Solution & Melissa Peterson
          </p>
        </div>
      </div>
    </div>
  );
}

// Main Sidebar Component
export default function SideBar() {
  return (
    <div className="w-[349px] flex flex-col gap-y-6">
      <SearchBox />
      <FinancialNews />
      <Categories />
      <QuoteCard />
    </div>
  );
}
