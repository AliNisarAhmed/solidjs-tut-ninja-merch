import { Component, createResource, For, Show } from "solid-js";
import { Card } from "../components/Card";

type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  img: string;
};

const fetchProducts = async () => {
  const res = await fetch("http://localhost:4000/products");
  return res.json();
};

export const Home: Component = () => {
  const [products] = createResource<Product[]>(fetchProducts);

  return (
    <Show when={!products.loading} fallback={<p>Loading...</p>}>
      <div class="grid grid-cols-4 gap-10 m-4">
        <For each={products()}>
          {(product) => (
            <Card rounded={true} flat={true}>
              <img src={product.img} alt="product image" />
              <h2 class="my-3 font-bold">{product.title}</h2>
            </Card>
          )}
        </For>
      </div>
    </Show>
  );
};
