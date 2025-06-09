import { get, getAll } from './get.js';

const subParking = () => {
    const more = get('#container .self .con1 .con2 .more');
    const moreicon = get('#container .self .con1 .con2 .more i');
    const con2 = get('#container .self .con1 .con2');
    let isplay = true;

    more.addEventListener('click', (e) => {
        if (isplay) {
            con2.classList.add('on');
            moreicon.classList.replace('xi-angle-down', 'xi-angle-up');
        } else {
            con2.classList.remove('on');
            moreicon.classList.replace('xi-angle-up', 'xi-angle-down');
        }
        isplay = !isplay;
    });
};

(() => {
    subParking();
})();
