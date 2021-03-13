import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const SingleAnime = () => {
    const { id } = useParams();
    const fetchURL = `https://kitsu.io/api/edge/anime/${id}`;
    const [anime, setAnime] = useState(null);

    const HeroImg = styled.div`
        background-image: linear-gradient(
                rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0.5)
            ),
            url(${anime !== null
                ? `${anime.attributes.posterImage.large}`
                : "null"});
        width: 100%;
        height: 300px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
    `;

    const HeroText = styled.div`
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-weight: bold;
    `;

    const fetchData = async () => {
        return await fetch(fetchURL)
            .then((response) => response.json())
            .then((data) => {
                setAnime(data.data);
                console.log(data.data);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            {anime != null ? (
                <React.Fragment>
                    <header>
                        <HeroImg>
                            <HeroText>
                                {anime.attributes.canonicalTitle}
                            </HeroText>
                        </HeroImg>
                    </header>

                    <section></section>

                    <section>{/* descripcion */}</section>

                    {/* <div className="HeroImg">
                        <img src={anime.attributes.posterImage.large} alt="" />
                    </div> */}
                    {/* <img src={anime.attributes.posterImage.original} alt="" /> */}
                </React.Fragment>
            ) : (
                <span></span>
            )}
        </>
    );
};

export default SingleAnime;
