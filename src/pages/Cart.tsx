import { Component } from "solid-js";
import { Card } from "../components/Card";

export const Cart: Component = () => (
  <div class="max-w-md my-8 mx-auto">
    <Card rounded={true} flat={false}>
      <h2>Your Shopping Cart</h2>
    </Card>
  </div>
);
