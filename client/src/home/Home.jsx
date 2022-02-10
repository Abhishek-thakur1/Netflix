import NavBar from '../components/NavBar/NavBar'
import Featured from '../components/Featured/Featured'
import { Wrapper } from './Home-styles' 

const Home = () => {
    return (
        <Wrapper>
            <NavBar />
            <Featured />
        </Wrapper>
    );
};

export default Home;
