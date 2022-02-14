import React, {useRef, useState} from 'react'

import { Wrapper, Top, TopContainer, Main, Text, Cred} from './register-styles';
import { ArrowForwardIosOutlined } from '@mui/icons-material'
const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleStart = () => {
        setEmail(emailRef.current.value);
    };
    const handleFinish = () => {
        setPassword(passwordRef.current.value);
    };

    return (
        <Wrapper>
            <Top>
                <TopContainer>
                    <img src="https://ik.imagekit.io/gwmjmoaowfjn/_PXPNG.COM_Red_Large_Netflix_Logo_Text_free_image_-_2560x1440_pcx-Ydcko.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643627546366" alt="LOGO!" />
                    <button className="loginButton">Sign In</button>
                </TopContainer>
            </Top>
            <Main>
                <Text>
                    <h1>Unlimited movies, TV shows and more.</h1>    
                    <p>Watch anywhere. Cancel anytime.</p>
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>    
                </Text>
                <Cred>
                    {
                        !email ? (
                            <div className="input">
                                <input type="email" placeholder="Email address" ref={emailRef} />
                                <button className="registerButton" onClick={handleStart}>
                                    Get Started
                                </button>
                            </div>    
                        ): (
                            <form className="input">
                                <input type="password" placeholder="password" ref={passwordRef} />
                                <button className="registerButton" onClick={handleFinish}>
                                    Start
                                    <ArrowForwardIosOutlined style={{ fontSize: 20, fill: 'white'}}/>
                                </button>
                            </form>       
                        )
                    }
                </Cred>    
            </Main>
        </Wrapper>
    );
};

export default Register;