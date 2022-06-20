import React from 'react'
import styled from 'styled-components'
import Search from '@mui/icons-material/Search';
import {Badge} from '@material-ui/core';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import {mobile} from "../responsive";

const url = "https://github.com/guochenmeinian/MERN-project";

/**
 * better to write style component because the parent jsx's style may conflict with the style in this file
 * in that case, chances are likely that our styles here would be overidden
 */
const Container = styled.div`
    margin-top: 2px;
    height: 60px;
    ${mobile({ height: "50px", marginBottom: "65px" })}
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ padding: "10px 0px" })}
`

const Language = styled.div`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`

const Logo = styled.h1`
    font-weight: bold;
    color: black;
    text-decoration: none;

    &:hover {
        color: #828281;
        cursor: pointer;
    }

    ${mobile({ fontSize: "20px", marginLeft: "15px" })}
`

// here align-items makes them align horizontally
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;

    ${mobile({ padding: "8px", marginLeft: "8px" })}
`

const Input = styled.input`
    border: none;
    ${mobile({ width: "60px", padding: "8px" })}
`

const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`;

const Center = styled.div`
    flex:1;
    text-align: center;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end; // move to the (right) end
    ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 30px; // keep some distance
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder='Search'/>
                    <Search style={{color:"gray", fontSize:15}} /> {/* fontSize defeault unit: px */}
                </SearchContainer>
            </Left>
            <Center>
                <a href={url} target="_blank" rel="noopener noreferrer" >
                    <Logo>Full Stack Project</Logo>
                </a>
            </Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>LOGIN</MenuItem>
                <MenuItem>
                    {/* reference for Badge icon: https://mui.com/material-ui/react-badge/ */}
                    <Badge 
                        color="secondary" variant="dot" 
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}>
                        <ShoppingCartTwoToneIcon />
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar