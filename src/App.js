import "./App.css";
import Content from "./Content";
import Sidebar from "./Sidebar";
import Payments from "./Payments";

function App() {
  return (
    <div className="app-body">
      <div className="app-body-sidebar">
        <Sidebar />
      </div>
      <div className="app-body-content">
        <Content />
      </div>
      <div className="app-body-payment">
        <Payments />
      </div>
    </div>
  );
}

export default App;
