import data from './data.js';

// movetopFunction
const top_btn = document.getElementById('top_btn');
const top_target = document.getElementById('top_btn-target');

top_btn.addEventListener('click',()=> {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
})
// movetopFunction //

const darkmod = document.getElementById('darkmod');
const darkmod_cont = document.getElementById('darkmod-cont');
const btn = document.getElementsByTagName('button');
const mainbackground = document.getElementById('main');
console.log(data[1]);
darkmod_cont.addEventListener('click', ()=> {
    darkmod.classList.toggle('dkmod');
    darkmod_cont.classList.toggle('dkmod');
    // btn.classList.toggle('dkmod');
    mainbackground.classList.toggle('dkmod');
})

//modal Function

const modal = document.getElementById('modal');
const modal_btn = document.getElementById('modal-btn');

    modal_btn.addEventListener('click',()=>{
        modal.style.display = 'none';
    })

// modal Function //