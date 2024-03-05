import React from 'react';
import {Navbar} from "./components/Navbar";
import {LandingPage} from "./pages/LandingPage";
import {Footer} from "./components/Footer";
import {ContactPage} from "./pages/ContactPage";
import {AboutPage} from "./pages/AboutPage";

function App() {
    return (
        <div>
            <Navbar />
            <LandingPage />
            <AboutPage />
            <ContactPage />
            <Footer />
        </div>
    );
}

export default App;
