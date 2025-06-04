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

(() => {
    mainPage();
})();
