import { useState } from 'react';

import './listItem.css';

import { PlayArrow, Add, ThumbUpAltOutlined, ThumbDownAltOutlined } from '@mui/icons-material';

const ListItem = ({ index }) => {

    const [isHovered, setIsHovered] = useState(false);

    const trailer ="https://player.vimeo.com/external/457338175.sd.mp4?s=da741d1898f588e81d3707f1f5f459fd71d248f4&profile_id=139&oauth2_token_id=57447761";

    return (
        <div className="listItem" 
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
        >
            <img src="https://www.looper.com/img/gallery/why-do-movie-posters-reverse-names/intro-1582575430.jpg" alt="" />

            { isHovered && (
                <>
                <video src={trailer} autoPlay={true} loop/>

                <div className="itemInfo">
                    <div className="icons">
                        <PlayArrow  className="icon"/>
                        <Add className="icon" />
                        <ThumbUpAltOutlined className="icon" />
                        <ThumbDownAltOutlined className="icon" />
                    </div>
                    <div className="itemInfoTop">
                        <span>1hr 16mins</span>
                        <span className="limit">16+</span>
                        <span>2010</span>
                    </div>
                    <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos vitae provident,                           soluta deserunt officiis hic nemo optio alias enim amet!</div>
                    <div className="genre">Action</div>
                </div>
                </>
            )}

        </div>
    )
}

export default ListItem;
