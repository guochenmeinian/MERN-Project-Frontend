import React from 'react'
import styled from 'styled-components'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import SchoolIcon from '@mui/icons-material/School';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column"})}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none"})}
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#f6f2f2"})}
`

const Logo = styled.h1``

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none; // no bullet points
    display: flex;
    flex-wrap: wrap; // multiple lines display
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 15px;
`

const Desc = styled.div`
    margin: 20px 0px;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    height: 20px;
    width: 40px;
    display: flex;
    margin-right: 20px;
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 75%;
`

const paymentURL = "https://cdn.webshopapp.com/shops/218525/files/371942398/payment-methods-epicerie-ludo.png";

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Contact me</Logo>
            <Desc>Click the icons below to reach me. Looking forward to chat with you :)</Desc>
            <SocialContainer>
                <SocialIcon><GitHubIcon/></SocialIcon>
                <SocialIcon><InstagramIcon/></SocialIcon>
                <SocialIcon></SocialIcon>
            </SocialContainer>
            <Payment style={{marginTop:"10px", marginLeft:"60px"}} src={paymentURL}/>
        </Left>
        <Center>
            <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Men Clothes</ListItem>
                    <ListItem>Women Clothes</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Favourite</ListItem>
                    <ListItem>Track Order</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
        </Center>
        <Right>
            <Title>Contact Information</Title>
            <ContactItem>
                <SchoolIcon style={{marginRight:"10px"}}/> 
                Ohio State University
            </ContactItem>
            <ContactItem>  
                <PhoneIcon style={{marginRight:"10px"}}/>
                +1 315-807-4801
            </ContactItem>
            <ContactItem>
                <EmailIcon style={{marginRight:"10px"}}/>
                School Email: guo.2034@osu.edu
            </ContactItem>
            <ContactItem>
                <AttachEmailIcon style={{marginRight:"10px"}}/>
                Personal Email: guochenmeinian@outlook.com
            </ContactItem>
        </Right>
    </Container>
  )
}

export default Footer