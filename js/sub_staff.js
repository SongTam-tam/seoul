import { get, getAll } from './get.js';

const subMedicalStaff = () => {
    const limore = getAll('.medical-staff .con li:nth-child(2) p:nth-child(4)');
    const more = get('.medical-staff .btn-more');
    const medical = get('.medical-staff');

    const medicalData = [
        {
            id: 1,
            imgurl: './images/staff_img0.png',
            span: '심장내과',
            name: '강덕현',
            p: `  승모판질환,심내막염,삼첨판부전증,판막질환클리닉<br />
                                            ,Onestop Clinic(초진만),심잡음(murmur)`,
        },
        {
            id: 2,
            imgurl: './images/staff_img1.png',
            span: '가정의학과',
            name: '조홍준',
            p: ` 성인병 관리, 건강증진, 건강검진 이상소견의 확진, 금연
                                            클리닉,<br />
                                            평생건강관리 클리닉(회원제),암예방 클리닉(회원제)`,
        },
        {
            id: 3,
            imgurl: './images/staff_img2.png',
            span: '신경외과',
            name: '송상우',
            p: `    성인병 관리, 건강증진, 건강검진 이상소견의 확진, 금연
                                            클리닉,<br />
                                            평생건강관리 클리닉(회원제),암예방 클리닉(회원제)`,
        },
        {
            id: 4,
            imgurl: './images/staff_img3.png',
            span: '이비인후과',
            name: '정영호',
            p: `       뇌종양,원발성뇌종양(교모세포종을 포함한
                                            신경상피세포의<br />
                                            종양,수막종,신경초종) ,뇌전이암,감마나이프`,
        },
    ];

    let x,
        cnt = 0,
        ct = 0;

    limore.forEach((item, idx) => {
        item.addEventListener('mouseenter', (e) => {
            cnt = idx;
            limore[cnt].classList.add('on');
        });
        item.addEventListener('mouseleave', (e) => {
            cnt = idx;
            limore[cnt].classList.remove('on');
        });
    });
    more.addEventListener('mouseenter', (e) => {
        more.classList.add('on');
    });
    more.addEventListener('mouseleave', (e) => {
        more.classList.remove('on');
    });
    more.addEventListener('click', (e) => {
        for (let i = 0; i < 4; i++) {
            ct++;
            if (ct < 12) {
                const ul = document.createElement('ul');
                ul.innerHTML = `
             <li>
                                        <a href="#"
                                            ><img src="${medicalData[i].imgurl}" alt="의료진"
                                        /></a>
                                    </li>
                                    <li>
                                        <span>${medicalData[i].span}</span>
                                        <strong>${medicalData[i].name}</strong>
                                        <p>
                                            ${medicalData[i].p}
                                        </p>
                                        <p>자세히 보기</p>
                                    </li>`;
                ul.classList.add('con');
                medical.append(ul);
            } else {
                alert('실행할수없습니다');
            }
        }
    });
};

(() => {
    subMedicalStaff();
})();
