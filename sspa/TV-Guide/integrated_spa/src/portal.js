import 'zone.js';
import * as singleSpa from 'single-spa';
import { GlobalStateProvider } from './globalStateProvider';
import { registerPartner } from './partnerRegistration';

async function init() {
    const globalStateProvider = new GlobalStateProvider();
    const loaders = [];

    loaders.push(registerPartner('app3', '/app3', '/app3/entry.js', null, globalStateProvider));

    await Promise.all(loaders);

    singleSpa.start();
}

init(); 