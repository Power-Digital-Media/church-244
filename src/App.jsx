import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import DockNavbar from './components/DockNavbar';
import Footer from './components/Footer';

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
                {/* V2 Navigation: Dock */}
                <DockNavbar />

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
            </BrowserRouter>
        </HelmetProvider>
    );
}

export default App;
