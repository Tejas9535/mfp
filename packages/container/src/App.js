import React from 'react';
// import { mount } from 'marketing/MarketingApp';
import MarketingApp from './components/MarketingApp';

console.log("Hello from container");

export default () => {
    return (<>
        <div>
            <h1>Hi there</h1>
        </div>
        <hr />
        <MarketingApp />
    </>)
}