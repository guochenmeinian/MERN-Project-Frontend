import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Product from './Product'
const axios = require("axios")

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap; // items won't go beyond the current page (ie. expand to right)
    justify-content: space-between;
    background-color: #fcf9f6;
`

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // console.log("input parameters: ", cat, filters, sort); // for testing purpose

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data); // get response array
        // console.log(res.data); // for testing purpose
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    
    // console.log(products); // for testing purpose
    // use filter to filter (already categorized) products 
    
    // in case I forget or anyone reading the code is not familiar how to use this method, below is the JS filter tutorial page
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    setFilteredProducts(
        // note: filter function only takes array []
        products.filter((item) =>
        // eslint-disable-next-line
        Object.entries(filters = filters === undefined ? "" : filters).every(([key, value]) =>
          item[key].includes(value)
          )
        )
    );
}, [products, cat, filters]);

  // sort filter
  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  // console.log(products) // for testing purpose
  // console.log(filteredProducts) // for testing purpose

  // only display a maximum of 8 products by using slice method
  return (
    <Container>
      {filteredProducts.slice(0, 15).map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
};



export default Products