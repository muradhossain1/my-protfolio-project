import About from "../Components/About";
import Banner from "../Components/Banner";


const Home = () => {
    return (
        <div>
            <div className="pt-16">
                <Banner></Banner>
                <About></About>
            </div>
        </div>
    );
};

export default Home;