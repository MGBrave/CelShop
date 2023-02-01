import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";


const HeaderArea = styled.header`
    display: flex;
    aligh-items: center;
    justify-content:center;
    gap:50px;
    background: crimson;
    padding: 20px;
    margin-bottom:70px;


    a{
        text-decoration: none;
        color: white;
        font-weight: bold;

        &:hover{
            text-decoration: underline;
        }
    }
`;


export const Header = () => {
    return(
        <HeaderArea>
            <Link to="/">STORE</Link>
            <Link to="/cart">CART</Link>
        </HeaderArea>
    )
}