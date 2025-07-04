import articals from "../data/articals";
import postData from "../data/testingPostInfo.json";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import placeholderImage from '../assets/placeholder-news.jpg';
import axios from "axios";

// Item Container
function ItemContainer({ info }) {
  return (
    <div className="itemContainer w-[400px] p-8 bg-white shadow">
      <div className="meta inline-flex items-center text-white bg-blue-500 px-2 rounded mb-[15px] text-sm h-[25px] font-semibold">
        {info.meta}
      </div>

      <a href={`/artical/${info.id}`}>
        <div className="title font-bold mb-[15px] text-[18px]">{info.HeadLine}</div>
        <div
          className="postImage relative overflow-hidden h-[322.533px] mb-[15px]"
          style={{ width: "calc(100% + 60px)", marginLeft: "-30px" }}
        >
          <img
            src={info.headImageURL}
            alt="PostImage"
            className="w-full h-[322.533px] object-cover"
          />
        </div>
        <div className="shortDiscription font-light mb-[15px]">{info.Discription}</div>
      </a>

      <div className="info text-[12px]">
        <p className="author inline">{info.author.name}</p>
        <span className="mx-2">/</span>
        <p className="uploadDate inline">{info.uploadData}</p>
      </div>
    </div>
  );
}

// Artical List
function ArticalList({ articalTypes = "all" }) {
  let theArticals = articals;

  if (articalTypes !== "all") {
    theArticals = theArticals.filter((data) => data.meta === articalTypes);
  }

  return (
    <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
      {theArticals.map((data) => (
        <ItemContainer key={data.id} info={data} />
      ))}
    </div>
  );
}

// Sidebar Components
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

function Post({ info }) {
  return (
    <a href={info.url} className="flex gap-3 mb-4 group" target="_self">
      <img
        src={info.image}
        alt="Post Thumbnail"
        className="w-[70px] h-[70px] object-cover"
      />
      <div>
        <p className="text-sm text-slate-800 group-hover:underline leading-tight">
          {info.title}
        </p>
        <p className="text-xs text-slate-500">{info.date}</p>
      </div>
    </a>
  );
}

function PostList() {
  return (
    <>
      <h2 className="font-bold text-base text-slate-900 mb-2">Posts</h2>
      {postData.map((data, index) => (
        <Post info={data} key={index} />
      ))}
    </>
  );
}

function FinancialNews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const apiKey = import.meta.env.VITE_FINNHUB_API_KEY;
        const response = await axios.get(
          `/api/finnhub/api/v1/news?category=general&token=${apiKey}`
        );
        setNews(response.data.slice(0, 6));
        setLoading(false);
      } catch (err) {
        console.error("Error fetching news:", err.message);
        setError("Failed to fetch news");
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <p className="text-sm text-slate-500">Loading...</p>;
  if (error) return <p className="text-sm text-red-500">{error}</p>;

  return (
    <>
      <h2 className="font-bold text-base text-slate-900 mb-2">Financial News</h2>
      <ul className="space-y-4">
        {news.map((item) => (
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
        ))}
      </ul>
    </>
  );
}

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
            
          </span>
        </p>
      
        </div>
      </div>
  
  );
}

// SideBar Combiner
function SideBar() {
  return (
    <div className="w-[349px] flex flex-col gap-y-6">
      <SearchBox />
      <PostList />
      {/* <FinancialNews /> */}
      <Categories />
      <QuoteCard />
    </div>
  );
}

// ✅ Final Exported HomePage Component
export default function HomePage({ articalTypes = "all" }) {
  return (
    <div className="flex justify-center bg-[#f5f5f5] py-9">
      <div className="flex flex-row w-[1290px] gap-6 px-6">
        <div className="flex-1 max-w-[900px]">
          <ArticalList articalTypes={articalTypes} />
        </div>
        <div className="w-[300px] shrink-0 sticky top-6 h-fit">
          <SideBar />
        </div>
      </div>
    </div>
  );
}
