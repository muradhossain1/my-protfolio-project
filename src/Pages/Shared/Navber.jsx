import logo from '../../assets/logo.png'

const Navber = () => {
    const links = <>
        <li><a href="#about" className="text-base font-bold">About</a></li>
        <li><a href="#skills" className="text-base font-bold">My Skills</a></li>
        <li><a href="#projects" className="text-base font-bold">My Projects</a></li>
        <li><a href="#contact" className="text-base font-bold">Contact Me</a></li>
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
                <button className="py-2 px-4 font-semibold  rounded-md bg-blue-600 text-white hover:bg-blue-700"><a href="https://drive.google.com/file/d/1mimEerNs0JdFuhrYhm-TlOp3q0jKx4u9/view" target="_blank">Download Resume</a></button>
            </div>
        </div>
    );
};

export default Navber;