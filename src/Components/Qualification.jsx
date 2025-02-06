import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Qualification = () => {
    return (
        <div id="education">
            <div className="lg:mx-16 mt-12">
                <div>
                    <h2 className="text-4xl font-bold text-center pt-6 drop-shadow-xl">Educational Qualification</h2>
                </div>
                <div className="flex flex-col lg:flex-row gap-6  mt-6">
                    <div data-aos='fade-right'
                        data-aos-duration="1000" className="rounded-lg lg:w-1/2 bg-red-50 p-8 lg:mb-6 space-y-2 shadow-md">
                        <h2 className="text-xl  font-bold ">Bachelor of Business Administration (BBA)</h2>
                        <div>
                            <p className="text-base font-medium">National University of Govt Kodom Rosul Collage</p>
                            <p className="text-base font-medium">Session: 2019-2025</p>
                            <p className="text-base font-medium">4th Year On Going</p>
                        </div>
                    </div>
                    <div data-aos='fade-left'
                        data-aos-duration="1000" className="rounded-lg lg:w-1/2 bg-red-50 p-8 lg:mb-6 space-y-2 shadow-md">
                        <h2 className="text-xl font-bold ">Higher Secondary Certificate (HSC)</h2>
                        <div>
                            <p className="text-base font-medium">Govt Tolaram Collage & University</p>
                            <p className="text-base font-medium">Passing Year: 2019</p>
                            <p className="text-base font-medium">GPA: 3.75</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Qualification;