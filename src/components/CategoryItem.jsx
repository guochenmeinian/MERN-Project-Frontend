import React from 'react'
import '../styles/CategoryItem.css'
import styled from "styled-components";
import {mobile} from "../responsive";

const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "30vh"})}
`

const CategoryItem = ({item}) => {
  return (

    <div className={"ItemContainer"}>
        <ItemImage src={item.img} />
        <div className={"ItemInfo"}>
            <h1 className={"ItemTitle"}>{item.title}</h1>
            <button className={"ItemButton"}>BUY NOW</button>
        </div>
    </div>
  )
}

export default CategoryItem