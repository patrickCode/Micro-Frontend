import * as singleSpa from 'single-spa';

singleSpa.registerApplication('app1-guide', () =>
    import ('../app1_guide/index.js'), pathPrefix('/app1-guide'));
singleSpa.registerApplication('app2-guide', () =>
    import ('../app2_video/index.js'), pathPrefix('/app2-video'));
singleSpa.registerApplication('app3-details', () =>
    import ('../app3_details/index.js'), pathPrefix('/app3-details'));
singleSpa.registerApplication('app4-repeat', () =>
    import ('../app4_repeat/index.js'), pathPrefix('/app4-repeat'));


singleSpa.start();

function pathPrefix(prefix) {
    return function(location) {
        return location.pathname.startsWith(`${prefix}`);
    }
}