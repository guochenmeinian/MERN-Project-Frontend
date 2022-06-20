import { categories } from "../data";
import React from 'react'
import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex; // horizontal
    padding: 20px;
    justify-content: space-between;
    ${mobile({ padding: "0px", flexDirection:"column" })}
`

const Categories = () => {
  return (
    <div>
        <Container>
            {categories.map(item=>(
                <CategoryItem item={item}/>
            ))}
        </Container>
    </div>
  )
}

export default Categories