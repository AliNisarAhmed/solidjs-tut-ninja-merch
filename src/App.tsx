import { Component, createSignal } from "solid-js";
import banner from "./assets/banner.png";
import { Route, Routes, A } from "@solidjs/router";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Product } from "./pages/Product";
import { useCartContext } from "./context/CartContext";

const App: Component = () => {
  const [darkTheme, setDarkTheme] = createSignal<boolean>(false);
  const { items } = useCartContext();
  const quantity = () => items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div class="container m-auto">
      <header
        class="my-4 p-2 text-xl flex items-center gap-4"
        classList={{
          "bg-neutral-900": darkTheme(),
          "text-white": darkTheme(),
        }}
      >
        <span
          class="material-symbols-outlined cursor-pointer"
          onClick={() => setDarkTheme((p) => !p)}
        >
          light_mode
        </span>
        <h1>Ninja Merch</h1>

        <A href="/">Home</A>
        <A href="/cart">Cart ({quantity()})</A>
      </header>
      <img class="rounded-md" src={banner} alt="site banner" />

      <Routes>
        <Route path="/" component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/product/:id" component={Product} />
      </Routes>
    </div>
  );
};

export default App;
