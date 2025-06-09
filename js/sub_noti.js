const get = (tg) => document.querySelector(tg);
const getAll = (tg) => document.querySelectorAll(tg);

const $num = getAll('#container .inner .content .page ul .num')
const $a = getAll('#container .inner .content .page ul .num a')
const $prev = get('#container .inner .content .page ul .prev');
const $next = get('#container .inner .content .page ul .next');


$num.forEach((item, idx) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        $a.forEach((item) => {
            item.classList.remove('on');
        })
        console.log($a)
        $a[idx].classList.add('on')
    })
});

$prev.addEventListener('click', (e) => {
  e.preventDefault();
});

$next.addEventListener('click', (e) => {
  e.preventDefault();
});