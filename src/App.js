import "./App.css";
import { data } from "./assets/data";
import FilterContent from "./Components/FilterContent/FilterContent";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <FilterContent />
    </div>
  );
}

export default App;
