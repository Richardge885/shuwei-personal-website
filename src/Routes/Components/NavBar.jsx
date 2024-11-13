import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const NavBar = ({ hamburgerMenuActive, toggleHamburgerMenu }) => {
    useEffect(() => {
        if (hamburgerMenuActive) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [hamburgerMenuActive]);

    return (
        <nav className='w-full z-50 flex bg-red justify-between items-center lg:px-10'>
            <button
                className='absolute right-4 top-4 w-8 flex flex-col gap-2 lg:hidden z-30'
                onClick={() => {
                    toggleHamburgerMenu();
                }}
            >
                {hamburgerMenuActive ? (
                    <>
                        <span className='bg-white w-full h-0.5 block rounded-xl transition-all duration-500 rotate-[135deg] translate-y-2'></span>
                        <span className='bg-white w-full h-0.5 block rounded-xl transition-all duration-500 opacity-0'></span>
                        <span className='bg-white w-full h-0.5 block rounded-xl transition-all duration-500 -rotate-[135deg] -translate-y-3'></span>
                    </>
                ) : (
                    <>
                        <span className='bg-white w-full h-0.5 block rounded-xl duration-500 transition-all'></span>
                        <span className='bg-white w-full h-0.5 block rounded-xl duration-500 transition-all'></span>
                        <span className='bg-white w-full h-0.5 block rounded-xl duration-500 transition-all'></span>
                    </>
                )}
            </button>
            <Link
                to='/'
                className='z-20 w-full text-center font-cursive text-4xl text-white py-2 lg:py-5 lg:text-5xl lg:w-auto'
            >
                <h1 className=''>Shuwei Zuo</h1>
            </Link>
            <div className='hidden lg:flex justify-between text-white font-serif w-80 text-2xl'>
                <Link to='/'>Home</Link>
                <Link to='biography'>Biography</Link>
                <Link to='contact'>Contact</Link>
            </div>
            <AnimatePresence>
                {hamburgerMenuActive && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{
                            height: '100vh',
                            transition: { duration: 0.3, ease: 'easeOut' },
                        }}
                        exit={{
                            height: 0,
                            transition: { duration: 0.3, ease: 'easeOut' },
                        }}
                        className='z-10 absolute w-full top-0 flex flex-col justify-center items-center gap-8 text-white bg-red font-serif font-medium text-3xl'
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <Link
                                to='/'
                                onClick={() => {
                                    toggleHamburgerMenu();
                                }}
                                className='group py-4'
                            >
                                Home
                                <span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-1 bg-white'></span>
                            </Link>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <Link
                                to='/biography'
                                onClick={() => {
                                    toggleHamburgerMenu();
                                }}
                                className='group py-4'
                            >
                                Biography
                                <span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-1 bg-white'></span>
                            </Link>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <Link
                                to='/contact'
                                onClick={() => {
                                    toggleHamburgerMenu();
                                }}
                                className='group py-4'
                            >
                                Contact Me
                                <span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-1 bg-white'></span>
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default NavBar;
