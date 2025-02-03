import profileImg from '../assets/profile.png'
import githubImg from '../assets/github.png'
import facebookImg from '../assets/facebook.png'
import twitterImg from '../assets/twitter.png'
import linkedinImg from '../assets/linkedin.png'
import { motion } from "motion/react"
import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {
    return (
        <div className="rounded-lg lg:mx-16 md:h-96 mt-10">
            <div className="hero-content flex-col md:flex-row-reverse">
                <div className="md:w-1/2">
                    <motion.img
                        animate={{ x: [0, 80, 0] }}
                        transition={{ duration: 8, repeat: Infinity }}
                        src={profileImg}
                        className="mx-auto rounded-lg shadow-2xl" />
                </div>
                <div className="md:w-1/2 space-y-6 ">
                    <div>
                        <h1 className="text-4xl font-bold"> Hi! <br></br> I&apos;m Murad Hossain</h1>
                        <p className="text-blue-600 uppercase mt-2 text-3xl font-bold">
                            <Typewriter
                                words={['Web Developer & Designer']}
                                loop={[0, 1, 0]}
                                cursor
                                typeSpeed={300}
                                deleteSpeed={50}
                                delaySpeed={2000}
                            />
                        </p>
                        <p className='mt-2 font-medium'>As a dedicated web developer, I specialize in building scalable and interactive web applications using React, Node.js, Express.js, and MongoDB.</p>
                    </div>
                    <div className='flex gap-2'>
                        <motion.a
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                            href="https://github.com/muradhossain1" target="_blank">
                            <img src={githubImg} className='w-12' alt="" />
                        </motion.a >
                        <motion.a
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                            href="https://www.linkedin.com/in/md-murad-hossain-081036345" target="_blank">
                            <img src={linkedinImg} className='w-12' alt="" />
                        </motion.a >
                        <motion.a
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                            href="https://www.facebook.com/mdmurad.islam.731135" target="_blank">
                            <img src={facebookImg} className='w-12' alt="" />
                        </motion.a >
                        <motion.a
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                            href="https://x.com/MDMurad34810132" target="_blank">
                            <img src={twitterImg} className='w-12' alt="" />
                        </motion.a >
                    </div>
                    <button className="py-2 px-4 font-semibold  rounded-md bg-blue-600 text-white hover:bg-blue-800"><a href="https://drive.google.com/file/d/1mimEerNs0JdFuhrYhm-TlOp3q0jKx4u9/view" target="_blank">Download Resume</a></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;