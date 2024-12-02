import { FlightProvider } from "./Contexts/FlightProvider";
import Home from "./Pages/Home";

const App = () => {
  return (
    <FlightProvider>
      <Home />
    </FlightProvider>
  );
}

export default App;
