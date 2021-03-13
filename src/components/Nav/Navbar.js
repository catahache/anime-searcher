import React from "react";
// import { useState } from "react";
import Burger from "./Burger";
import SearchBar from "./SearchBar/SearchBar";
// import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import styled from "styled-components";

const Nav = styled.nav`
    background: #f3628d;
    width: 100%;
    height: 55px;
    border-bottom: 2px solid #f1f1f1;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
        padding: 15px 0;
    }
`;

export const Navbar = (props) => {
    // const [usuario, setUsuario] = useState({ photoURL: "", displayName: "" });
    // const [user, setUser] = useState(null);

    // const handleAuth = (e) => {
    //     e.preventDefault();
    //     console.log("log");
    //     //Para manejar el flujo de acceso con el SDK de Firebase JavaScript:
    //     const provider = new firebase.auth.GoogleAuthProvider(); //instancia de mi proveedor

    //     firebase
    //         .auth()
    //         .setPersistence(firebase.auth.Auth.Persistence.LOCAL) //TODO arreglar persistencia
    //         .then(() => {
    //             // New sign-in will be persisted with session persistence.
    //             firebase
    //                 .auth()
    //                 .signInWithPopup(provider) //google
    //                 .then((result) => {
    //                     //  @type {firebase.auth.OAuthCredential}
    //                     //var credential = result.credential;
    //                     // This gives you a Google Access Token. You can use it to access the Google API.
    //                     //var token = credential.accessToken;
    //                     // The signed-in user info.
    //                     var user = result.user;
    //                     console.log(user);
    //                     setUser(user);
    //                     setUsuario(user);
    //                 })
    //                 .catch((err) => console.log(err.code));
    //         })
    //         .catch((error) => {
    //             // Handle Errors here.
    //             var errorCode = error.code;
    //             var errorMessage = error.message;
    //         });

    //     // firebase
    //     //     .auth()
    //     //     .signInWithPopup(provider) //google
    //     //     .then((result) => {
    //     //         //  @type {firebase.auth.OAuthCredential}
    //     //         //var credential = result.credential;
    //     //         // This gives you a Google Access Token. You can use it to access the Google API.
    //     //         //var token = credential.accessToken;
    //     //         // The signed-in user info.
    //     //         var user = result.user;
    //     //         console.log(user);
    //     //         setUser(user);
    //     //     })
    //     //     // .then((result) => console.log("Se logueo ", result.user.email))
    //     //     .catch((err) => console.log(err.code));
    // };

    return (
        <Nav>
            {/* <div className="logo">Logo</div> */}
            <SearchBar
                input={props.input}
                onChange={props.onChange}
            ></SearchBar>
            <Burger vistos={props.vistos} wishlist={props.wishlist}></Burger>
        </Nav>
    );
};
