import { useState, useEffect } from "react";

export const useQuantity = () => {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setQuantity(data.total);
    };

    fetchProducts();
  }, []);

  //We don't have to return an object here. If all we need is the
  //quantity, just "return quantity;". Here we return both so that
  //we can set the quantity in another component.
  return {
    quantity: quantity,
    setQuantity: setQuantity,
  };
};
