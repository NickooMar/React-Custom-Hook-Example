import { useState } from "react";

function useActive(initialState) {
  const [active, setActive] = useState(initialState);

  const handleToggle = () => setActive(!active);

  const handleTrue = () => setActive(true);
  const handleFalse = () => setActive(false);

  return [active, { handleToggle, handleTrue, handleFalse }];
}

function App() {
  const [active, { handleToggle, handleTrue, handleFalse }] = useActive(false);

  return (
    <div className="App">
      <button onClick={handleToggle}>Toggle</button>
      <button onClick={handleTrue}>True</button>
      <button onClick={handleFalse}>False</button>

      <h3>{active.toString()}</h3>
      <ShowInfo />
    </div>
  );
}

function ShowInfo() {
  const [active, { handleToggle }] = useActive(false);

  return (
    <div style={{ background: "#000", marginTop: "10px" }}>
      <button onClick={() => handleToggle()}>Show/Hide</button>

      {active && (
        <div>
          <h1>User info</h1>
        </div>
      )}
    </div>
  );
}

export default App;


