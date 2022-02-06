import { useRef, useState } from "react";
import { Wrapper, Container, Left,List,Item, Profile, Right } from './NavBar-styles'
import { Search, Notifications, ArrowDropDown, Close } from '@mui/icons-material';
import OutsideClick from '../../outsideClick';


const NavBar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isWidth, setIsWidth] = useState(false);
    const [visible, setVisible] = useState(false);
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => window.onscroll = null;
    }
    window.onresize = () => {
        setIsWidth(window.innerWidth <= 768 ? true : false);
    }

    const boxRef = useRef(null)
    const boxOutsideClick = OutsideClick(boxRef)
    console.log(visible);
    console.log(boxOutsideClick);

    return (
        <Wrapper className={isScrolled ? 'dark' : ' '}>     
            <Container>
                <Left>
                    <img src="https://ik.imagekit.io/gwmjmoaowfjn/_PXPNG.COM_Red_Large_Netflix_Logo_Text_free_image_-_2560x1440_pcx-Ydcko.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643627546366" alt=" Logo.." />
                    <List ref={boxRef} className={visible ? 'show' : ' '} >
                        {(window.innerWidth <= 768 || isWidth) ? <Close className='close' onClick={() => setVisible(false)}/> : ' ' }
                        <Item onClick={() => setVisible(false)}>Home</Item>
                        <Item onClick={() => setVisible(false)}>Movies</Item>
                        <Item onClick={() => setVisible(false)}>Series</Item>
                        <Item onClick={() => setVisible(false)}>New And Popular</Item>
                        <Item onClick={() => setVisible(false)}>My List</Item>
                        {(window.innerWidth <= 768 || isWidth)? <Item onClick={() => setVisible(false)}>Settings</Item> : ' '}
                        {(window.innerWidth <= 768 || isWidth)? <Item onClick={() => setVisible(false)}>Log Out</Item> : ' '}
                    </List>
                </Left>
                <Right>
                    <Search className="icon"/>
                    <span>KID</span>
                    <Notifications className="icon"/>
                    <img src="https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture.jpg" alt='DP' onClick={() => setVisible(true)}/>
                    {(window.innerWidth <= 768 || isWidth) ?
                        ' '
                        :
                        <Profile>
                            <ArrowDropDown className="icon"/>
                            <div className="options">
                                <span>Settings</span>
                                <span>Log Out</span>
                            </div>
                        </Profile>
                    }
                
                </Right>
            </Container>
        </Wrapper>
    );
};

export default NavBar;
