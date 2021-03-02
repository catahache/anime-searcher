import React from "react";
import { Link } from "react-router-dom";

export const Botonera = (props) => {
    return (
        <div className="btn-group btn-group-lg mb-3" role="group">
            {/* Con el location object de link le paso un state de animes vistos */}
            <Link
                to={{
                    pathname: "/vistas",
                    state: {
                        arrayVistos: props.vistos,
                        arrayWishlist: props.wishlist,
                    },
                }}
            >
                <button type="button" className="btn btn-success">
                    Vistos
                </button>
            </Link>

            <Link
                to={{
                    pathname: "/wishlist",
                    state: {
                        arrayVistos: props.vistos,
                        arrayWishlist: props.wishlist,
                    },
                }}
            >
                <button type="button" className="btn btn-dark ml-3">
                    Wishlist
                </button>
            </Link>

            <button type="button" className="btn btn-dark ml-3">
                Listas
            </button>
        </div>
    );
};
