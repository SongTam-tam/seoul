import { get, getAll } from './get.js';

const subParking = () => {
    const more = get('#container .self .con1 .more');
    const con2 = get('#container .self .con1 .con2');
    let isplay = true;

    more.addEventListener('click', (e) => {
        if (isplay) {
            con2.classList.add('on');
        } else {
            con2.classList.remove('on');
        }
        isplay = !isplay;
    });
};

(() => {
    subParking();
})();
