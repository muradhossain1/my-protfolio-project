

const Qualification = () => {
    return (
        <div id="education">
            <div  className=" bg-base-200 rounded-lg lg:mx-16 mt-12">
                <div>
                    <h2 className="text-4xl font-bold text-center pt-6 drop-shadow-xl">Educational Qualification</h2>
                </div>
                <div className="flex flex-col lg:flex-row gap-4 p-4  mt-6">
                    <div className="rounded-lg lg:w-1/2 bg-white px-6 lg:mb-6 py-4 space-y-2">
                        <h2 className="text-xl  font-bold ">Bachelor of Accounting Department (Honors)</h2>
                        <p className="text-base font-medium text-gray-600">National University of Govt Kodom Rosul Collage</p>
                        <p className="text-base font-medium text-gray-600">Session Year: 2019-2025</p>
                        <p className="text-base font-medium text-gray-600">Running For Final Year...</p>
                    </div>
                    <div className="rounded-lg lg:w-1/2 bg-white px-6 py-4 lg:mb-6 space-y-2">
                        <h2 className="text-xl font-bold ">Higher Secondary Certificate (HSC)</h2>
                        <p className="text-base font-medium text-gray-600">National University of Govt Kodom Rosul Collage</p>
                        <p className="text-base font-medium text-gray-600">Completed Year: 2019</p>
                        <p className="text-base font-medium text-gray-600">GPA: 3.75</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Qualification;