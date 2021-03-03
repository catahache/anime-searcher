import React, { useEffect, useState } from "react";
import { CardsContainer } from "./components/CardsContainer";
import { Botonera } from "./components/Botonera";
import { Navbar } from "./components/Nav/Navbar";
import { Login } from "./components/Login";
import firebase from "firebase/app";
import "firebase/auth";
import { Splash } from "./components/Splash";
import SearchBar from "./components/Nav/SearchBar/SearchBar";

const fetchURL =
    "https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=5"; //TODO ver pagination

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height,
    };
}

export const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
};

function App() {
    const [data, setData] = useState(null);
    const [animeList, setAnime] = useState(null);
    const [animeNamesListDefault, setAnimeNamesListDefault] = useState(null);
    const [input, setInput] = useState("");
    const [arrayVistos, setArrayVistos] = useState({});
    const [arrayWishlist, setArrayWishlist] = useState({});
    const { height, width } = useWindowDimensions();

    // const getData = () => fetch(`${fetchURL}`).then((res) => res.json());

    // useEffect(() => {
    //     getData().then((data) => setData(data));
    // }, []);

    const fetchData = async () => {
        return await fetch(fetchURL)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setAnime(data.data);
                setAnimeNamesListDefault(data);
                console.log(data.data);
            });
    };

    const updateInput = async (input) => {
        const filtered = animeNamesListDefault.data.filter((animeName) => {
            if (
                animeName.attributes.canonicalTitle
                    .toLowerCase()
                    .includes(input.toLowerCase())
            ) {
                return animeName;
            }
        });
        setInput(input);
        setAnime(filtered); //reemplazo los valores de la lista por los filtrados
    };

    useEffect(() => {
        fetchData();
    }, []);

    const clickVisto = (animesVistos) => {
        setArrayVistos(animesVistos); //animesVistos lo envia CardsContainer
    };

    const clickWishlist = (animesWish) => {
        setArrayWishlist(animesWish); //animesWish lo envia CardsContainer
    };

    return (
        <React.Fragment>
            {/* {user ? <div>{user.displayName}</div> : <span></span>} */}
            <Navbar
                vistos={arrayVistos}
                wishlist={arrayWishlist}
                input={input}
                onChange={updateInput}
            ></Navbar>
            {/* <Login></Login> */}
            {/* <div className="card-action right-align">
                <button className="btn btn-info" onClick={handleAuth}>
                    Login con Google
                </button>
            </div> */}
            {width < 800 ? <span></span> : <Splash></Splash>}

            <CardsContainer
                vistos={clickVisto}
                wishlist={clickWishlist}
                anime={animeList}
            ></CardsContainer>
        </React.Fragment>
    );
}

export default App;
