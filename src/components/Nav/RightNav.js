import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    z-index: 1;
    li {
        padding: 18px 10px;
    }
    @media (max-width: 768px) {
        flex-flow: column nowrap;
        background-color: #0d2538;
        position: fixed;
        transform: ${({ isOpen }) =>
            isOpen ? "translateX(0)" : "translateX(100%)"};
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
        li {
            color: #fff;
        }
    }
`;

//rsc
const RightNav = (props) => {
    const { vistos, wishlist, isOpen } = props;
    return (
        <Ul isOpen={isOpen}>
            <li>
                <Link
                    to={{
                        pathname: "/vistas",
                        state: {
                            arrayVistos: vistos,
                            arrayWishlist: wishlist,
                        },
                    }}
                >
                    Vistos
                </Link>
            </li>
            <li>
                <Link
                    to={{
                        pathname: "/wishlist",
                        state: {
                            arrayVistos: props.vistos,
                            arrayWishlist: props.wishlist,
                        },
                    }}
                >
                    Wishlist
                </Link>
            </li>
            <li>Listas</li>
            <li>Sign In</li>
            <li>Sign Up</li>
        </Ul>
    );
};

export default RightNav;
