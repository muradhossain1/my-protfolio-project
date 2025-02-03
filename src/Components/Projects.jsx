import { useEffect, useState } from "react";
import ProjectsCrad from "./ProjectsCrad";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Projects = () => {
    const [projects, setProjects] = useState();
    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => {
                setProjects(data)
            })
    }, [])
    return (
        <div id="projects" className=" rounded-lg lg:mx-16 mt-4">
            <div>
                <h2 className="text-4xl font-bold text-center drop-shadow-xl">My Projects</h2>
            </div>
            <div data-aos='fade-up'
                data-aos-duration="1000" className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
                {
                    projects?.map(project => <ProjectsCrad key={project.id} project={project}></ProjectsCrad>)
                }
            </div>
        </div>
    );
};

export default Projects;