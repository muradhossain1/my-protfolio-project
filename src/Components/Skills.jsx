import htmlIcon from '../assets/icons/html.png'
import cssIcon from '../assets/icons/css.png'
import jsIcon from '../assets/icons/js.png'
import reactIcon from '../assets/icons/react.png'
import nodeIcon from '../assets/icons/node.png'
import firebaseIcon from '../assets/icons/firebase.png'
import mongodbcon from '../assets/icons/mongodb.png'

const Skills = () => {
    return (
        <div id="skills" className="lg:mx-16">
            <div>
                <h2 className="text-4xl font-bold text-center pt-6 drop-shadow-xl">My Skills</h2>
                <p className="lg:px-48 mt-2 text-base font-medium text-gray-600 text-center">My expertise lies in both frontend and backend development, with proficiency in modern technologies such as HTML, CSS, JavaScript, React, and Node.js</p>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 p-4  mt-6">
                <div className="rounded-lg lg:w-1/2 bg-white px-6 lg:mb-6 py-4 space-y-2 text-center lg:mt-12">
                    <h2 className="text-2xl uppercase  font-bold">My Focus</h2>
                    <p className="border-2 mx-32 border-blue-500"></p>
                    <p className="text-base font-medium text-gray-600 ">UI/UX Design</p>
                    <p className="text-base font-medium text-gray-600 ">Responsive Design</p>
                    <p className="text-base font-medium text-gray-600 ">Web Design</p>
                    <p className="text-base font-medium text-gray-600 ">Backend</p>
                </div>
                <div className="rounded-lg lg:w-1/2 bg-white px-6 py-4 lg:mb-6 space-y-2 flex flex-col gap-2">
                    <div className="flex items-center gap-4">
                        <div className='w-1/3 flex items-center justify-center gap-2'>
                            <img src={htmlIcon} className='w-8' alt="" />
                            <p className="text-2xl font-bold uppercase">Html</p>
                        </div>
                        <progress className="progress  w-2/3 h-6" value="90" max="100"></progress>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className='w-1/3 flex items-center justify-center gap-2'>
                            <img src={cssIcon} className='w-8' alt="" />
                            <p className="text-2xl font-bold uppercase">css</p>
                        </div>
                        <progress className="progress  w-2/3 h-6" value="85" max="100"></progress>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className='w-1/3 flex items-center justify-center gap-2'>
                            <img src={jsIcon} className='w-8' alt="" />
                            <p className="text-2xl font-bold">JS</p>
                        </div>
                        <progress className="progress  w-2/3 h-6" value="75" max="100"></progress>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className='w-1/3 flex items-center justify-center gap-2'>
                            <img src={reactIcon} className='w-8' alt="" />
                            <p className="text-2xl font-bold">React.js</p>
                        </div>
                        <progress className="progress  w-2/3 h-6" value="85" max="100"></progress>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className='w-1/3 flex items-center justify-center gap-2'>
                            <img src={nodeIcon} className='w-8' alt="" />
                            <p className="text-2xl font-bold ">Node.js</p>
                        </div>
                        <progress className="progress  w-2/3 h-6" value="75" max="100"></progress>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className='w-1/3 flex items-center justify-center gap-2'>
                            <img src={firebaseIcon} className='w-8' alt="" />
                            <p className="text-2xl font-bold">Firebase</p>
                        </div>
                        <progress className="progress  w-2/3 h-6" value="90" max="100"></progress>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className='w-1/3 flex items-center justify-center gap-2'>
                            <img src={mongodbcon} className='w-8' alt="" />
                            <p className="text-2xl font-bold ">MongoDB</p>
                        </div>
                        <progress className="progress  w-2/3 h-6" value="85" max="100"></progress>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;

  