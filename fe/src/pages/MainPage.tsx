import React from 'react';
import {LandingPage} from "./LandingPage";
import {ServicesPage} from "./ServicesPage";
import {ExamplesPage} from "./ExamplesPage";
import {AboutPage} from "./AboutPage";
import {ContactPage} from "./ContactPage";

export const MainPage = () => {
    return (
        <div>
            <LandingPage />
            <ServicesPage />
            <ExamplesPage />
            <AboutPage />
            <ContactPage />
        </div>
    );
};