import React from 'react'

import { Wrapper, Top, TopContainer, Container } from "./login-styles";

const Login = () => {
    return (
        <Wrapper>
            <Top>
                <TopContainer>
                    <img src="https://ik.imagekit.io/gwmjmoaowfjn/_PXPNG.COM_Red_Large_Netflix_Logo_Text_free_image_-_2560x1440_pcx-Ydcko.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643627546366" alt="LOGO!" />
                </TopContainer>
            </Top>
            <Container>
                <form>
                    <h1>Sign In</h1>
                    <input type="email" placeholder="Email or Phone Number" />
                    <input type="password" placeholder="Password" />
                    <button>Sign In</button>
                    <span>New to Netflix <b>Sign up now.</b></span>
                </form>
            </Container>
        </Wrapper>
    )
}

export default Login;