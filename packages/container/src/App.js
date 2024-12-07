import React from 'react';
import MarketingApp from './components/MarketingApp';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import { createGenerateClassName, StylesProvider } from '@material-ui/core/styles';


const generateClassName = createGenerateClassName({
    productionPrefix: 'ca'
})

export default () => {
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <div>
                    <Header />
                    <MarketingApp />
                </div>
            </BrowserRouter>
        </StylesProvider>
    )
}