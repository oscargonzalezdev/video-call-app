import Notifications from "./components/Notifications";
import Options from "./components/Options";
import VideoPlayer from "./components/VideoPlayer";

function App() {

  return (
    <div >
      <VideoPlayer />
      <Options>
        <Notifications/>
      </Options>
    </div>
  );
}

export default App;
