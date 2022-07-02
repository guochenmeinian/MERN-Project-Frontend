import React, { useState } from 'react'
import styled from 'styled-components'
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import Products from "../components/Products"
import Newsletter from "../components/NewsLetter"
import Footer from "../components/Footer"
import { mobile } from '../responsive'
import { useLocation } from 'react-router-dom'

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
    ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
    margin-right: 20px;
    font-size: 20px;
    font-weight: 600;
    ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
    margin-right: 20px;
    padding: 10px;
    ${mobile({ margin: "5px 0px" })}
`;

const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2]; // get category name (after second / which is after products)
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value; // here e is a react-related object just have to remember that
    setFilters({
      ...filters, // keep already specified filters
      [e.target.name]: value, // add new filter
    });
  };

  return (
    <div>
      <Navbar />
      <Announcement />
      <h1 style={{'marginLeft': '20px', 'marginTop': '10px'}}>{cat}</h1>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option>white</Option>
            <Option>ivory</Option>
            <Option>biege</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>navy</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
            <Option>purple</Option>
            <Option>others</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList