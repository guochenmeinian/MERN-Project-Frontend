import React from 'react'
import styled from "styled-components";

const Container = styled.div`
    // full page
    height: 100vh;
    width: 100vw;
    background: linear-gradient(rgb(255,255,255,0.0), rgb(255,255,255,0.05)),
    url("http://static.zara.net/static//I2015/campaign/resized/WOMAN_03_2560.jpg?14384682920001") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    background-color: white;
    padding: 20px;
    width: 40%;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px; // up20 left10 bottom0 right0
    padding: 10px;
`
const Term = styled.span`
    font-size: 12px;
    margin: 20px 0px;
    text-decoration: underline;
`
const Button = styled.button`
    width: 40%;
    padding: 15px 20px;
    border-width: 0.5px;
    background-color: white;
    &:hover {
        background-color: #fbf8f6
    }
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
        <Title>REGISTER AN ACCOUNT</Title>
        <Form>
          <Input placeholder="first name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Term>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Term>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register