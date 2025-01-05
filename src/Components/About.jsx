

const About = () => {
    return (
        <div id="about" className="flex flex-col md:flex-row gap-6 md:gap-12 w-full p-6 lg:px-16">
            <div className=" md:w-1/3 md:p-4 lg:p-16">
                <h2 className="text-4xl font-bold drop-shadow-xl lg:ml-6">About me</h2>
            </div>
            <div className="md:w-2/3 md:p-4 lg:p-12 ">
                <p className="font-medium">
                Hello! I am <span className="font-bold">Md Murad Hossain</span>, an enthusiastic programmer and tech lover. I particularly enjoy working with programming languages <span className="font-bold">HTML/CSS</span> and technologies. My interest in learning more about web technologies, and soon I found myself diving into JavaScript, React, Node.js, Express.js, MongoDB, Firebase and JWT .
                <p className="mt-3">
                Outside of programming, I love Hobbies like sports, listening to music, etc. I also aim to make a positive impact on society through my work. Feel free to explore <span className="font-bold">My portfolio</span> my portfolio and projects, and dont hesitate to reach out. I am always open to new creative and challenging opportunities!
                </p>
                </p>
                <button className="btn btn-warning mt-4">Hire Me</button>
            </div>
        </div>
    );
};

export default About;