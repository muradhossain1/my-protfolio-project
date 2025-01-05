import { useLoaderData } from "react-router-dom";


const Details = () => {
    const project = useLoaderData();
    console.log(project)
    const { name, image, description, technologies, challenge, progress, liveLink, githubLink } = project
    return (
        <div className="pt-24">
            <div>
                <div className="p-6 lg:w-2/4 mx-auto rounded-lg bg-base-100 border  shadow-xl">
                    <figure>
                        <img
                            className=" mx-auto rounded-lg"
                            src={image}
                            alt="photo" />
                    </figure>
                    <div className="mt-4 space-y-4">
                        <div>
                            <h2 className="text-3xl font-bold">{name}</h2>
                            <p className="text-base mt-2 font-medium text-gray-600">{description}</p>
                        </div>
                        <div>
                            <p className="text-xl font-bold">Technologies Used:</p>
                            <ul className="text-base font-medium text-gray-600">
                                {(technologies || []).map((technologie, index) => (
                                    <li className="list-decimal ml-8" key={index}>{technologie}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <p className="text-xl font-bold">Challenges:</p>
                            <p className="text-base font-medium text-gray-600">{challenge}</p>
                        </div>
                        <div>
                            <p className="text-xl font-bold">Improvements in Progress:</p>
                            <p className="text-base mt-1 font-medium text-gray-600">{progress}</p>
                        </div>
                        <div className=" flex items-center gap-4">
                            <button className="btn btn-success text-white"><a href={liveLink}>Live Link</a></button>
                            <button className="btn btn-warning"><a href={githubLink}>GitHub Link</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;