import {FaSearch} from "react-icons/fa";
import postData from "./testingPostInfo.json";

function SearchBox(){
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
    )
}

function Post({info}){

    return(
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
    )
}

function PostList(){
    return(
        <>
            <h2 className="font-bold text-base text-slate-900 mb-2">Posts</h2>
            <Post info={postData[0]} />
            <Post info={postData[0]} />
            <Post info={postData[0]} />
            <Post info={postData[0]} />
            <Post info={postData[0]} />
            <Post info={postData[0]} />
            <Post info={postData[0]} />

        </>
    );
}

function Categories(){
    const categories = [
        "Art & Design",
        "Nature",
        "People",
        "Travel",
        "Trends",
    ];

    const categorieLinks = {
        "Art & Design" : "#",
        "Nature" : "#",
        "People" : "#",
        "Travel": "#",
        "Trends" : "#",
    };

    return(
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
    )
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
             We began with just two interns and a vision.
Not money or answers, but belief made us start.


                    </span>
                </p>

                <div className="pt-6">
                    <p className="text-lg font-medium opacity-90">
                        Render Lab Solution
                    </p>
                </div>
            </div>
        </div>
    );
}


export default function SideBar() {
    return (
        <div className="w-[349px] flex flex-col gap-y-6">
            <SearchBox />
            <PostList />
            <Categories />
            <QuoteCard />
        </div>
    )
};