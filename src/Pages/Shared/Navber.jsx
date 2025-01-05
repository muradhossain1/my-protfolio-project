import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'


const Navber = () => {
    const links = <>
        <li><Link to='/' className=" font-semibold">Home</Link></li>
        <li><a href="#about" className=" font-semibold">About</a></li>
        <li><a href="#education" className=" font-semibold">Qualification</a></li>
        <li><a href="#skills" className=" font-semibold">Skills</a></li>
    </>
    return (
        <div className="navbar fixed z-10 bg-red-50 md:px-16 lg:px-32">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <img src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
            <button className="btn btn-warning"><a href="https://docs.google.com/document/d/131WNZm2lq1rDpgRlpaM0Vd6o5csmT7x2XflFD55IoL0/edit?tab=t.0" target="_blank">Download Resume</a></button>
            </div>
        </div>
    );
};

export default Navber;