// import TutOne from "./TutOne";
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        {/* CALLING MULTIPLE COMPONENTS */}
        {/* <TutOne /> */}
        <Home />
      </div>
    </div>
  );
}

export default App;
