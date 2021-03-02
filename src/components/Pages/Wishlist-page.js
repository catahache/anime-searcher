import React from "react";
import { Card } from "../Card";

const Wishlist = (props) => {
    const wishlist = props.location.state.arrayWishlist;

    const noFunction = () => {
        console.log("Nope");
    };

    return (
        <div className="container-fluid">
            <div className="row">
                {wishlist.length > 0 ? (
                    wishlist.map((anime) => (
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
    );
};

export default Wishlist;
