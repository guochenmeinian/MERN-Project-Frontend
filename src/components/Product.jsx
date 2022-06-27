import React from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

// Info should appear before Container to avoid error
const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  /**
  * used rgba rather than opacity because opacity will affect the child (Icon)
  */
  background-color: rgba(0,0,0,0.2); 
  opacity: 0; // initially invisible
  z-index: 3;
  display: flex;
  align-items: center; // ****not align-content, spent mintues to find this mistake
  justify-content: center;
`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fcf9f6;
    position: relative;
    /** if hover the shopping card section, Info section appears  */
    &:hover ${Info} {
      opacity: 1;
      transition: 0.75s ease;
    }
`

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`

const Image = styled.img`
  height: 75%;
  z-index: 2;
`

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: center;
  margin: 10px;

  // implemented hover function using jsx instead of traditional css
  transition: 0.5s ease;
  &:hover{
    transform: scale(1.25);
    cursor: pointer;
  }
`

const Product = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src={item.img}/>
        <Info>
          <Icon>
            <SearchIcon/>
          </Icon>
          <Icon>
            <Link to={`/product/${item._id}`}><ShoppingCartOutlinedIcon/></Link>
          </Icon>
          <Icon>
            <FavoriteBorderIcon/>
          </Icon>
        </Info>
    </Container>
  )
}

export default Product