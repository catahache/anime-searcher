import React from "react";
import { Card } from "../Card";
import { Navbar } from "../Nav/Navbar";
import { Botonera } from "../Botonera";

//recibe un array de vistas y lo recorre
const Vistos = (props) => {
    const vistos = props.location.state.arrayVistos;
    // console.log(props.location.state.arrayVistos); //location state del Link

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
                                <Card
                                    anime={anime}
                                    visto={noFunction}
                                    wishlist={noFunction}
                                    buttons={false}
                                ></Card>
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
