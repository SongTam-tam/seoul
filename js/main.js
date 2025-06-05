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
        imgurl = `videos/seoulAsan${cnt}.mp4`;
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
        interval = 5000,
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

(() => {
    mainPage();
    staff();
    therapy();
})();
