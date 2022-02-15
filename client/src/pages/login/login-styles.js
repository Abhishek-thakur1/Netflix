import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(0,0,0,0.5) 60%,
        rgba(0, 0, 0, 0.8) 100%
    ),
    url("https://assets.nflxext.com/ffe/siteui/vlv3/d9cb1eea-62ee-4ec1-9b90-8d98874b8867/c1a78ec0-a2a8-43ff-8118-d11f0da72d69/IN-en-20210817-popsignuptwoweeks-perspective_alpha_website_small.jpg");
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

export const Top = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
`;

export const TopContainer = styled.div`
    padding: 0rem 3.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        height: 10.5rem;
        cursor: pointer;
        z-index: 999;
    }

    @media only screen and (max-width: 768px){
        padding: 0rem 2.5rem;
    }
`;

export const Container = styled.div`

    form{
        width: 40rem;
        height: 40rem;
        padding: 3rem;
        border-radius:5px;
        background-color: var(--main-color);
        display: flex;
        justify-content: space-around;
        flex-direction: column;

        h1{
            color: var(--white);
        }

        input{
            height: 4rem;
            border-radius: 5px;
            background-color: #363636;
            color: var(--white);
            padding-left: 1rem;
            border: none;
        }

        button {
            height: 3.5rem;
            border-radius: 5px;
            background-color: red;
            color: white;
            border: none;
            font-size: 1.65rem;
            font-weight: 500;
            cursor: pointer;
        }
        span{
            color: white;
            font-size: 1.2rem;

            b{
                color: white;
            }
        }

        
    }
`;