import articalData from "./testingInfo.json";
import ItemContainer from "./itemArticalPost.jsx";
import SideBar from "./sidebar.jsx";

function ArticalList(){
    return(
        <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
            {articalData.map((data) => (
                <ItemContainer
                    key={data.id}
                    info={data}
                    itemType={1}
                />
            ))}
        </div>
    )
}

export default function MainArea(){
    return(
        <>
            <div className="flex flex-row w-[1290px] gap-6 px-6">
                <div className="flex-1 max-w-[900px]">
                    <ArticalList />
                </div>

                <div className="w-[300px] shrink-0 sticky top-6 h-fit">
                    <SideBar />
                </div>

            </div>
        </>
    )
}