import React from 'react';
import { PlayArrow, InfoOutlined } from '@mui/icons-material';
import { Wrapper, Info, Buttons } from './Featured-styles';

const Featured = () => {
    return (
        <Wrapper>
            <img alt="Featured Movie " src="https://w0.peakpx.com/wallpaper/857/946/HD-wallpaper-avengers-end-game-banner-avengers-endgame-2019-movies-movies-superheroes.jpg" />

            <Info>
                <img alt="Title Movie " src="https://ik.imagekit.io/gwmjmoaowfjn/pngaaa.com-1006783_9CZulsqhI.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644497440228" />

                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem ex aliquid officia natus corrupti aperiam! Eligendi dolorem totam ex consectetur.</span>
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
