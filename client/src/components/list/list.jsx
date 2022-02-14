import { useRef, useState } from 'react';

import './list.css';

import ListItem from '../listItems/listItem.jsx';

import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';

const List = () => {
    const [isMoved, setIsMoved] = useState(false);
    const [ slideNumber, setSlideNumber] = useState(0);

    const listRef = useRef();

    const handleClick = (dir) => {
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if(dir === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }
        if(dir === "right" && slideNumber < 5){
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
    }

    return (
        <div className="list">
            <span className="listTitle">Continue To Watch</span>
            <div className="wrapper">
                <ArrowBackIosOutlined className="slideArrow left" onClick={() => handleClick('left')} style={{ display: !isMoved && 'none'}}/>
                <div className="container" ref={ listRef }>
                    <ListItem index={0}/>
                    <ListItem index={1}/>
                    <ListItem index={2}/>
                    <ListItem index={3}/>
                    <ListItem index={4}/>
                    <ListItem index={5}/>
                    <ListItem index={6}/>
                    <ListItem index={7}/>
                    <ListItem index={8}/>
                    <ListItem index={9}/>
                    
                    
                </div>
                <ArrowForwardIosOutlined className="slideArrow right" onClick={() => handleClick('right')}/>
            </div>
        </div>
    )
}

export default List;
