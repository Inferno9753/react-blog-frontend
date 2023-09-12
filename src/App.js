import Topbar from "./components/topbar/Topbar";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Register from "./pages/register/Register"


function App() {
  return (
    <div>
      <Topbar/>
      <Register/>
    </div>
  );
}

export default App;
