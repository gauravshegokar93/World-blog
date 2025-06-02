import ItemContainer from "./itemArticalPost.jsx";
import Sidebar from "./sidebar.jsx";
import theData from "./testingInfo.json";
import MainArea from "./mainArea.jsx"


function App() {
  return (
    <div style={{ backgroundColor: '#F5F5F5' }}>
        {/* <ItemContainer info={theData[0]} itemType={1}/>
        <ItemContainer info={theData[1]} itemType={1}/>
        <ItemContainer info={theData[2]} itemType={2}/> */}

      {/* <Sidebar /> */}

      <MainArea />


    </div>
  );
}

export default App;