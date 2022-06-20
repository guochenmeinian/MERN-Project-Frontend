import React from 'react'
import styled from 'styled-components'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from 'react';
import { sliderItems } from "../data";
import { mobile } from '../responsive';

/**
 * for position absolute, the parent should have position relative
 */

const Container = styled.div`
    width: 100%;
    height: 100vh; // full screen slider
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({ display: "none" })}
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%; // round (circle) shape
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    /** props: easy to use */
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    cursor: pointer;
    z-index: 1; // stack (overlap) on the page
`

/**
    flex property of the parent (Wrapper) changes the 
    display of slide (children) from vertical to horizontal 
    so now we can use button to change slide
*/
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props=>props.slideIndex * -100}vw);
    transition: all 1.5s ease;
`

const Slide = styled.div`
    width: 100vw; // (one) full page height and width
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props=>props.bg};
`

const ImageContainer = styled.div`
    flex: 1;
    height: 100%;
    margin-top: 10%;
`

const Image = styled.img`
    height: 80%;
    
    // only applies to screen with min-width 500px (pc)
    @media only screen and (min-width:500px) {
        margin-left: 5cm;
    }
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    margin-right: 75px;
`

const Title = styled.h1`
    font-size: 70px;
`

const Description = styled.p`
    font-size: 20px;
    margin: 50px 0px;
    font-weight: 500;
    letter-spacing: 3px;
`

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent; // blend in with the background color
    cursor: pointer;
`

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
        }
    };

  return (
    <div>
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowBackIcon />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item)=>(
                    <Slide bg={item.bg} key={item.key}>
                        <ImageContainer>
                            <Image src={item.img}/>
                        </ImageContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Description>{item.desc}</Description>
                            <Button>SHOP NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={()=>handleClick("right")}>
                <ArrowForwardIcon />
            </Arrow>
        </Container>
    </div>
  )
}

export default Slider