import { useRef, useState } from "react";
import { Wrapper, Container, Left,List,Item,Psuedo, Profile, Right } from './NavBar-styles'
import { Search, Notifications, ArrowDropDown, Close } from '@mui/icons-material';
import {Link} from "react-router-dom"
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
                    {(window.innerWidth <= 768 || isWidth) ? <Psuedo onClick={() => setVisible(false)} className={visible ? 'show' : ' '}/> : ' ' }
                    <List ref={boxRef} className={visible ? 'show' : ' '} >
                        {(window.innerWidth <= 768 || isWidth) ? <Close className='close' onClick={() => setVisible(false)}/> : ' ' }
                        <Link to='/'><Item onClick={() => setVisible(false)}>Home</Item></Link>
                        <Link to='/movies'><Item onClick={() => setVisible(false)}>Movies</Item></Link>
                        <Link to='/series'><Item onClick={() => setVisible(false)}>Series</Item></Link>
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
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxkUaRN6iLNsiuVx7B3m9ooJHnWlacU5fXXQ&usqp=CAU" alt='DP' onClick={() => setVisible(true)}/>
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
