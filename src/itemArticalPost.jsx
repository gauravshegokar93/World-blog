export default function ItemContainer({info, itemType}) {
    // let ContainerStyle = {
    //     height : "auto",
    //     width : "400px",
    //     padding : "30px",
    //     backgroundColor: 'white'
    // }

    if(itemType == 2){
        ContainerStyle.width = "264px";
    }

    

    return (
        <>
            <div className="itemContainer w-[400px] p-8 bg-white shadow">
                <div className="meta inline-flex items-center text-white bg-blue-500 px-2 rounded mb-[15px] text-sm h-[25px font-semibold]">
                    {info.meta}
                </div>

                <div className="title font-bold mb-[15px] text-[18px]">
                    {info.title}
                </div>

                <div 
                    className="postImage relative overflow-hidden h-[322.533px] mb-[15px]"
                    style={{width: "calc(100% + 60px)", marginLeft: "-30px", }}
                >
                    <a href="#">
                    <img
                        src={info.imageURL}
                        alt="PostImage"
                        className="w-full h-[322.533px] object-cover"
                    />
                    </a>
                </div>


                <div className="shortDiscription font-light mb-[15px]">
                    {info.shortDescription}
                </div>

                <div className="info text-[12px]">
                    <p className="author inline">
                        {info.author}
                    </p>
                    <span className="mx-2">/</span>
                    <p className="uploadDate inline">
                        {info.uploadDate}
                    </p>
                </div>
            </div>
        </>
    )
}