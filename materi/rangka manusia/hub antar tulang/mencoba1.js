//Soal latihan 1
var s1=document.getElementById("s1");
var s2=document.getElementById("s2");
var s3=document.getElementById("s3");
var s4=document.getElementById("s4");

var jawaban1=0;var jawaban2=0;var jawaban3=0;var jawaban4=0;var jawaban5=0;
function cek1(){

    
    if(document.getElementById("soal1").checked) {
        s1.style.display="";
        $("#jawabanbenar1").show(200);
        $("#jawabansalah").hide(200);
        jawaban1=1;
    } else{
        s1.style.display="none";
    }
    if(document.getElementById("soal2").checked) {
        s2.style.display="";
        $("#jawabanbenar1").hide(200);
        $("#jawabansalah").show(200);

        jawaban1=2;
    } else{
        s2.style.display="none";
    }
    if(document.getElementById("soal3").checked) {
        s3.style.display="";
        $("#jawabanbenar1").hide(200);
        $("#jawabansalah").show(200);
        jawaban1=2;
    } else{
        s3.style.display="none";
        
    }
    if(document.getElementById("soal4").checked) {
        s4.style.display="";
        $("#jawabanbenar1").hide(200);
        $("#jawabansalah").show(200);
        jawaban1=2;
    }  else{
        s4.style.display="none";
    }

}

$(function () {
    $('[data-toggle="popover"]').popover('show')
  })

function allowDrop(ev) {
    ev.preventDefault();
}
  
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
  
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

let contoh1a = document.getElementById('contoh1a');
let conoth1b = document.getElementById('contoh1b');
let contoh1c = document.getElementById('contoh1c');
let contoh1d = document.getElementById('contoh1d');

let contoh2a = document.getElementById('contoh2a');
let conoth2b = document.getElementById('contoh2b');
let contoh2c = document.getElementById('contoh2c');
let contoh2d = document.getElementById('contoh2d');

let contoh3a = document.getElementById('contoh3a');
let conoth3b = document.getElementById('contoh3b');
let contoh3c = document.getElementById('contoh3c');
let contoh3d = document.getElementById('contoh3d');

let contoh4a = document.getElementById('contoh4a');
let conoth4b = document.getElementById('contoh4b');
let contoh4c = document.getElementById('contoh4c');
let contoh4d = document.getElementById('contoh4d');

const benar = '<span style="color : green;">Benar</span>'
const salah = '<span style="color : red;">Salah</span>'

const cekContoh1 = document.querySelector('.cekContoh1');
const cekContoh2 = document.querySelector('.cekContoh2');
const cekContoh3 = document.querySelector('.cekContoh3');
const cekContoh4 = document.querySelector('.cekContoh4');

function cekContoh1a() {
    contoh1b.disabled = true;
    contoh1c.disabled = true;
    contoh1d.disabled = true;
    cekContoh1.innerHTML = benar;
}
function cekContoh1b() {
    contoh1a.disabled = true;
    contoh1c.disabled = true;
    contoh1d.disabled = true;
    cekContoh1.innerHTML = salah;
}
function cekContoh1c() {
    contoh1a.disabled = true;
    contoh1b.disabled = true;
    contoh1d.disabled = true;
    cekContoh1.innerHTML = salah;
}
function cekContoh1d() {
    contoh1a.disabled = true;
    contoh1b.disabled = true;
    contoh1c.disabled = true;
    cekContoh1.innerHTML = salah;
}


function cekContoh2a() {
    contoh2b.disabled = true;
    contoh2c.disabled = true;
    contoh2d.disabled = true;
    cekContoh2.innerHTML = salah;
}
function cekContoh2b() {
    contoh2a.disabled = true;
    contoh2c.disabled = true;
    contoh2d.disabled = true;
    cekContoh2.innerHTML = salah;
}
function cekContoh2c() {
    contoh2a.disabled = true;
    contoh2b.disabled = true;
    contoh2d.disabled = true;
    cekContoh2.innerHTML = salah;
}
function cekContoh2d() {
    contoh2a.disabled = true;
    contoh2b.disabled = true;
    contoh2c.disabled = true;
    cekContoh2.innerHTML = benar;
}

function cekContoh3a() {
    contoh3b.disabled = true;
    contoh3c.disabled = true;
    contoh3d.disabled = true;
    cekContoh3.innerHTML = salah;
}
function cekContoh3b() {
    contoh3a.disabled = true;
    contoh3c.disabled = true;
    contoh3d.disabled = true;
    cekContoh3.innerHTML = benar;
}
function cekContoh3c() {
    contoh3a.disabled = true;
    contoh3b.disabled = true;
    contoh3d.disabled = true;
    cekContoh3.innerHTML = salah;
}
function cekContoh3d() {
    contoh3a.disabled = true;
    contoh3b.disabled = true;
    contoh3c.disabled = true;
    cekContoh3.innerHTML = salah;
}

function cekContoh4a() {
    contoh4b.disabled = true;
    contoh4c.disabled = true;
    contoh4d.disabled = true;
    cekContoh4.innerHTML = salah;
}
function cekContoh4b() {
    contoh4a.disabled = true;
    contoh4c.disabled = true;
    contoh4d.disabled = true;
    cekContoh4.innerHTML = salah;
}
function cekContoh4c() {
    contoh4a.disabled = true;
    contoh4b.disabled = true;
    contoh4d.disabled = true;
    cekContoh4.innerHTML = benar;
}
function cekContoh4d() {
    contoh4a.disabled = true;
    contoh4b.disabled = true;
    contoh4c.disabled = true;
    cekContoh4.innerHTML = salah;
}
function reset() {
    contoh1a.disabled = false;
    contoh1b.disabled = false;
    contoh1c.disabled = false;
    contoh1d.disabled = false;
    contoh2a.disabled = false;
    contoh2b.disabled = false;
    contoh2c.disabled = false;
    contoh2d.disabled = false;
    contoh3a.disabled = false;
    contoh3b.disabled = false;
    contoh3c.disabled = false;
    contoh3d.disabled = false;
    contoh4a.disabled = false;
    contoh4b.disabled = false;
    contoh4c.disabled = false;
    contoh4d.disabled = false;
    contoh1a.checked = false;
    contoh1b.checked = false;
    contoh1c.checked = false;
    contoh1d.checked = false;
    contoh2a.checked = false;
    contoh2b.checked = false;
    contoh2c.checked = false;
    contoh2d.checked = false;
    contoh3a.checked = false;
    contoh3b.checked = false;
    contoh3c.checked = false;
    contoh3d.checked = false;
    contoh4a.checked = false;
    contoh4b.checked = false;
    contoh4c.checked = false;
    contoh4d.checked = false;
    cekContoh1.innerHTML = ' ';
    cekContoh2.innerHTML = ' ';
    cekContoh3.innerHTML = ' ';
    cekContoh4.innerHTML = ' ';
}

//memunculkan class setelah vidio selesai
$(document).ready(function(){
    $('.latihanhide').hide();

  document.getElementById('video').addEventListener('ended',myHandler,false);

  function myHandler() {
    $('.sebelum').hide(100);
    $('.latihanhide').show(100);
  }
  
});

