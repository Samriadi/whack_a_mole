const tanah = document.querySelectorAll('.tanah');
const tikus = document.querySelectorAll('.tikus');
const score = document.querySelector('.score');

let tsebelum;
let selesai; 
let skor;

function randomTanah(tanah){
    const trandom = Math.floor(Math.random() * tanah.length);
    const t = tanah[trandom];
    if(t == tsebelum){
        return randomTanah(tanah);
    }
    tsebelum = t;
    return t; 
}

function randomWaktu(min, max){
    return Math.round(Math.random() * (max - min) + min);
}

function showTikus(tanah){
    const t = randomTanah(tanah);  
    const w = randomWaktu(300, 1000);
    t.classList.add('muncul');
    setTimeout(() => {
        t.classList.remove('muncul');
        if(!selesai) showTikus(tanah);
    }, w);
}

function mulai(){
    selesai = false;
    skor = 0;
    score.textContent = 0;
    showTikus(tanah);
    setTimeout(() => {
        selesai = true;
    }, 10000);
}

function pukul(){
    skor++;
    this.parentNode.classList.remove('muncul');
    score.textContent = skor;
}

tikus.forEach(t => {
    t.addEventListener('click', pukul);
    console.log(this);    
});