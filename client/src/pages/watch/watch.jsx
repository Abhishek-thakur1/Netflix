import { ArrowBackOutlined } from "@mui/icons-material";
import "./watch.css";

export default function Watch() {
    return (
    <div className="watch">
        <div className="back">
            <ArrowBackOutlined style={{fontSize: 25}}/>
            <span>Home</span>
        </div>
        <video
        className="video"
        autoPlay
        progress
        controls
        src="https://player.vimeo.com/external/457338175.sd.mp4?s=da741d1898f588e81d3707f1f5f459fd71d248f4&profile_id=139&oauth2_token_id=57447761"
    />
    </div>
);
}
