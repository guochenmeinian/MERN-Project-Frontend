import React from 'react'
import styled from 'styled-components'
import {popularProducts} from "../data"
import Product from './Product'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap; // items won't go beyond the current page (ie. expand to right)
    justify-content: space-between;
    background-color: #fcf9f6;
`

const Products = () => {
  return (
    <Container>
        {popularProducts.map((item)=>(
            <Product item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Products