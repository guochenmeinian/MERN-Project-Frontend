import React from 'react'
import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send';
import { mobile } from '../responsive';

const Container = styled.div`
    height: 60vh;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column; // different from previous implementation (up and down now)
`;

const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`;

const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({ textAlign: "center"})}
`;

const InputContainer = styled.div`
    width: 45%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray
    ${mobile({ width: "80%"})} // make search bar bigger for mobile devices
`;

const Input = styled.input`
    border: none;
    flex: 8;
`;

const Button = styled.button`
    flex: 2;
    border: none;
    background-color: #d2b48c;
    color: white;
    &:hover {
        cursor: pointer;
    }
`;

const NewsLetter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get timely updates from your favorite products.</Description>
        <InputContainer>
            <Input placeholder='Your email'/>
            <Button>
                <SendIcon/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default NewsLetter