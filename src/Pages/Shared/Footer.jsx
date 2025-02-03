import logo from '../../assets/logo.png';
import githubImg from '../../assets/github.png'
import facebookImg from '../../assets/facebook.png'
import linkedinImg from '../../assets/linkedin.png'

const Footer = () => {
    return (
        <div className="mt-12 bg-neutral ">
            <div className="text-white p-6 md:px-10 lg:px-32 flex items-center justify-between">
                <aside className="grid-flow-col items-center flex gap-3">
                    <img src={logo} className='w-8 h-8' alt="" />
                    <p>© Md Murad Hossain {new Date().getFullYear()} - All right reserved</p>
                </aside>
                <div className='flex gap-2'>
                    <a href="https://github.com/muradhossain1" target="_blank">
                        <img src={githubImg} className='w-8' alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/md-murad-hossain-081036345" target="_blank">
                        <img src={linkedinImg} className='w-8' alt="" />
                    </a>
                    <a href="https://www.facebook.com/mdmurad.islam.731135" target="_blank">
                        <img src={facebookImg} className='w-8' alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;