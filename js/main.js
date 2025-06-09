import { get, getAll } from './get.js';

const mainPage = () => {
    const video = get('#visual .video-visual');
    const next = get('#visual .gage .btn .next');
    const prev = get('#visual .gage .btn .prev');
    const stop = get('#visual .gage .btn .stop');
    const stopi = get('#visual .gage .btn .stop i');
    const gage = get('#visual .gage strong');
    const visualSpan = get('#visual .gage span');

    let cnt = 0,
        timer = null,
        interval = 20000,
        interval2 = 20001,
        imgurl,
        isplay = true;

    let x = gage.animate({ transform: ['scaleX(0)', 'scaleX(1)'], Infinity }, 20000);
    visualSpan.textContent = `${cnt + 1} / 2`;
    const banner = () => {
        imgurl = `videos/seoulAsan${cnt}-cut.mp4`;
        video.setAttribute('src', imgurl);
        visualSpan.textContent = `${cnt + 1} / 2`;
    };
    const visualTimer = () => {
        cnt = cnt > 0 ? (cnt = 0) : cnt + 1;
        x = gage.animate({ transform: ['scaleX(0)', 'scaleX(1)'], Infinity }, 20000);
        banner();
    };
    timer = setInterval(visualTimer, interval);

    prev.addEventListener('click', (e) => {
        cnt = cnt < 1 ? (cnt = 1) : cnt - 1;
        x = gage.animate({ transform: ['scaleX(0)', 'scaleX(1)'], Infinity }, 20000);
        if (!isplay) {
            x.pause();
            banner();
            video.pause();
            clearInterval(timer);
        } else {
            banner();
            clearInterval(timer);
            timer = setInterval(visualTimer, interval);
        }

        // timer = setInterval(visualTimer, interval);
    });
    next.addEventListener('click', (e) => {
        cnt = cnt > 0 ? (cnt = 0) : cnt + 1;
        x = gage.animate({ transform: ['scaleX(0)', 'scaleX(1)'], Infinity }, 20000);
        if (!isplay) {
            x.pause();
            banner();
            video.pause();
            clearInterval(timer);
        } else {
            banner();
            clearInterval(timer);
            timer = setInterval(visualTimer, interval);
        }

        // timer = setInterval(visualTimer, interval);
    });
    stop.addEventListener('click', (e) => {
        if (isplay) {
            video.pause();
            stopi.classList.replace('xi-pause', 'xi-play');
            clearInterval(timer);
            x.pause();
        } else {
            video.play();
            timer = setInterval(visualTimer, interval);
            stopi.classList.replace('xi-play', 'xi-pause');
            x.play();
        }
        isplay = !isplay;
    });
};
const staff = () => {
    const lis = getAll('#main .medical-staff .inner .staff .con > li');
    const parent = get('#main .medical-staff .inner .staff .con');
    const lisblur = getAll('#main .medical-staff .inner .staff .con li .con-box li');
    const btn = getAll('#main .medical-staff .inner .staff .con li .con-box li button');

    let first,
        last,
        timer = null,
        interval = 3000,
        cnt = 0;

    const staffTimer = () => {
        // cnt = cnt > 9 ? (cnt = 0) : cnt + 1;
        first = parent.firstElementChild;
        parent.append(first);
    };
    timer = setInterval(staffTimer, interval);

    lis.forEach((item, idx) => {
        item.addEventListener('mouseenter', (e) => {
            clearInterval(timer);
            item.style.top = '-55px';
            lisblur[idx].style.top = '0px';
        });
        item.addEventListener('mouseleave', (e) => {
            timer = setInterval(staffTimer, interval);
            item.style.top = '0px';
            lisblur[idx].style.top = '500px';
        });
    });
    btn.forEach((item, idx) => {
        item.addEventListener('mouseenter', (e) => {
            item.classList.add('on');
        });
        item.addEventListener('mouseleave', (e) => {
            item.classList.remove('on');
        });
    });
};
const therapy = () => {
    const lis = getAll('#main .therapy .inner .medical .con li');
    const lisA = getAll('#main .therapy .inner .medical .con li a');
    const strong = getAll('#main .therapy .inner .medical .con li strong');
    const p = getAll('#main .therapy .inner .medical .con li p');

    let cnt = 0,
        imgurl;

    lis.forEach((item, idx) => {
        item.addEventListener('mouseenter', (e) => {
            cnt = idx;
            lisA.forEach((item, dx) => {
                imgurl = `url(images/therapy${dx}-black.png)`;
                item.style.backgroundImage = imgurl;
                strong[dx].classList.remove('on');
                p[dx].classList.remove('on');
            });
            imgurl = `url(images/therapy${cnt}.png)`;
            lisA[cnt].style.backgroundImage = imgurl;
            strong[cnt].classList.add('on');
            p[cnt].classList.add('on');
        });
        item.addEventListener('mouseleave', (e) => {
            lisA[0].style.backgroundImage = `url(images/therapy0.png)`;
            lisA[1].style.backgroundImage = `url(images/therapy1.png)`;
            lisA[2].style.backgroundImage = `url(images/therapy2.png)`;
            lisA[3].style.backgroundImage = `url(images/therapy3.png)`;
            strong[cnt].classList.remove('on');
            p[cnt].classList.remove('on');
        });
    });
};
const hospital = () => {
    const next = get('#main .hospital .inner .next');
    const prev = get('#main .hospital .inner .prev');
    const lis = getAll('#main .hospital .inner .hidden-pic .hidden li');
    const pic = get('#main .hospital .inner .pic a');
    const bg = get('#main .hospital .bg');
    const hidden = get('#main .hospital .inner .hidden');

    let first,
        last,
        cnt = 0;
    lis[cnt].classList.add('onn');

    lis.forEach((item, idx) => {
        item.addEventListener('mouseenter', (e) => {
            lis.forEach((item, dx) => {
                item.classList.remove('on');
            });
            lis[idx].classList.add('on');
        });
        item.addEventListener('mouseleave', (e) => {
            item.classList.remove('on');
        });
        item.addEventListener('click', (e) => {
            cnt = idx;
            lis.forEach((item, dx) => {
                item.classList.remove('onn');
            });
            lis[cnt].classList.add('onn');
            pic.style.backgroundImage = `url(images/asan${cnt}.png)`;
            bg.style.backgroundImage = `url(images/asan${cnt}.png)`;
        });
    });

    next.addEventListener('click', (e) => {
        cnt = cnt > lis.length - 2 ? (cnt = 0) : cnt + 1;
        first = hidden.firstElementChild;
        hidden.append(first);
        lis.forEach((item, dx) => {
            item.classList.remove('onn');
        });
        pic.style.backgroundImage = `url(images/asan${cnt}.png)`;
        bg.style.backgroundImage = `url(images/asan${cnt}.png)`;
        lis[cnt].classList.add('onn');
    });
    prev.addEventListener('click', (e) => {
        cnt = cnt < 1 ? (cnt = lis.length - 1) : cnt - 1;
        last = hidden.lastElementChild;
        hidden.prepend(last);
        lis.forEach((item, dx) => {
            item.classList.remove('onn');
        });
        pic.style.backgroundImage = `url(images/asan${cnt}.png)`;
        bg.style.backgroundImage = `url(images/asan${cnt}.png)`;
        lis[cnt].classList.add('onn');
    });
};
const youtube = () => {
    const lis = getAll('#main .youtube .inner .rotate li');
    const rota = get('#main .youtube .inner .rotate');
    const gage = get('#main .youtube .inner .gage2');

    let cnt = 0,
        interval = 5000,
        x,
        first,
        last,
        timer = null;

    x = gage.animate({ transform: ['scaleX(0)', 'scaleX(1)'], Infinity }, 5000);

    const youtubeTimer = () => {
        first = rota.firstElementChild;
        rota.append(first);
        x = gage.animate({ transform: ['scaleX(0)', 'scaleX(1)'], Infinity }, 5000);
    };
    timer = setInterval(youtubeTimer, interval);
};

(() => {
    mainPage();
    staff();
    therapy();
    hospital();
    youtube();
})();
