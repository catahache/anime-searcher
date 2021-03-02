import React, { useState } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";

const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    // position: fixed;
    // top: 15px;
    // right: 20px;
    z-index: 20;
    display: none;
    cursor: pointer;
    @media (max-width: 768px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }
    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${({ isOpen }) => (isOpen ? "#ccc" : "#333")};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;
        &:nth-child(1) {
            transform: ${({ isOpen }) =>
                isOpen ? "rotate(44deg)" : "rotate(0)"};
        }
        &:nth-child(2) {
            transform: ${({ isOpen }) =>
                isOpen ? "translateX(100%)" : "translateX(0)"};
            opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
        }
        &:nth-child(3) {
            transform: ${({ isOpen }) =>
                isOpen ? "rotate(-44deg)" : "rotate(0)"};
        }
    }
`;

export const Burger = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <StyledBurger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
                {/* Burguer lines: */}
                <div></div>
                <div></div>
                <div></div>
            </StyledBurger>

            <RightNav
                isOpen={isOpen}
                vistos={props.vistos}
                wishlist={props.wishlist}
            ></RightNav>
        </>
    );
};

export default Burger;
