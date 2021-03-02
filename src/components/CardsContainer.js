import React, { useState, useEffect } from "react";
// import axios from "axios";
import { Card } from "./Card";
// const fetchURL =
//     "https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=5"; //TODO ver pagination
const arrayAnimesVistos = [];
const arrayAnimesWishlist = [];

export const CardsContainer = (props) => {
    // const [data, setData] = useState(null);
    const [vistos, setVistos] = useState(null);

    //crear array que contenga los vistos, cuando en card se haga click, se setea uno nuevo
    const pushAnimeVisto = (animeVisto) => {
        arrayAnimesVistos.push(animeVisto);
        setVistos(arrayAnimesVistos); //TODO fijarse si es necesario

        //mandar este array a App.js:
        props.vistos(arrayAnimesVistos);
    };

    const pushAnimeWishlist = (animeWish) => {
        arrayAnimesWishlist.push(animeWish);
        props.wishlist(arrayAnimesWishlist);
    };

    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    {props.anime?.map((element) => (
                        <div
                            key={element.id}
                            className="col-12 col-md-6 col-lg-4"
                        >
                            <Card
                                anime={element}
                                visto={pushAnimeVisto}
                                wishlist={pushAnimeWishlist}
                                buttons={true}
                            ></Card>
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
};
