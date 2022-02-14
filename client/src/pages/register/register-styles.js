import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(0,0,0,0.5) 60%,
        rgba(0, 0, 0, 0.8) 100%
    ),
    url("https://ik.imagekit.io/gwmjmoaowfjn/IN-en-20220207-popsignuptwoweeks-perspective_alpha_website_small__HfErAzTU.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644845975209");
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

    button{
        background-color: var(--red);
        border: none;
        color: white;
        border-radius: 3px;
        padding: .7rem 1.8rem;
        font-size: 1.65rem;
        font-weight: 500;
        cursor: pointer;
        z-index: 999;
    }

    @media only screen and (max-width: 768px){
        padding: 0rem 2.5rem;
    }
    button{
        font-size: 1.95rem;
        letter-spacing:0.12rem;
    }
`;
export const Main = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
`;
export const Text = styled.div`
    color: var(--white);
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 80rem;
    text-align: center;

    h1{
        font-size: 7rem;
        line-height:1;
    }
    h2{
        margin: 1rem 0rem;
        font-size: 2.5rem;
        font-weight: 500;
    }
    h3{
        margin: 1rem 0rem;
        font-size: 1.8rem;
        font-weight: 500;
    }

    @media only screen and (max-width: 768px){
        min-width: 80%;

        h1{
            font-size: 7rem;
            line-height:1;
        }
        h2{
            margin: 1rem 0rem;
            font-size: 2.7rem;
            font-weight: 500;
        }
        h3{
            margin: 1.5rem 0rem;
            font-size: 2rem;
            font-weight: 500;
        }
    }
`;
export const Cred = styled.div`
    /* margin-top: .7rem; */
    width: 100%;

    .input{
        min-width: 50rem;
        height: 7rem !important;
        /* background-color: white; */
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        height: 5.5rem;
        border-radius: 5px;
    }

    input{
        flex: 9;
        height: 100%;
        border: none;
        padding: 0 1rem;
        font-size: 1.65rem;
    }
    input:focus{
        outline: none;
        border: solid 1px #8c8c8c;
    }
    .registerButton{
        flex: 3;
        height: 100%;
        margin-left: .15rem; 
        background-color: var(--red);
        border: none;
        color: white;
        font-size: 2.2rem;
        cursor: pointer;
    }

    @media only screen and (max-width: 768px){
        width: 85%;

        .input{
            min-width: 40rem;
            flex-wrap: wrap;
        }
    }
`;
