import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Container = styled.div``;

const Wrapper = styled.div`
    margin-top: 10px;
    padding: 20px;
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
    margin-bottom: 5px;
`

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    // if "filled" no border
    border: ${(props) => props.type === "filled" && "none"};
    // if "filled" background color becomes black otherwise transparent
    background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
    // if filled font color becomes white
    color: ${(props) => props.type === "filled" && "white"};
`

const TopTexts = styled.div``

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`

const Info = styled.div`
    flex: 2.5;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
`

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`

const Image = styled.img`
    width: 200px; // limit the size of the product image
`

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    /**
    * customize the color of the circle
    * change according to the product color
    */
    background-color: ${(props) => props.color}; 
`

const ProductSize = styled.span``;

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`

// line separator
// use css to make the line seems thinner
const Hr = styled.hr`
    background-color: #eee;
    border: none; 
    height: 1px; 
`

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`

const SummaryTitle = styled.h1`
    font-weight: 200;
`

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props) => props.type === "total" && "500"};
    font-size: ${(props) => props.type === "total" && "24px"};
`

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white; // font white
    font-weight: 600;
    cursor: pointer;
`

const Icon = styled.div`
    cursor: pointer;
`

const Cart = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />
        <Wrapper>
            <Title>SHOPPING CART</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton> {/** Defeault Button */}
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://assets.adidas.com/images/w_840,h_840,q_auto:sensitive/cd617334ae5346458a9bae510126d68a_9366/HQ6316_01_standard.jpg" />
                            <Details>   
                                <ProductName>
                                    <b>Product:</b> YEEZY BOOST 350 V2 BONE
                                </ProductName>
                                <ProductId>
                                    <b>ID:</b> 9354326357
                                </ProductId>
                                <ProductColor color="white" />
                                <ProductSize>
                                    <b>Size:</b> 42
                                </ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Icon><AddIcon /></Icon>
                                <ProductAmount>2</ProductAmount>
                                <Icon><RemoveIcon /></Icon>
                            </ProductAmountContainer>
                            <ProductPrice>$ 460</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr />
                    <Product>
                        <ProductDetail>
                            <Image src="https://image.goat.com/transform/v1/attachments/product_template_pictures/images/073/278/580/original/954194_00.png.png?action=crop&width=600" />
                            <Details>       
                                <ProductName>
                                    <b>Product:</b> Ami Tonal Sweatshirt
                                </ProductName>
                                <ProductId>
                                    <b>ID:</b> 2386546493
                                </ProductId>
                                <ProductColor color="#faebd7" />
                                <ProductSize>
                                    <b>Size:</b> L
                                </ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Icon><AddIcon /></Icon>
                                <ProductAmount>1</ProductAmount>
                                <Icon><RemoveIcon /></Icon>
                            </ProductAmountContainer>
                            <ProductPrice>$ 400</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ 860</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$ 15</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$ 0</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>$ 875</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer />
    </Container>
  );
};

export default Cart;