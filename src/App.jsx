import reactImg from "./assets/logo192.png";
import coreImg from "./logo.svg";
import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "./components/Data";
import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import TabButton from "./components/TabButton";
import CoreConcept from "./components/CoreConcept";
import Examples from "./components/Examples";


function App() {

  return (
    <div>
      <Header />
      <CoreConcept />
      <Examples />
    </div>
  );
}

export default App;
