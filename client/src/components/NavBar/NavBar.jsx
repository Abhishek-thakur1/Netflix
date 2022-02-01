import React from 'react';
import { Wrapper, Container, Left, Profile, Right } from './NavBar-styles'
import {Search, Notifications, ArrowDropDown} from '@mui/icons-material';

const NavBar = () => {

    const [isScrolled, setIsScrolled] = React.useState(false);
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => window.onscroll = null;
    }
    console.log(isScrolled);

    return (
        <Wrapper className={isScrolled ? 'dark' : ' '}>
            <Container>
                <Left>
                    <img src="https://ik.imagekit.io/gwmjmoaowfjn/_PXPNG.COM_Red_Large_Netflix_Logo_Text_free_image_-_2560x1440_pcx-Ydcko.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643627546366" alt=" Logo.." />
                    <span>Home</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New And Popular</span>
                    <span>My List</span>
                </Left>
                <Right>
                    <Search className="icon"/>
                    <span>KID</span>
                    <Notifications className="icon"/>
                    <img src="https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture.jpg" alt='DP' />
                    <Profile>
                        <ArrowDropDown className="icon"/>
                        <div className="options">
                            <span>Settings</span>
                            <span>Log Out</span>
                        </div>
                    </Profile>
                </Right>
            </Container>
        </Wrapper>
    );
};

export default NavBar;
