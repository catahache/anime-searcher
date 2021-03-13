import React from "react";
import CardPrueba from "../CardPrueba";
import { Navbar } from "../Nav/Navbar";

//recibe un array de vistas y lo recorre
const Vistos = (props) => {
    const vistos = props.location.state.arrayVistos;

    const noFunction = () => {
        console.log("Nope");
    };

    return (
        <React.Fragment>
            <Navbar
                vistos={props.location.state.arrayVistos}
                wishlist={props.location.state.arrayWishlist}
            ></Navbar>
            <div className="container-fluid">
                <div className="row">
                    {vistos.length > 0 ? (
                        vistos.map((anime) => (
                            <div
                                key={anime.id}
                                className="col-12 col-md-6 col-lg-4"
                            >
                                <CardPrueba
                                    anime={anime}
                                    visto={noFunction}
                                    wishlist={noFunction}
                                    buttons={false}
                                ></CardPrueba>
                            </div>
                        ))
                    ) : (
                        <span>No agregaste ningun anime a la lista!</span>
                    )}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Vistos;
