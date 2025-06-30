import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FilterGroup } from '../components/FilterGroup';
import { Main } from '../components/Main';
import { Gallery } from '../components/Gallery';
import { Section } from '../components/Section';

export const Layout = ({ children }) => {
    return (
        <>
            {children}
            <Main />
            <Gallery />
            <Section />
            <Footer />
        </>
    );
};
    