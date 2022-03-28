import React from "react";

function App() {
  const [state, updatestate] = React.useState("time");
  function newtime() {
    updatestate(new Date().toLocaleTimeString().substring(0, 8));
    console.log(state);
  }
  return (
    <div className="container">
      <h1>{state}</h1>
      <button onClick={newtime}>Get Time</button>
    </div>
  );
}

export default App;
