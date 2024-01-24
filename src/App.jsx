import { useState } from "react";

import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Example from "./components/Example.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Example />
      </main>
    </>
  );
}

export default App;
