import React from "react";
import styled from "styled-components";
import "./SearchBar.css"; //TODO pasar a styled components

const SearchBar = ({ input: keyword, onChange: setKeyword }) => {
    return (
        <React.Fragment>
            <div className="search">
                <input
                    type="text"
                    placeholder=" "
                    key="random1"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                />
                <div>
                    <svg>
                        <use xlinkHref="#path" />
                    </svg>
                </div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
                <symbol
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 160 28"
                    id="path"
                >
                    <path
                        d="M32.9418651,-20.6880772 C37.9418651,-20.6880772 40.9418651,-16.6880772 40.9418651,-12.6880772 C40.9418651,-8.68807717 37.9418651,-4.68807717 32.9418651,-4.68807717 C27.9418651,-4.68807717 24.9418651,-8.68807717 24.9418651,-12.6880772 C24.9418651,-16.6880772 27.9418651,-20.6880772 32.9418651,-20.6880772 L32.9418651,-29.870624 C32.9418651,-30.3676803 33.3448089,-30.770624 33.8418651,-30.770624 C34.08056,-30.770624 34.3094785,-30.6758029 34.4782612,-30.5070201 L141.371843,76.386562"
                        transform="translate(83.156854, 22.171573) rotate(-225.000000) translate(-83.156854, -22.171573)"
                    ></path>
                </symbol>
            </svg>

            <a
                className="dribbble"
                href="https://dribbble.com/shots/5547403-Search-input-animation"
                target="_blank"
            >
                <img
                    src="https://dribbble.com/assets/logo-small-2x-9fe74d2ad7b25fba0f50168523c15fda4c35534f9ea0b1011179275383035439.png"
                    alt=""
                />
            </a>
        </React.Fragment>
    );
};

export default SearchBar;
