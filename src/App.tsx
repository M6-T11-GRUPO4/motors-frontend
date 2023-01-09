import Auction from "./components/cards/auction";
import CreateVehicle from "./components/modais/createVehicle";
import { Home } from "./Pages/home";
import RegisterPage from "./Pages/register";
import { Routers } from "./Routes";

function App() {
  return (
    <div className="-bg-grey-8 w-full">
      <Routers />
     
    </div>
  );
}

export default App;
