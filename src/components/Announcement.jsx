import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    height: 45px;
    background: linear-gradient(to right, #e6b264 0%, #e9c186 100%);
    color: #2a2727;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;

    ${mobile({ fontSize: "20px", padding: "25px" })}
`

const Text = styled.h4`
  font-weight: 500;
  font-size: 18px;
`

const Announcement = () => {
  return (
    <Container>
      <Text>Tech Stack used: MERN (MongoDB + Express + ReactJS + NodeJS); By Chenmeinian Guo</Text>
    </Container>
  )
}

export default Announcement