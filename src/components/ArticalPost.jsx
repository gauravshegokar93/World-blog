import { useParams } from 'react-router-dom';
import articals from "../data/articals";


function ArticalPost(){
    const { id } = useParams();
    const articalData = articals.find(item => item.id.toString() === id);

    if (!articalData)
        return ( <div>404: Artical Not found</div> );

    return (
        <div className="w-full h-full flex justify-center my-14">
            <div className="max-w-[890px] h-full">
                <div id="articalHead" className="">
                    <h1
                        id="mainHeadLine"
                        className="text-5xl font-bold text-black mb-6 "
                    >{articalData.HeadLine}</h1>

                    <p
                        id="mainDiscription"
                        className="text-2xl text-gray-500 mb-6"
                    >{articalData.Discription}</p>

                    <div 
                        id="articalInformaion"
                        className="flex gap-6 max-w-[890px] w-full text-sm text-gray-600 flex-row items-center mb-[30px]"
                    >
                        <div 
                            id="authurProfilePic"
                            className="bg-cover bg-center w-[32px] h-[32px] rounded-full"
                            style={{ backgroundImage: `url(${articalData.author.profilePicURL})`}}

                        ></div>

                        <p id="author">{articalData.author.name}</p>

                        <p id="uploadData">{articalData.uploadData}</p>

                        <p id="meta">{articalData.meta}</p>
                    </div>
                </div>

                <div
                    id="headImage"
                    className="bg-cover bg-center  w-full h-[500px] mb-[50px]"
                    style={{ backgroundImage: `url(${articalData.headImageURL})`}}
                >
                </div>

                <div id="articalBody" className="mb-[20px]">
                    {articalData.paragraphs.map((para) => (
                        <p
                            className="text-xl pb-[30px]"
                        >
                            {para}
                        </p>
                    ))}
                </div>

                <div
                    id="tags"
                    className="flex flex-row gap-6 items-center"                
                >
                    {/* <div
                        className="text-xl text-gray-600 italic font-bold"
                    >Tags :</div> */}
                    {articalData.tags.map((para) => (
                        <div
                            className="bg-gray-200 rounded-2xl text-center px-2 py-1 font-bold"
                        >
                            {para}
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default ArticalPost;