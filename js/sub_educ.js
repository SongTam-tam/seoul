const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

const $cate = get('#container .content .srch-right .cate');
const $cateli = getAll('#container .content .srch-right .cate li');
const $select = get('#container .content .srch-right .select');
const $text = get('#container .content .srch-right .select span');
console.log($text);
const $icon = get('#container .content .srch-right .select i');
let sel = $select.textContent;

////// 제공부서 선택
let isOpen = false;
// 처음 select을 누르면 cate에 on이 붙음
$select.addEventListener('click', () => {
    isOpen = $cate.classList.contains('on');
    if (isOpen) {
        // on 있을 때(펼쳐졌을 때) 누르면 높이 0이 됨
        $cate.style.border = 'none';
        $select.classList.remove('on');
        $icon.classList.replace('xi-angle-up-min', 'xi-angle-down-min');
    } else {
        $icon.classList.replace('xi-angle-down-min', 'xi-angle-up-min');
    }
    $cate.classList.toggle('on');
});

$cateli.forEach((item, idx) => {
    item.addEventListener('click', () => {
        let pick = item.textContent;
        $cateli.forEach((item) => (item.style.backgroundColor = '#ffffff'));
        item.style.backgroundColor = '#f5f5f5';
        $text.textContent = pick;

        $icon.classList.remove('xi-angle-up-min');
        $icon.classList.add('xi-angle-down-min');
        $cate.classList.remove('on');
    });
});

////// 페이징
const $num = getAll('#container .inner .content .page ul .num')
const $a = getAll('#container .inner .content .page ul .num a')
const $prev = get('#container .inner .content .page ul .prev');
const $next = get('#container .inner .content .page ul .next');
const $reco = getAll('#container .inner .content .offer .reco li a')
const $team = getAll('#container .inner .content .ed-wrap .ed-list li .list-in .about .team a')
const $img = getAll('#container .inner .content .ed-wrap .ed-list li .list-in > a > img')
const $down = getAll('#container .inner .content .ed-wrap .ed-list li .list-in .down a')

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

$reco.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
  });
});

$team.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
  });
});

$img.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
  });
});

$down.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
  });
});

