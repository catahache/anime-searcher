import React, { useState } from "react";

export const Card = (props) => {
    const [clickeadoVisto, setClickeadoVisto] = useState(false);
    const [clickeadoWishlist, setClickeadoWishlist] = useState(false);

    const clickVisto = () => {
        props.visto(props.anime); //si pulsa en visto se envia el anime entero a la fx pushAnimeVisto en CardsContainer
        setClickeadoVisto(true); //si ya fue clickeado no puede volver a añadirlo
        setClickeadoWishlist(true); //si ya lo vio no se puede agregar a la wishlist
    };

    const clickWishlist = () => {
        props.wishlist(props.anime);
        setClickeadoWishlist(true);
    };

    return (
        <div className="card mb-4" style={{ width: "20rem" }}>
            <img
                src={props.anime.attributes.posterImage.original}
                className="card-img-top"
                alt="..."
                style={{
                    width: "19.9rem",
                    height: "19.9rem",
                    objectFit: "cover",
                    objectPosition: "20% 10%",
                }}
            />
            <div className="card-body">
                <h5 className="card-title">
                    {props.anime.attributes.canonicalTitle}
                </h5>
                {props.buttons ? (
                    clickeadoVisto ? (
                        <button
                            disabled
                            type="button"
                            className="btn btn-outline-success"
                        >
                            Visto
                        </button>
                    ) : (
                        <button
                            onClick={clickVisto}
                            type="button"
                            className="btn btn-outline-success"
                        >
                            Visto
                        </button>
                    )
                ) : (
                    <span></span>
                )}

                {props.buttons ? (
                    clickeadoWishlist ? (
                        <button
                            disabled
                            type="button"
                            className="btn btn-outline-success"
                        >
                            Wishlist
                        </button>
                    ) : (
                        <button
                            onClick={clickWishlist}
                            type="button"
                            className="btn btn-outline-success"
                        >
                            Wishlist
                        </button>
                    )
                ) : (
                    <span></span>
                )}

                <p className="card-text" style={{ fontSize: "10px" }}>
                    {props.anime.attributes.episodeLength} episodios
                </p>
            </div>
        </div>
    );
};
