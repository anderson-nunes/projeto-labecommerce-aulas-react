import { createContext, useEffect, useState } from "react";

// PRODUTOS
import { db } from "../db/db";

// Variável de crição do contexto
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading] = useState(false)
  const [searchProducts, setSearchProducts] = useState('')
  const [searchCategory, setSearchCategory] = useState('')
  const [price, setPrice] = useState('')

  useEffect(() => {
    setProducts(db);
  }, []);


  const handleName = (product) => {

    return product.name.toLowerCase().includes(searchProducts.toLowerCase())
  };

  const filterCategory = (product) => {

    if (searchCategory === 'Celular') {

      return product.category.includes(searchCategory)

    } else if (searchCategory === 'Relogio') {

      return product.category.includes(searchCategory)

    } else if (searchCategory === 'Fone') {

      return product.category.includes(searchCategory)

    } else if (searchCategory === 'Notebook') {

      return product.category.includes(searchCategory)

    } else if (searchCategory === 'Ipad') {

      return product.category.includes(searchCategory)

    } else {

      return product
    }
  }

  const searchFilterPrice = (product) => {

    if (price === 0) {

      return product
    }

    return price === '0' || (price ? product.price <= price : true)

  }


  return (
    <ProductContext.Provider
      value={{ products, setProducts, setSearchProducts, handleName, loading, searchCategory, setSearchCategory, filterCategory, searchFilterPrice, price, setPrice }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider