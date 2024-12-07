import React from 'react';
// import { mount } from 'marketing/MarketingApp';
import MarketingApp from './components/MarketingApp';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';

// console.log("Hello from container");

export default () => {
    return (
        <BrowserRouter>
        <div>
                <Header />
        <MarketingApp />
            </div>
        </BrowserRouter>)
}