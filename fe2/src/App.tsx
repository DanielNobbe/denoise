import React from 'react';
import {Navbar} from "./components/Navbar";
import {LandingPage} from "./pages/LandingPage";
import {Footer} from "./components/Footer";
import {ContactPage} from "./pages/ContactPage";

function App() {
    return (
        <div>
            <Navbar />
            <LandingPage />
            <ContactPage />
            <Footer />
        </div>
    );
}

export default App;
