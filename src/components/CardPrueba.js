import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./CardPrueba.css";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";

const CardPrueba = (props) => {
    const [clickeadoVisto, setClickeadoVisto] = useState(false);
    const [clickeadoWishlist, setClickeadoWishlist] = useState(false);
    const [genres, setGenres] = useState([]);
    const history = useHistory();

    const clickVisto = () => {
        props.visto(props.anime); //si pulsa en visto se envia el anime entero a la fx pushAnimeVisto en CardsContainer
        setClickeadoVisto(true); //si ya fue clickeado no puede volver a añadirlo
        setClickeadoWishlist(true); //si ya lo vio no se puede agregar a la wishlist
    };

    const clickWishlist = () => {
        props.wishlist(props.anime);
        setClickeadoWishlist(true);
    };

    const handleClickVerMas = () => {
        history.push(`/anime/${props.anime.id}`);
    };

    useEffect(() => {
        setGenres([]);
        if (props.anime) {
            fetch(props.anime.relationships.genres.links.related)
                .then((response) => response.json())
                .then((data) => {
                    data.data.map((item, index) => {
                        if (index < 3) {
                            setGenres((prev) => [
                                ...prev,
                                item.attributes.name,
                            ]);
                        }
                    });
                });
        }
    }, []);

    return (
        <React.Fragment>
            {props.anime ? (
                <div className="container">
                    <div className="cellphone-container">
                        <div className="movie">
                            <div className="menu">
                                <IconButton
                                    onClick={() => {
                                        handleClickVerMas();
                                    }}
                                >
                                    <Icon>sort</Icon>
                                </IconButton>
                            </div>
                            <div
                                className="movie-img"
                                style={{
                                    backgroundImage: `url(${props.anime.attributes.posterImage.original})`,
                                }}
                            ></div>

                            <div className="text-movie-cont">
                                <div className="mr-grid">
                                    <div className="col1">
                                        <h1>
                                            {props.anime.attributes
                                                .canonicalTitle.length > 12
                                                ? props.anime.attributes.canonicalTitle.substr(
                                                      0,
                                                      13
                                                  ) + "..."
                                                : props.anime.attributes
                                                      .canonicalTitle}
                                        </h1>
                                        <ul className="movie-gen">
                                            <li>
                                                {
                                                    props.anime.attributes
                                                        .ageRating
                                                }{" "}
                                                /
                                            </li>
                                            <li>
                                                {" "}
                                                {
                                                    props.anime.attributes
                                                        .episodeCount
                                                }
                                                {" episodes "}/
                                            </li>

                                            <li>
                                                {genres ? (
                                                    genres.map(
                                                        (genre, index) => (
                                                            <span key={index}>
                                                                {genre},{`\n`}
                                                            </span>
                                                        )
                                                    )
                                                ) : (
                                                    <></>
                                                )}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mr-grid summary-row">
                                    <div className="col2">
                                        <h5>RESUMEN</h5>
                                    </div>
                                    <div className="col2">
                                        <ul className="movie-likes">
                                            {/* TODO funcionalidad like-dislike */}
                                            <li>
                                                <IconButton>
                                                    <Icon className="movie-likes-span">
                                                        thumb_up
                                                    </Icon>
                                                </IconButton>
                                                124
                                            </li>
                                            <li>
                                                <IconButton>
                                                    <Icon className="movie-likes-span">
                                                        thumb_down
                                                    </Icon>
                                                </IconButton>
                                                3
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mr-grid">
                                    <div className="col1">
                                        <p className="movie-description">
                                            {props.anime.attributes.description.substr(
                                                0,
                                                200
                                            ) + "..."}
                                        </p>
                                    </div>
                                </div>
                                <div className="mr-grid actors-row">
                                    <div className="col1">
                                        <p className="movie-actors">
                                            Matthew McConaughey, Anne Hathaway,
                                            Jessica Chastain
                                        </p>
                                    </div>
                                </div>
                                <div className="mr-grid action-row">
                                    <div className="col2">
                                        {/* <div className="watch-btn">
                                    <h3>
                                        <a className="">&#xE037;</a>
                                        WATCH TRAILER
                                    </h3>
                                </div> */}
                                    </div>
                                    <div className="col6 action-btn">
                                        <IconButton>
                                            <Icon className="action-btn-icon">
                                                save
                                            </Icon>
                                        </IconButton>
                                    </div>
                                    <div className="col6 action-btn">
                                        <IconButton
                                            onClick={() => {
                                                clickVisto();
                                            }}
                                        >
                                            <Icon className="action-btn-icon">
                                                done
                                            </Icon>
                                        </IconButton>
                                    </div>
                                    <div className="col6 action-btn">
                                        <IconButton
                                            onClick={() => {
                                                clickWishlist();
                                            }}
                                        >
                                            <Icon className="action-btn-icon">
                                                star_border
                                            </Icon>
                                        </IconButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </React.Fragment>
    );
};

export default CardPrueba;
