import data from './data.js';

// movetopFunction
const top_btn = document.getElementById('top_btn');
const top_target = document.getElementById('top_btn-target');

top_btn.addEventListener('click',()=> {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
})
// movetopFunction //

// darkMode 
const darkmod = document.getElementById('darkmod');
const darkmod_cont = document.getElementById('darkmod-cont');
const mainbackground = document.getElementById('main');

darkmod_cont.addEventListener('click', ()=> {
    darkmod.classList.toggle('dkmod');
    darkmod_cont.classList.toggle('dkmod');
    mainbackground.classList.toggle('dkmod');
})
// darkMode //


//modal Function
let count = 0;
const modal_root = document.getElementById('modal-root');
const section = document.querySelectorAll('section > .items');
    for(let i=0;i<section.length; i ++){
        section[i].addEventListener('click',(event)=>{
            let parentElement = event.target.parentElement;
            console.log(parentElement.id);
            if(parentElement.nodeName === 'ARTICLE'){
                if(parentElement.id === 'zero'){
                   count = 0;
                } else if(parentElement.id === 'one'){
                   count = 1;
                } else if(parentElement.id === 'two'){
                    count = 2;
                } else if(parentElement.id === 'three'){
                    count = 3;
                } else if(parentElement.id === 'four'){
                    count = 4;
                } else if(parentElement.id === 'five'){
                    count = 5;
                } else if(parentElement.id === 'six'){
                    count = 6;
                } else if(parentElement.id === 'seven'){
                    count = 7;
                } else if(parentElement.id === 'eight'){
                    count = 8;
                } else if(parentElement.id === 'nine'){
                    count = 9;
                }  else if(parentElement.id === 'ten'){
                    count = 10;
                }  else if(parentElement.id === 'test'){
                    count = 11;
                }
            } else if (parentElement.nodeName === 'SECTION'){

            }
            section[i].addEventListener('click',Modal);
        })
    }

//Modal 동적 생성
function Modal() {
    event.preventDefault();
    let modal_background = document.createElement('div');
    let modal_cont = document.createElement('div');
    let img = document.createElement('img');
    modal_background.setAttribute('class','modal-background on');
    modal_cont.setAttribute('class','modal-cont');
    // 변경해야 되는 부분
    img.setAttribute('src',data[count].src);
    
    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    // 가변적인 부분
    h2.innerHTML = data[count].Title;
    p.innerHTML = data[count].content;
    div.append(h2,p);
    let modal_btn = document.createElement('button');
    modal_btn.setAttribute('id','modal-btn');
    let icon_close = document.createElement('img');
    icon_close.setAttribute('src','./src/assets/icon/icon-close.png')
    modal_btn.appendChild(icon_close);
    // Dom 생성하기
    modal_root.appendChild(modal_background).appendChild(modal_cont).append(img,div,modal_btn);  
}
    // 생성된 Modal 제거하기
    modal_root.addEventListener('click',()=>{
        const modal= document.querySelector('#modal-root');
        const modalChild = modal.querySelector('.modal-background');
        modalChild.remove();
    })
// modal Function //


// 모바일

let mobile_btnMore = document.getElementById('media-btn-hamburger');
const mobile_nav = document.getElementById('media-nav');
mobile_btnMore.addEventListener('click',()=>{
    mobile_nav.classList.toggle('on');
})
const mobile_nav_close =document.getElementById('media-nav-close');
mobile_nav_close.addEventListener('click',()=>{
    mobile_nav.classList.remove('on');
})
