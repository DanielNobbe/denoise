import React from 'react';
import {Navbar} from "./components/Navbar";
import {LandingPage} from "./pages/LandingPage";
import {Footer} from "./components/Footer";
import {ContactPage} from "./pages/ContactPage";
import {AboutPage} from "./pages/AboutPage";
import {ServicesPage} from "./pages/ServicesPage";

function App() {
    return (
        <div>
            <Navbar />
            <LandingPage />
            <ServicesPage />
            <AboutPage />
            <ContactPage />
            <Footer />
        </div>
    );
}

export default App;
