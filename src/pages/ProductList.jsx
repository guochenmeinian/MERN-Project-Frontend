import React from 'react'
import styled from 'styled-components'
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import Products from "../components/Products"
import Newsletter from "../components/NewsLetter"
import Footer from "../components/Footer"

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
`;

const FilterText = styled.span`
    margin-right: 20px;
    font-size: 20px;
    font-weight: 600;
`;

const Select = styled.select`
    margin-right: 20px;
    padding: 10px;
`;

const Option = styled.option``;

const ProductList = () => {
  return (
    <div> 
        <Announcement/>
        <Navbar/>
        <h1 style={{margin:"20px"}}>Product Page</h1>
        <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
        </FilterContainer>
        <Products />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default ProductList