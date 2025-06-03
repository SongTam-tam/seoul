import { get, getAll } from './get.js';

const subLayout = () => {
    const leftConli = getAll('.left-nav .left-con > li > a');
    const navBox = getAll('.left-nav .left-con li .nav-box');

    let cnt = 0;

    leftConli.forEach((item, idx) => {
        item.addEventListener('click', (e) => {
            cnt = idx;
            navBox.forEach((item, dx) => {
                item.classList.remove('on');
                leftConli[dx].classList.remove('on');
            });
            navBox[cnt].classList.add('on');
            leftConli[cnt].classList.add('on');
        });
    });
};
const subLayoutComit = () => {
    const getPage = (page, tag) => {
        fetch(page)
            .then((res) => res.text())
            .then((res) => {
                if (tag === '.left-nav') {
                    get(tag).innerHTML = res;
                    subLayout();
                }
            });
    };
    getPage('page/sub_layout.html', '.left-nav');
};

(() => {
    subLayoutComit();
})();
