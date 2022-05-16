import { createContext, useEffect, useState } from "react";

const CartContext = createContext({
  items: [],
  addItem: (id, image, name, price, color, size) => {},
  addMinuseItem: (id, type) => {},
  removeItem: (id) => {},
});

const CartContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemsCart = localStorage.getItem("cart");

    if (itemsCart) {
      setItems(JSON.parse(itemsCart));
    }
  }, []);

  const addItemsToCart = (id, image, name, price, color, size) => {
    const itemCart = {
      id: id,
      image: image,
      name: name,
      count: 1,
      price: price,
      color: color,
      size: size,
    };
    const existsItem = items.find((item) => item.id === id);

    if (existsItem) {
      existsItem.count += 1;
      const newItems = [...items];
      localStorage.setItem("cart", JSON.stringify(newItems));
      setItems(newItems);
    } else {
      const newItems = [...items, itemCart];
      localStorage.setItem("cart", JSON.stringify(newItems));
      setItems(newItems);
    }
  };

  const addMinuseItem = (id, type) => {
    const itemCart = items.find((item) => item.id === id);

    if (type === "add") {
      itemCart.count += 1;
    } else {
      if (itemCart.count === 1) {
        const newItems = items.filter((item) => item.id !== id);
        localStorage.setItem("cart", JSON.stringify(newItems));
        setItems(newItems);
        return;
      } else {
        itemCart.count -= 1;
      }
    }

    const newItems = [...items];
    localStorage.setItem("cart", JSON.stringify(newItems));
    setItems(newItems);
  };

  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(newItems));
    setItems(newItems);
  };

  return (
    <CartContext.Provider
      value={{
        items: items,
        addItem: addItemsToCart,
        addMinuseItem: addMinuseItem,
        removeItem: removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartContextProvider };
