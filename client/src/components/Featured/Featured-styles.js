import styled from "styled-components";

export const Wrapper = styled.div`
    height: 90vh;
    position: relative;    

`;
export const FeaturedImage = styled.div`
    width: 100%;
    height: 90vh;
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(0,0,0,0.5) 20%,
        rgba(0, 0, 0, 0) 100%
    ),
    url("https://w0.peakpx.com/wallpaper/857/946/HD-wallpaper-avengers-end-game-banner-avengers-endgame-2019-movies-movies-superheroes.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    object-fit: cover;
`;

export const Category = styled.div`
    position: absolute;
        top: 80px;
        left: 50px;
        font-size: 3rem;
        font-weight: 500;
        display: flex;
        align-items: center;
        color: #fff;

        select{
            background-color: var(--main-color);
            cursor: pointer;
            border: 1px solid #fff;
            color: #fff;
            margin-left:2rem;
            padding: 5px;
        }
`;
export const Info = styled.div`
    width: 90%;
    position: absolute;
    left: 5rem;
    bottom: 5rem;
    display: flex;
    flex-direction: column;
    color: var(--white);

    img{
        width: 40rem;
    }

    span{
        
        &#desc{
            width: 40%;
            margin: 1rem 0rem;
            font-size: 1.6rem;
            color: #fff;
            line-height: 1.25;
        }
    }

    @media only screen and (max-width: 768px){
        img {
            width: 35rem;
        }

        span{

            &#desc{
                margin: 1.5rem 0rem;
                width: 60%;
                font-size: 1.8rem;
            }
        }
    }
`;
export const Buttons = styled.div`
    display: flex;

    button{
        padding: 1.7rem 2.1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        border-radius: 10px;
        margin-right: 2rem;
        cursor: pointer;
        font-size: 1.8rem;
        font-weight: 600;

        &.play{
            background-color: var(--red);

            .play-icon{
                font-size: 2rem;
                color: #fff;
            }
            span{
                color: #fff;
                margin-left: .5rem;
                font-size: 1.6rem;
            }
        }
        &.more{
            background: color #c7c7c7;

            .info-icon{
                font-size: 2rem;
                color: var(--main-color);
            }
            span{
                color: var(--main-color);
                margin-left: .5rem;
                font-size: 1.6rem;
            }
        }
    }

`;