const get = (tg) => document.querySelector(tg);
const getAll = (tg) => document.querySelectorAll(tg);

const header = get('#header');
const gnblist = getAll('#header .gnb ul .li-box');
const gnbul = get('#header .gnb ul');
const gnbh = getAll('#header .gnb ul li h3');
const gnbmenu = getAll('#header .gnb ul li .nav-content li ');
const ficon = getAll('#footer .footer-icon li a img');
const $link = getAll('a[href="#"]');
import { logoObj, logoObjoff } from './data.js';
const link = () => {
    $link.forEach((item, idx) => {
        item.addEventListener('click', (e) => e.preventDefault());
    });
};
let cnt = 0;
const mainNav = () => {
    link();

    gnblist.forEach((item, idx) => {
        item.addEventListener('mouseenter', (e) => {
            cnt = idx;
            gnblist.forEach((item, dx) => {
                item.classList.remove('on');
                gnbh[dx].classList.remove('on');
            });
            gnblist[cnt].classList.add('on');
            gnbh[cnt].classList.add('on');
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
        // 메뉴 에서 마우스 호버시 색 변경부분
        /*
        header.addEventListener('mouseenter', (e) => {
            header.classList.add('on');
            item.classList.add('mr');
        });
        header.addEventListener('mouseleave', (e) => {
            header.classList.remove('on');
            item.classList.remove('mr');
        });
        // header 부분 색 변경 + 높이 변경부분
        */
    });
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

(() => {
    mainNav();
})();
