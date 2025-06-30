import React from 'react';
import { Logo } from './Logo';
import { SearchProducts } from './SearchProducts';
import { BuyBox } from './BuyBox';
import { Account } from './Account';
import { Menu } from './Menu';


export function Header () {
    return (
        <header className="header">
            <div className="flexmob m-0 relative flex justify-between align-center p-3 bg-light border-bottom">
                <Menu />
                <Logo />
                <SearchProducts />
                <Account />
                <BuyBox />
            </div>
        </header>
    );
};