import "./App.css";
import Family from "./Family";

function App() {
  const father = "Uzi";
  const mother = "Aliza";
  const brother = "Barak";
  const me = "Orel";
  const sister = "Itay";

  return (
    <div className="App">
      <Family
        father={father}
        mother={mother}
        brother={brother}
        me={me}
        sister={sister}
      />
    </div>
  );
}

export default App;
