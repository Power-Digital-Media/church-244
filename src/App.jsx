import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StickyMobileBar from './components/StickyMobileBar';

// Import Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Transfer from './pages/Transfer';
import Delivery from './pages/Delivery';
import Contact from './pages/Contact';
import Vaccines from './pages/Vaccines';
import Market from './pages/Market';

import './styles/index.css';

function App() {
    return (
        <HelmetProvider>
            <BrowserRouter>
                {/* ScrollToTop component could be added here */}
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/transfer" element={<Transfer />} />
                        <Route path="/delivery" element={<Delivery />} />
                        <Route path="/vaccines" element={<Vaccines />} />
                        <Route path="/market" element={<Market />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
                <StickyMobileBar />
            </BrowserRouter>
        </HelmetProvider>
    );
}

export default App;
