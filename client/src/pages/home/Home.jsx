import NavBar from '../../components/NavBar/NavBar'
import Featured from '../../components/Featured/Featured'
import List from '../../components/list/list'
import Register from '../register/register.jsx'
import { Wrapper } from './Home-styles' 

const Home = () => {
    return (
        <Wrapper>
            <NavBar />
            <Featured />
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
            {/* <Register /> */}
        </Wrapper>
    );
};

export default Home;
