import { Route, Routes } from 'react-router-dom';
import HomePage from './Routes/HomePage';
import BiographyPage from './Routes/BiographyPage';
import Contact from './Routes/Contact';
import NavBar from './Routes/Components/NavBar';
import Footer from './Routes/Components/Footer';
import { useState } from 'react';

function App() {
    const [hamburgerMenuActive, setHamburgerMenuActivity] = useState(false);
    const toggleHamburgerMenu = () => {
        if (hamburgerMenuActive) {
            setHamburgerMenuActivity(false);
        } else {
            setHamburgerMenuActivity(true);
        }
    };
    return (
        <div className='flex flex-col min-h-screen'>
            <NavBar
                hamburgerMenuActive={hamburgerMenuActive}
                toggleHamburgerMenu={toggleHamburgerMenu}
            />
            <div className='flex-grow container mx-auto'>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/biography' element={<BiographyPage />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
