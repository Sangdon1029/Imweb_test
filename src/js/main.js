// movetopFunction
let top_btn = document.getElementById('top_btn');
let top_target = document.getElementById('top_btn-target');

top_btn.addEventListener('click',()=> {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
})
// movetopFunction //
let darkmod = document.getElementById('darkmod');
let darkmod_cont = document.getElementById('darkmod-cont');

darkmod_cont.addEventListener('click', ()=> {
    darkmod.classList.toggle('dkmod');
    darkmod_cont.classList.toggle('dkmod');
})