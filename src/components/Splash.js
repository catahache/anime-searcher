import React, { useState, useEffect } from "react";
import styled from "styled-components";

//TODO arreglar titulos
const SplashDiv = styled.div`
    width: 95vw;
    height: 37vh;
    margin: auto;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin: 20px;
    color: white;
    text-align: center;
    font-size: 30px;
    border-radius: 15px;
`;

const fetchURL = "https://kitsu.io/api/edge/anime/56";

export const Splash = () => {
    const [data, setData] = useState(null);

    const getData = () => fetch(`${fetchURL}`).then((res) => res.json());

    useEffect(() => {
        getData().then((data) => setData(data));
    }, []);

    return (
        <SplashDiv
            style={
                data
                    ? {
                          backgroundImage: `url(${data.data.attributes.coverImage.large})`,
                      }
                    : {}
            }
        >
            Anime App
        </SplashDiv>
    );
};

export default Splash;
