import { get, getAll } from './get.js';

const subLayout = () => {
    const leftConli = getAll('.left-nav .left-con > li > a');
    const navBox = getAll('.left-nav .left-con li .nav-box');
    const textli = getAll('.left-nav .left-con li .nav-box li a');
    const eventBox = get('.left-nav .event-box');

    let cnt = 0,
        timer = null;

    const text = () => {
        textli.forEach((item, idx) => {
            item.addEventListener('click', (e) => {
                cnt = idx;
                textli.forEach((item) => {
                    item.classList.remove('on');
                });
                textli[cnt].classList.add('on');
            });
        });
    };

    leftConli.forEach((item, idx) => {
        item.addEventListener('click', (e) => {
            cnt = idx;
            navBox.forEach((item, dx) => {
                item.classList.remove('on');
                leftConli[dx].classList.remove('on');
            });
            navBox[cnt].classList.add('on');
            leftConli[cnt].classList.add('on');
            text();
        });
    });
    text();
    const eve = () => {
        cnt = cnt > 3 ? (cnt = 0) : cnt + 1;
        eventBox.style.backgroundImage = `url(images/medical${cnt}.jpg)`;
    };
    timer = setInterval(eve, 3000);
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
