import type { Component } from "solid-js";
import Card from "./components/Card";
import banner from "./assets/banner.png";

const App: Component = () => {
  return (
    <div class="container m-auto">
      <header>
        <h1>Ninja Merch</h1>
      </header>
      <img class="rounded-md" src={banner} alt="site banner" />
      <div class="grid grid-cols-4 gap-10 m-4">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default App;
