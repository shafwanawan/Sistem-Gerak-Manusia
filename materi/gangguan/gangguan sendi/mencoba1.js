//Soal latihan 1
var s1=document.getElementById("s1");
var s2=document.getElementById("s2");
var s3=document.getElementById("s3");
var s4=document.getElementById("s4");

var jawaban1=0;var jawaban2=0;var jawaban3=0;var jawaban4=0;var jawaban5=0;
function cek1(){

    
    if(document.getElementById("soal1").checked) {
        s1.style.display="";
        $("#jawabanbenar1").hide(200);
        $("#jawabansalah").show(200);
        jawaban1=1;
    } else{
        s1.style.display="none";
    }
    if(document.getElementById("soal2").checked) {
        s2.style.display="";
        $("#jawabanbenar1").show(200);
        $("#jawabansalah").hide(200);

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