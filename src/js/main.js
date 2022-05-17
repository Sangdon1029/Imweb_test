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
const items = document.querySelectorAll('.items');
const nav_item = document.querySelectorAll('.nav-items');

darkmod_cont.addEventListener('click', ()=> {
    darkmod.classList.toggle('dkmod');
    darkmod_cont.classList.toggle('dkmod');
    mainbackground.classList.toggle('dkmod');
    items.forEach(el => { el.classList.toggle('dkmod')});
    nav_item.forEach(el => { el.classList.toggle('dkmod')});
})
// darkMode //


//  -- modal Function -- 

let count = 0;
const modal_root = document.getElementById('modal-root');
const section = document.querySelectorAll('section > .items');
    for(let i=0;i<section.length; i ++){
        // 데스크탑 고려 
        section[i].addEventListener('click',(el)=>{
            let parentElement = el.target.parentElement;
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
                return ;
            }
            section[i].addEventListener('click',Modal(i));
        })
    }
    
    // 모바일 고려
    section.forEach(el => {
            el.addEventListener('touchstart', ()=>{
                    let parentElement = el.target.parentElement;
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
                        return ;
                    }
                section[i].addEventListener('click',Modal(i));
            });
    });
// Modal 동적 생성
function Modal() {
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
    icon_close.setAttribute('src','./src/assets/icon/icon-close.png');
    icon_close.setAttribute('class','target');
    modal_btn.appendChild(icon_close);
    // Dom 생성하기
    modal_root.appendChild(modal_background).appendChild(modal_cont).append(img,div,modal_btn);  
}

// 생성된 Modal 제거하기
const modal= document.querySelector('#modal-root');
modal.addEventListener('click',(el)=>{
    const modalChild = modal.querySelector('.modal-background');
    const modal_close = modal.querySelector('#modal-btn');
    const img_close = modal.querySelector('.target');
    if(el.target === modal_close || el.target === img_close) {
        modalChild.remove();
    }
})
//  --  modal Function -- //


// 모바일
// 모바일 더보기 메뉴
const mobile_btnMore = document.getElementById('media-btn-hamburger');
const mobile_nav = document.getElementById('media-nav');
mobile_btnMore.addEventListener('click',()=>{
    mobile_nav.classList.toggle('on');
})
// 모바일 더보기 메뉴 닫기버튼
const mobile_nav_close =document.getElementById('media-nav-close');
mobile_nav_close.addEventListener('click',()=>{
    mobile_nav.classList.remove('on');
})
// 모바일 다크모드 
const mobile_dark_cont = document.getElementById('media-darkmod-cont');
const mobile_dark = document.getElementById('media-darkmod');
document.addEventListener('touchstart',(el)=> {
    if(el.target.id === "media-darkmod-cont" || el.target.id === "media-darkmod" ) {
        mobile_dark_cont.classList.toggle('dkmod');
        mobile_dark.classList.toggle('dkmod');
        mainbackground.classList.toggle('dkmod');
        items.forEach(el => { el.classList.toggle('dkmod')});
        nav_item.forEach(el => { el.classList.toggle('dkmod')});
    }
})

