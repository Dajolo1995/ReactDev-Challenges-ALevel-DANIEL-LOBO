import Index from "./router/Index";
import "./App.css";
import HomeWorkState from "./context/homework/HomeWorkState";
import LabelState from "./context/label/LabelState";

function App() {
  return (
    <HomeWorkState>
      <LabelState>
        <Index />
      </LabelState>
    </HomeWorkState>
  );
}

export default App;
