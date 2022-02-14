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
    padding: 1.5rem 4.5rem;;
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
`;
export const Main = styled.div`
    
`;
export const Text = styled.div``;
export const Cred = styled.div``;
