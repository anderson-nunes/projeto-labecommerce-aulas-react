import { createContext, useEffect, useState } from "react";

// PRODUTOS
import { db } from "../db/db";

// Variável de crição do contexto
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(db);
  }, []);

  const [searchProducts, setSearchProducts] = useState('')

  const handleName = (product) => {

    return product.name.toLowerCase().includes(searchProducts.toLowerCase())
  };


  return (
    <ProductContext.Provider
      value={{ products, setProducts, setSearchProducts, handleName }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider