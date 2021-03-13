import React, { useState, useEffect } from "react";
import styled from "styled-components";

// const SplashDiv = styled.div`
//     width: 95vw;
//     height: 37vh;
//     margin: auto;
//     background-repeat: no-repeat;
//     background-size: 100% 100%;
//     margin: 20px;
//     color: white;
//     text-align: center;
//     font-size: 30px;
//     border-radius: 15px;
// `;

const fetchURL = "https://kitsu.io/api/edge/anime/56";

export const Splash = () => {
    const [data, setData] = useState(null);

    const SplashDiv = styled.div`
        background-image: linear-gradient(
                rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0.5)
            ),
            url(${data !== null
                ? `${data.data.attributes.coverImage.large}`
                : "null"});
        width: 100vw;
        height: 37vh;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
    `;

    //TODO arreglar titulos
    const SplashText = styled.div`
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-weight: bold;
        text-shadow: 4px 1px 6px rgba(236, 227, 227, 0.61);
        font-size: 3rem;
    `;

    const getData = () => fetch(`${fetchURL}`).then((res) => res.json());

    useEffect(() => {
        getData().then((data) => setData(data));
    }, []);

    return (
        // <SplashDiv
        //     style={
        //         data
        //             ? {
        //                   backgroundImage: `url(${data.data.attributes.coverImage.large})`,
        //               }
        //             : {}
        //     }
        // >
        //     Anime App
        // </SplashDiv>
        <div>
            {data ? (
                <SplashDiv>
                    <SplashText>Anime Searcher</SplashText>
                </SplashDiv>
            ) : (
                <span></span>
            )}
        </div>
    );
};

export default Splash;
