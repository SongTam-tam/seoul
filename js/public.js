const get = (tg) => document.querySelector(tg);
const getAll = (tg) => document.querySelectorAll(tg);

const header = get('#header');
const gnblist = getAll('#header .gnb ul .li-box');
const gnbul = get('#header .gnb ul');
const gnbh = getAll('#header .gnb ul li h3');
const gnbmenu = getAll('#header .gnb ul li .nav-content li ');
const ficon = getAll('#footer .footer-icon li a img');
const $link = getAll('a[href="#"]');
const loginicon = getAll('#header .icon li');
const loginbar = get('#header .login');
const languagebar = get('#header .language');
const search = get('.search ');
const close = get('.search .close');

import { logoObj, logoObjoff } from './data.js';
const link = () => {
    $link.forEach((item, idx) => {
        item.addEventListener('click', (e) => e.preventDefault());
    });
};
let cnt = 0;
const mainNav = () => {
    const header = get('#header');
    const gnblist = getAll('#header .gnb ul .li-box');
    const gnbul = get('#header .gnb ul');
    const gnbh = getAll('#header .gnb ul li h3');
    const gnbmenu = getAll('#header .gnb ul li .nav-content li ');
    const loginbar = get('#header .login');
    const languagebar = get('#header .language');

    link();
    gnblist.forEach((item, idx) => {
        item.addEventListener('mouseenter', (e) => {
            cnt = idx;
            gnblist.forEach((item, dx) => {
                item.classList.remove('on');
            });
            gnblist[cnt].classList.add('on');
            gnbh[cnt].style.color = '#fff';
        });
        item.addEventListener('mouseleave', (e) => {
            item.classList.remove('on');
            gnbh[cnt].classList.remove('on');
        });
        // 네비게이션 부분 효과
        gnbul.addEventListener('mouseenter', (e) => {
            header.classList.add('on');
            item.classList.add('mr');
            loginbar.classList.remove('on');
            languagebar.classList.remove('on');
        });
        gnbul.addEventListener('mouseleave', (e) => {
            header.classList.remove('on');
            item.classList.remove('mr');
        });
        // ul 호버시 헤더효과
        gnbmenu.forEach((item, idx) => [
            item.addEventListener('mouseenter', (e) => {
                gnbmenu.forEach((item, dx) => {
                    item.classList.remove('on');
                });
                e.target.classList.add('on');
            }),
            item.addEventListener('mouseleave', (e) => {
                item.classList.remove('on');
            }),
        ]);
    });
};
const searchCon = () => {
    const header = get('#header');
    const loginicon = getAll('#header .icon li');
    const loginbar = get('#header .login');
    const languagebar = get('#header .language');
    const search = get('.search ');
    const close = get('.search .close');
    loginicon[0].addEventListener('mouseenter', (e) => {
        loginbar.classList.add('on');
        languagebar.classList.remove('on');
    });
    loginicon[1].addEventListener('mouseenter', (e) => {
        languagebar.classList.add('on');
        loginbar.classList.remove('on');
    });
    loginicon[2].addEventListener('mouseenter', (e) => {
        loginbar.classList.remove('on');
        languagebar.classList.remove('on');
    });
    header.addEventListener('mouseleave', (e) => {
        loginbar.classList.remove('on');
        languagebar.classList.remove('on');
    });
    loginicon[2].addEventListener('click', (e) => {
        search.classList.add('on');
    });
    close.addEventListener('click', (e) => {
        search.classList.remove('on');
    });
};

const footerNav = () => {
    const ficon = getAll('#footer .footer-icon li a img');
    ficon.forEach((item, idx) => {
        item.addEventListener('mouseenter', (e) => {
            cnt = idx;
            item.setAttribute('src', logoObj[cnt].logourl);
        });
    });
    ficon.forEach((item, idx) => {
        item.addEventListener('mouseleave', (e) => {
            cnt = idx;
            item.setAttribute('src', logoObjoff[cnt].logourl);
        });
    });
};

const login = () => {
    const loginbtn = get('#header .login .log');
    const pop = get('.login-banner .login');
    const bg = get('.bodybg');
    const close = get('.xi-close');

    loginbtn.addEventListener('click', (e) => {
        pop.classList.add('on');
        bg.classList.add('on');
    });
    close.addEventListener('click', (e) => {
        pop.classList.remove('on');
        bg.classList.remove('on');
    });
};

const comInit = () => {
    const getPage = (page, tag) => {
        fetch(page)
            .then((res) => res.text())
            .then((res) => {
                if (tag === '#header') {
                    get(tag).innerHTML = res;
                    mainNav();
                }
                if (tag === '#footer') {
                    get(tag).innerHTML = res;
                    footerNav();
                }
                if (tag === '.search') {
                    get(tag).innerHTML = res;
                    searchCon();
                }
                if (tag === '.login') {
                    get(tag).innerHTML = res;
                    login();
                }
            });
    };
    getPage('page/header.html', '#header');
    getPage('page/footer.html', '#footer');
    getPage('page/search.html', '.search');
    getPage('page/popup.html', '.login');
};

(() => {
    comInit();
    link();
})();
