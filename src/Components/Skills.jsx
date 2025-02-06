import htmlIcon from '../assets/icons/html.png'
import cssIcon from '../assets/icons/css.png'
import jsIcon from '../assets/icons/js.png'
import reactIcon from '../assets/icons/react.png'
import nodeIcon from '../assets/icons/node.png'
import firebaseIcon from '../assets/icons/firebase.png'
import mongodbcon from '../assets/icons/mongodb.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Skills = () => {
    return (
        <div id="skills" className="lg:mx-16 rounded-lg mt-8 ">
            <div>
                <h2 className="text-4xl font-bold text-center pt-6 drop-shadow-xl">My Skills</h2>
                <p className="lg:px-48 mt-2 text-base font-medium text-gray-600 text-center">My expertise lies in both frontend and backend development, with proficiency in modern technologies such as HTML, CSS, JavaScript, React, and Node.js</p>
            </div>
            <div  className="flex flex-col lg:flex-row gap-6 mt-6">
                <div data-aos='fade-right' data-aos-duration="1000" className="rounded-lg lg:w-1/2 bg-red-50 shadow-md lg:mb-6 py-4 space-y-2 text-center lg:pt-12">
                    <h2 className="text-2xl uppercase  font-bold">My Focus</h2>
                    <p className="border-2 md:mx-32 border-blue-600"></p>
                    <p className="text-base font-medium ">UI/UX Design</p>
                    <p className="text-base font-medium ">Responsive Design</p>
                    <p className="text-base font-medium ">Web Design</p>
                    <p className="text-base font-medium ">User Friendly</p>
                </div>
                <div data-aos='fade-left' data-aos-duration="1000" className="rounded-lg lg:w-1/2 bg-red-50 shadow-md py-4 md:py-8 md:p-8 lg:mb-6 space-y-2 flex flex-col gap-2">
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <div className='w-1/3 flex items-center justify-center gap-2'>
                            <img src={htmlIcon} className='w-8' alt="" />
                            <p className="text-2xl font-bold uppercase">Html</p>
                        </div>
                        <progress className="progress text-blue-600  w-2/3 h-4" value="90" max="100"></progress>
                    </div>
                    <div className="flex flex-col md:flex-row  items-center gap-4">
                        <div className='w-1/3 flex items-center justify-center gap-2'>
                            <img src={cssIcon} className='w-8' alt="" />
                            <p className="text-2xl font-bold uppercase">css</p>
                        </div>
                        <progress className="progress text-blue-600 w-2/3 h-4" value="85" max="100"></progress>
                    </div>
                    <div className="flex flex-col md:flex-row  items-center gap-4">
                        <div className='w-1/3 flex items-center justify-center gap-2'>
                            <img src={jsIcon} className='w-8' alt="" />
                            <p className="text-2xl font-bold">JS</p>
                        </div>
                        <progress className="progress text-blue-600 w-2/3 h-4" value="75" max="100"></progress>
                    </div>
                    <div className="flex flex-col md:flex-row  items-center gap-4">
                        <div className='w-1/3 flex items-center justify-center gap-2'>
                            <img src={reactIcon} className='w-8' alt="" />
                            <p className="text-2xl font-bold">React.js</p>
                        </div>
                        <progress className="progress text-blue-600 w-2/3 h-4" value="85" max="100"></progress>
                    </div>
                    <div className="flex flex-col md:flex-row  items-center gap-4">
                        <div className='w-1/3 flex items-center justify-center gap-2'>
                            <img src={nodeIcon} className='w-8' alt="" />
                            <p className="text-2xl font-bold ">Node.js</p>
                        </div>
                        <progress className="progress text-blue-600 w-2/3 h-4" value="75" max="100"></progress>
                    </div>
                    <div className="flex flex-col md:flex-row  items-center gap-4">
                        <div className='w-1/3 flex items-center justify-center gap-2'>
                            <img src={firebaseIcon} className='w-8' alt="" />
                            <p className="text-2xl font-bold">Firebase</p>
                        </div>
                        <progress className="progress text-blue-600 w-2/3 h-4" value="90" max="100"></progress>
                    </div>
                    <div className="flex flex-col md:flex-row  items-center gap-4">
                        <div className='w-1/3 flex items-center justify-center gap-2'>
                            <img src={mongodbcon} className='w-8' alt="" />
                            <p className="text-2xl font-bold ">MongoDB</p>
                        </div>
                        <progress className="progress text-blue-600 w-2/3 h-4" value="85" max="100"></progress>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;

  