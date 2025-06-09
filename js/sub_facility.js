const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

const tabBar = () => {
    const $lis = getAll('.sub-tab .tab li');
    const $boxs = getAll('.sub-tab .con-box .box');

    let cnt = 0;
    // let box = $boxs[cnt];

    $lis.forEach((liEl, idx) => {
        liEl.addEventListener('click', (e) => {
            cnt = idx;
            let tg = e.currentTarget;
            $lis.forEach((item) => item.classList.remove('on'));
            $boxs.forEach((item) => item.classList.remove('on'));
            tg.classList.add('on');
            $boxs[cnt].classList.add('on');

            // box = $boxs[cnt];
        });
    });

    $boxs.forEach((box) => {
        const $imgBoxes = box.querySelectorAll('.image-box');
        $imgBoxes.forEach((imageBox) => {
            const $btns = imageBox.querySelectorAll('.btn .dot');
            const $img = imageBox.querySelector('img');

            if (!$img || $btns.length === 0) return;
            $btns.forEach((btn) => {
                btn.addEventListener('click', () => {
                    const newImg = btn.dataset.img;
                    if (!newImg) return;
                    if ($img.getAttribute('src') !== `./images/${newImg}`) {
                        $img.setAttribute('src', `images/${newImg}`);
                        $btns.forEach((b) => b.classList.remove('on'));
                        btn.classList.add('on');
                    }
                });
            });
        });
    });
};

(() => {
    tabBar();
})();
