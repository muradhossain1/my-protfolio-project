/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";



const ProjectsCrad = ({ project }) => {
    const { id, name, image, description } = project
    return (
        <div>
            <div className="p-6 rounded-lg bg-base-100 border hover:border-blue-600 shadow-md">
                <figure>
                    <img
                        className=" rounded-lg h-36"
                        src={image}
                        alt="photo" />
                </figure>
                <div className="mt-4 space-y-3">
                    <h2 className="text-2xl font-bold">{name}</h2>
                    <p className="text-base font-medium text-gray-600">{description}</p>
                    <div className="card-actions justify-center">
                        <button className="py-2 px-6 font-semibold hover:bg-blue-700 rounded-md bg-blue-600 text-white mt-2 w-full"><Link to={`/details/${id}`}>View Details</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsCrad;