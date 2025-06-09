const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

const chks = getAll('input[type=checkbox]');
const all = get('input[name=all]');
const list = get('.join-form .form-group .family .list');
const title = get('.join-form .form-group .family .title');
const icon = get('.join-form .form-group .family i');

const popUp = () => {
    const $btn = get('.join .form-group .addr');
    const $popup = get('.join .form-group .popup');
    const $close = get('.join .form-group .popup .close');
    const $bg = get('.form-group .bg');

    const show = (e) => {
        e.preventDefault();
        $popup.classList.add('on');
        $bg.classList.add('on');
    };

    const hide = () => {
        $popup.classList.remove('on');
        $bg.classList.remove('on');
    };
    $btn.addEventListener('click', show);
    $close.addEventListener('click', hide);
    // $bg.addEventListener('click', hide);
};

popUp();

const emailSelect = get('#email_domain');

emailSelect.addEventListener('click', (e) => {
    emailSelect.classList.toggle('rotate');
});

emailSelect.addEventListener('blur', () => {
    emailSelect.classList.remove('rotate');
});

all.addEventListener('input', (e) => {
    chks.forEach((item, idx) => {
        item.checked = e.target.checked;
    });
});

const btn = get('.form-group .check-id');
const idInput = get('input[name=userid]');

let isChecked = false;

btn.addEventListener('click', (e) => {
    e.preventDefault();
    isChecked = !isChecked;
    if (isChecked) {
        idInput.value = '';
        idInput.placeholder = '사용 가능한 아이디입니다.';
        idInput.classList.add('placeholder-red');
    } else {
        idInput.placeholder = '아이디';
        idInput.classList.remove('placeholder-red');
    }
});
