import About from "../Components/About";
import Banner from "../Components/Banner";
import Contact from "../Components/Contact";
import Projects from "../Components/Projects";
import Qualification from "../Components/Qualification";
import Skills from "../Components/Skills";


const Home = () => {
    return (
        <div>
            <div className="pt-16">
                <Banner></Banner>
                <About></About>
                <Skills></Skills>
                <Projects></Projects>
                <Qualification></Qualification>
                <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;