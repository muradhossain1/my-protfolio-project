import profileImg from '../assets/profile.png'
import githubImg from '../assets/github.png'
import facebookImg from '../assets/facebook.png'
import twitterImg from '../assets/twitter.png'
import linkedinImg from '../assets/linkedin.png'

const Banner = () => {
    return (
        <div className=" bg-base-200 rounded-lg lg:mx-16 md:h-96 mt-8">
            <div className="hero-content flex-col md:flex-row-reverse">
                <div className="md:w-1/2">
                    <img
                        src={profileImg}
                        className="mx-auto mt-8 rounded-lg shadow-2xl" />
                </div>
                <div className="md:w-1/2 space-y-6 lg:ml-24 my-8">
                    <div>
                        <h1 className="text-4xl font-bold">Md Murad Hossain</h1>
                        <p className="text-blue-600 mt-2 text-lg font-semibold">
                            ---- Web Developer & Designer
                        </p>
                    </div>
                    <div className='flex gap-2'>
                        <a href="https://github.com/muradhossain1" target="_blank">
                            <img src={githubImg} className='w-12' alt="" />
                        </a>
                        <a href="https://www.facebook.com/mdmurad.islam.731135" target="_blank">
                            <img src={facebookImg} className='w-12' alt="" />
                        </a>
                        <a href="https://x.com/MDMurad34810132" target="_blank">
                            <img src={twitterImg} className='w-12' alt="" />
                        </a>
                        <a href="https://www.linkedin.com/in/md-murad-hossain-081036345" target="_blank">
                            <img src={linkedinImg} className='w-12' alt="" />
                        </a>
                    </div>
                    <button className="btn btn-warning"><a href="https://docs.google.com/document/d/131WNZm2lq1rDpgRlpaM0Vd6o5csmT7x2XflFD55IoL0/edit?tab=t.0" target="_blank">Download Resume</a></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;