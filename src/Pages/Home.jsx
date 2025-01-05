import About from "../Components/About";
import Banner from "../Components/Banner";
import Qualification from "../Components/Qualification";


const Home = () => {
    return (
        <div>
            <div className="pt-16">
                <Banner></Banner>
                <About></About>
                <Qualification></Qualification>
            </div>
        </div>
    );
};

export default Home;