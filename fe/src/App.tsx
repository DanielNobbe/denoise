import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Navbar} from "./components/Navbar";
import {LandingPage} from "./pages/LandingPage";
import {Footer} from "./components/Footer";
import {ContactPage} from "./pages/ContactPage";
import {AboutPage} from "./pages/AboutPage";
import {ServicesPage} from "./pages/ServicesPage";
import {ExamplesPage} from "./pages/ExamplesPage";
import {MainPage} from "./pages/MainPage";
import {ServicePage} from "./pages/ServicePage";

function App() {
    return (
        <div>
            <Navbar />
            <div>
                <Routes>
                    <Route path="/" element={<MainPage/>} />
                    <Route path="/services" element={<ServicePage/>} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
