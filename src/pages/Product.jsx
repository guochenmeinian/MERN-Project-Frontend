import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/NewsLetter";
import Footer from "../components/Footer";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Wrapper = styled.div`
  display: flex;
  margin: 50px;
  padding: 50px;
  background-color:rgba(254,249,242, 0.5);
  ${mobile({ margin: "0px", padding: "10px", flexDirection: "column" })}
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  margin-left: 50px;
  padding: 0px 50px;
  ${mobile({ padding: "15px", margin: "0px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  display: flex;
  width: 50%;
  margin: 30px 0px;
  justify-content: space-between;
  ${mobile({ width: "95%" })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  display: flex;
  align-items: center;
  ${mobile({ width: "0px 20px", flexDirection: "column" })}
`;

const FilterColor = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.color}; // take parameter as background-color
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 8px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 800;
`;

const Amount = styled.span`
  display: flex;
  height: 30px;
  width: 30px;
  border-radius: 10px;
  border: 1px solid black;
  align-items: center;
  justify-content: center;
  margin: 0 5px; // keep some distance between - and +
`;

const Button = styled.button`
  background-color: white;
  padding: 15px;
  border: 1.2px solid black;
  cursor: pointer;

  &:hover {
    background-color: #fbf8f6;
  }
`;

const Icon = styled.div`
  cursor: pointer;
`;

const Product = () => {
  // get id and update the page accrodingly
  const location = useLocation();
  const id = location.pathname.split("/")[2]; // get id (after second / which is after products)
  const [product, setProduct] = useState({});

  // update amount of the selected products
  const [quantity, setQuantity] = useState(1);

  // update color and size
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  // use dispatch
  const dispatch = useDispatch();

  // update product using effect hook and make id dependency
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("products/" + id);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleShoppingButton = () => {
    console.log(product.price)
    dispatch(
      addProduct({ ...product, quantity, color, size })
    );
  };

  return (
    <div>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImageContainer>
          <Image src={product.img} />
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              {/* ?: check if color or size is selected*/}
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} /> // key (each color) is unique
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Icon>
                <RemoveIcon onClick={() => handleQuantity("dec")} />
              </Icon>
              <Amount>{quantity}</Amount>
              <Icon>
                <AddIcon onClick={() => handleQuantity("inc")} />
              </Icon>
            </AmountContainer>
            <Button onClick={handleShoppingButton}>Add To Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Product;
