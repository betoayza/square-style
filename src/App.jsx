import { Square } from "./components/Square";

function App() {
  return (
    <div
      className="App border"
      style={{ display: "grid", placeItems: "center", height: "100vh" }}
    >
      <Square />
    </div>
  );
}

export default App;
