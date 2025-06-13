import articalData from "./data/testingInfo.json";
import articals from "./data/articals.json";
import {FaSearch} from "react-icons/fa";
import postData from "./data/testingPostInfo.json";

// Item Container :

function ItemContainer({info}) {
    return (
        <>
            <div className="itemContainer w-[400px] p-8 bg-white shadow">
                <div className="meta inline-flex items-center text-white bg-blue-500 px-2 rounded mb-[15px] text-sm h-[25px font-semibold]">
                    {info.meta}
                </div>

                {/* <a href={info.URL}> */}
                <a href={`/artical/${info.id}`}>

                    <div className="title font-bold mb-[15px] text-[18px]">
                        {info.HeadLine}
                    </div>

                    <div 
                        className="postImage relative overflow-hidden h-[322.533px] mb-[15px]"
                        style={{width: "calc(100% + 60px)", marginLeft: "-30px", }}
                    >
                        <img
                            src={info.headImageURL}
                            alt="PostImage"
                            className="w-full h-[322.533px] object-cover"
                        />
                    </div>

                    <div className="shortDiscription font-light mb-[15px]">
                        {info.Discription}
                    </div>

                </a>

                <div className="info text-[12px]">
                    <p className="author inline">
                        {info.author.name}
                    </p>
                    <span className="mx-2">/</span>
                    <p className="uploadDate inline">
                        {info.uploadData}
                    </p>
                </div>

            </div>
            
        </>
    )
}


// Side Bar :

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
            {postData.map((data, index) => (
                <Post info={data} key={index}/>
            ))}
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
                        Discere veritus detraxit pri ut, sea ei dicunt theophrastus. Eum harum animal debitis cu
                    </span>
                </p>

                <div className="pt-6">
                    <p className="text-lg font-medium opacity-90">
                        Melissa Peterson
                    </p>
                </div>
            </div>
        </div>
    );
}


function SideBar() {
    return (
        <div className="w-[349px] flex flex-col gap-y-6">
            <SearchBox />
            <PostList />
            <Categories />
            <QuoteCard />
        </div>
    )
};


// Home Page Component :

function ArticalList(){
    return(
        <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
            {articals.map((data) => (
                <ItemContainer
                    key={data.id}
                    info={data}
                />
            ))}


            

        </div>
    )
}

export default function HomePage(){
    return(
        <>
            <div className="flex justify-center bg-[#f5f5f5] py-9">
                <div className="flex flex-row w-[1290px] gap-6 px-6">
                    <div className="flex-1 max-w-[900px]">
                        <ArticalList />
                    </div>

                    <div className="w-[300px] shrink-0 sticky top-6 h-fit">
                        <SideBar />
                    </div>

                </div>
            </div>
        </>
    )
}