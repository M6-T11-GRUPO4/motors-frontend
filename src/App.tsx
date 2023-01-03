import Auction from "./components/cards/auction";
import CreateVehicle from "./components/create-vehicle";
import { Home } from "./Pages/home";
import RegisterPage from "./Pages/register";
import { Routers } from "./Routes";


function App() {
  return (
    <div className="-bg-grey-10">
      {/* <Routers/> */}
      <RegisterPage />
    </div>
  );
}

export default App;