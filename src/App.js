import { useState } from "react";
import "./App.css";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import { DataProvider } from "./components/contextApi";

import { UserProvider } from "./components/contextApi/ContextUser";

function App() {
  let fname = "Ghana";
  let [userName, setUserName] = useState("Vaibhav");
  return (
    <div className="App">
      <h1>{userName}</h1>
      <DataProvider value={fname}>
        <ComponentA />
      </DataProvider>

      <UserProvider value={setUserName}>
        <ComponentA />
        <ComponentB />
      </UserProvider>
    </div>
  );
}

export default App;
