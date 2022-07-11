import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  // full page
  height: 100vh;
  width: 100vw;
  background: linear-gradient(rgb(255, 255, 255, 0), rgb(255, 255, 255, 0.05)),
    url("http://static.zara.net/static//I2015/campaign/resized/WOMAN_09_2560.jpg?14384682920001")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  background-color: white;
  padding: 20px;
  width: 25%;
  ${mobile({ width: "50%", height: "44%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px; // up20 left10 bottom0 right0
  padding: 10px;
`;
const Link = styled.a`
  font-size: 12px;
  margin: 6px 0px;
  text-decoration: underline;
  cursor: pointer;
`;

const Button = styled.button`
  margin: 20px 0px 10px 0px;
  width: 40%;
  padding: 15px 20px;
  border-width: 0.5px;
  background-color: white;
  &:hover {
    background-color: #fbf8f6;
  }
  // visible in slow 3G (chrome f12 network section)
  &:disabled{
    color: green;
    cursor: not-allowed;
  }
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state)=>state.user);

  const handleClick = (e) => {
    e.preventDefault(); // click login button won't refresh page
    // used chrome redux plugin to check if the login was successful
    login(dispatch, {username, password})
  }
  return (
    <Container>
      <Wrapper>
        <Title>LOGIN IN</Title>
        <Form>
          <Input 
            placeholder="username" 
            onChange={(e)=>setUsername(e.target.value)} 
          />
          <Input 
            placeholder="password" 
            type="password"
            onChange={(e)=>setPassword(e.target.value)}
          />

          {/** here disabled corresponds to whether the call is successful */}
          <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>

          {/** 
           * here error also corresponds with the result from our hook (true/false) 
           * this error message appears if the error is true (meaning login failure)
          */}
          {error && <Error>wrong credentials</Error>}
          
          <Link>DON'T REMEMBER YOUR PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
