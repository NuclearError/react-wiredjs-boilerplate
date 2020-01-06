import React from 'react';
import { WiredButton, WiredInput } from "wired-elements"

function App() {
  return (
    <section>
      <header>
        <h2>WiredJS Boilerplate</h2>
      </header>
      <wired-input placeholder="Enter name"></wired-input>
      <wired-button>Click Me</wired-button>
    </section>
  );
}

export default App;
