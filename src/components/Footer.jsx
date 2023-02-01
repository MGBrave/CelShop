import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";

const FooterArea = styled.footer`
    display: flex;
    aligh-items: center;
    justify-content:center;
    gap:50px;
    background: crimson;
    padding: 20px;
   


    p{
    
        color: white;

        &:hover{
            text-decoration: underline;
        }
    }
`;

export const Footer = () => {
    return(
        <FooterArea>
            <p>Made by Marta Geraldo</p>
        </FooterArea>
    )
}