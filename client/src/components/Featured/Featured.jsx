import React from 'react';
import { PlayArrow, InfoOutlined } from '@mui/icons-material';
import { Wrapper,Category, Info, Buttons } from './Featured-styles';

const Featured = ({type}) => {
    return (
        <Wrapper>

            {type && (
                <Category>
                    <span>{ type === "movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-Fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </Category>
            )}

            <img alt="Featured Movie " src="https://w0.peakpx.com/wallpaper/857/946/HD-wallpaper-avengers-end-game-banner-avengers-endgame-2019-movies-movies-superheroes.jpg" />

            <Info>
                <img alt="Title Movie " src="https://ik.imagekit.io/gwmjmoaowfjn/pngaaa.com-1006783_9CZulsqhI.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644497440228" />

                <span id="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem ex aliquid officia natus corrupti aperiam! Eligendi dolorem totam ex consectetur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat aspernatur, fugiat deleniti ullam consequatur animi cum asperiores quasi atque ipsa ut veniam sit soluta? Repellendus praesentium incidunt eum consequuntur inventore!</span>
                <Buttons>
                    <button className="play">
                        <PlayArrow className="play-icon"/>
                        <span>PLAY</span>
                    </button>
                    <button className="more">
                        <InfoOutlined className="info-icon"/>
                        <span>MORE INFO</span>
                    </button>
                </Buttons>
            </Info>
        </Wrapper>
    );
};

export default Featured;
