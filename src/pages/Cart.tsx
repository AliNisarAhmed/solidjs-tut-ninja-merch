import { Component, For } from "solid-js";
import { Card } from "../components/Card";
import { useCartContext } from "../context/CartContext";

export const Cart: Component = () => {
  const { items } = useCartContext();

  const total = () =>
    items.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <div class="max-w-md my-8 mx-auto">
      <Card rounded={true} flat={false}>
        <h2>Your Shopping Cart</h2>
        <For each={items}>
          {(item) => (
            <p class="my-3">
              {item.title} - ${item.price} x {item.quantity}
            </p>
          )}
        </For>

        <p class="mt-8 pt-4 border-t-2 font-bold">
          Total cart price - ${total()}
        </p>
      </Card>
    </div>
  );
};
