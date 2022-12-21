import CreateVehicle from "./components/create-vehicle";
import { Home } from "./Pages/home";


function App() {
  return (
    <div className="-bg-grey-6">
      <Home/>
      <CreateVehicle />
    </div>
  );
}

export default App;