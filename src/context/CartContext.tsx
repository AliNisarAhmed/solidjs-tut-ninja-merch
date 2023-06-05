import { createStore, SetStoreFunction } from "solid-js/store";
import { createContext, ParentComponent, useContext } from "solid-js";

type Context = {
  items: CartItem[];
  setItems: SetStoreFunction<CartItem[]>;
};

export const CartContext = createContext<Context>();

export const CartContextProvider: ParentComponent = (props) => {
  const [items, setItems] = createStore<CartItem[]>([]);

  return (
    <CartContext.Provider value={{ items, setItems }}>
      {props.children}
    </CartContext.Provider>
  );
};

export const useCartContext = (): Context => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("Context not enclosed properly");
  }

  return context;
};
