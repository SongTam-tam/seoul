const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);
const random = get('#container .inner .content .mail fieldset .form-veri .switch .random');
const btn = get('#container .inner .content .mail fieldset .form-veri .switch button');
const submit = get('#container .inner .content .mail fieldset .submit')

//// 자동등록방지 랜덤 번호

let i = Math.ceil(Math.random() * 1000000);
console.log(i);

random.textContent = i;

btn.addEventListener('click', (e) => {
    e.preventDefault();
    random.textContent = Math.ceil(Math.random() * 1000000);
});

submit.addEventListener('click', (e) => {
  e.preventDefault();
});
