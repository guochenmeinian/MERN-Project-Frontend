import React from 'react'
import styled from 'styled-components'
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import Newsletter from "../components/NewsLetter"
import Footer from "../components/Footer"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Wrapper = styled.div`
    display: flex;
    margin: 50px;
    padding: 50px;
`

const ImageContainer = styled.div`
    flex: 1;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const InfoContainer = styled.div`
    flex: 1;
    margin-left: 50px;
    padding: 0px 50px;
`

const Title = styled.h1`
    font-weight: 200;
`

const Desc = styled.p`
    margin: 20px 0px;
`

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`
const FilterContainer = styled.div`
    display: flex;
    width: 50%;
    margin: 30px 0px;
    justify-content: space-between;
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    display: flex;
    align-items: center;
`

const FilterColor = styled.div`
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color}; // take parameter as background-color
    margin: 0px 5px;
    cursor: pointer;
` 

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 8px;
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-between;
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 800;
`

const Amount = styled.span`
    display: flex;
    height: 30px;
    width: 30px;
    border-radius: 10px;
    border: 1px solid black;
    align-items: center;
    justify-content: center;
    margin: 0 5px; // keep some distance between - and +
`

const Button = styled.button`
    background-color: white;
    padding: 15px;
    border: 1.2px solid black;
    cursor: pointer;

    &:hover {
        background-color: #fbf8f6
    }
`

const Icon = styled.div`
    cursor: pointer;
`

const Product = () => {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <Wrapper>
            <ImageContainer>
                <Image src="https://image.goat.com/transform/v1/attachments/product_template_pictures/images/073/278/580/original/954194_00.png.png?action=crop&width=600"/>
            </ImageContainer>
            <InfoContainer>
                <Title>Ami Tonal Sweatshirt</Title>
                <Desc>
                Cut from heavy loopback organic cotton, 
                AMI's sweatshirt is a boxy fit for a vintage athleisure look. 
                The crew neck style has raglan sleeves for comfortable movement. 
                The Ami de Cœur embroidery punctuates the chest. Color: natural
                </Desc>
                <Price>$400</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="#faebd7"/>
                        <FilterColor color="blue"/>
                        <FilterColor color="black"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                            <FilterSizeOption>2XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Icon><RemoveIcon/></Icon>
                        <Amount>1</Amount>
                        <Icon><AddIcon/></Icon>
                    </AmountContainer>
                    <Button>Add To Cart</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Product