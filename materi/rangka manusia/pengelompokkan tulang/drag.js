/*tempat drop*/
function allowDrop(ev) {
  ev.preventDefault();
}

/*fungsi drag*/
function drag(ev) {
  ev.dataTransfer.setData("Text", ev.target.id);
}

/*fungsi drop*/
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

/*Cek Jawaban Drag n Drop*/
function cekReal(){
  if (document.getElementById("div1").children.length && document.getElementById("div2").children.length
  && document.getElementById("div3").children.length &&  document.getElementById("div4").children.length &&
  document.getElementById("div5").children.length && document.getElementById("div6").children.length
  && document.getElementById("div7").children.length &&  document.getElementById("div8").children.length &&  document.getElementById("div8").children.length 
  &&  document.getElementById("div9").children.length && document.getElementById("div10").children.length && document.getElementById("div11").children.length
  >0
  ){
    if (document.getElementById("div1").children.length > 0) {
      if(document.getElementById("div1").children[0].id=="drag1"){
        document.getElementById("ket1").innerHTML = "<img src='../img/benar.jpg' style='width:30px;height:30px;'>";
      } else{
        document.getElementById("ket1").innerHTML = "<img src='../img/salah.jpg' style='width:30px;height:30px;'>";
      }
    }
  
    if (document.getElementById("div2").children.length > 0) {
      if(document.getElementById("div2").children[0].id=="drag2"){
        document.getElementById("ket2").innerHTML = "<img src='../img/benar.jpg' style='width:30px;height:30px;'>";
      } else{
        document.getElementById("ket2").innerHTML = "<img src='../img/salah.jpg' style='width:30px;height:30px;'>";
      }
    }
  
    if (document.getElementById("div3").children.length > 0) {
      if(document.getElementById("div3").children[0].id=="drag3"){
        document.getElementById("ket3").innerHTML = "<img src='../img/benar.jpg' style='width:30px;height:30px;'>";
      } else{
        document.getElementById("ket3").innerHTML = "<img src='../img/salah.jpg' style='width:30px;height:30px;'>";
      }
    }
  
    if (document.getElementById("div4").children.length > 0) {
      if(document.getElementById("div4").children[0].id=="drag4"){
        document.getElementById("ket4").innerHTML = "<img src='../img/benar.jpg' style='width:30px;height:30px;'>";
      } else{
        document.getElementById("ket4").innerHTML = "<img src='../img/salah.jpg' style='width:30px;height:30px;'>";
      }
    }
  
    if (document.getElementById("div5").children.length > 0) {
      if(document.getElementById("div5").children[0].id=="drag5"){
        document.getElementById("ket5").innerHTML = "<img src='../img/benar.jpg' style='width:30px;height:30px;'>";
      } else{
        document.getElementById("ket5").innerHTML = "<img src='../img/salah.jpg' style='width:30px;height:30px;'>";
      }
    }
  
    if (document.getElementById("div6").children.length > 0) {
      if(document.getElementById("div6").children[0].id=="drag6"){
        document.getElementById("ket6").innerHTML = "<img src='../img/benar.jpg' style='width:30px;height:30px;'>";
      } else{
        document.getElementById("ket6").innerHTML = "<img src='../img/salah.jpg' style='width:30px;height:30px;'>";
      }
    }
  
    if (document.getElementById("div7").children.length > 0) {
      if(document.getElementById("div7").children[0].id=="drag7"){
        document.getElementById("ket7").innerHTML = "<img src='../img/benar.jpg' style='width:30px;height:30px;'>";
      } else{
        document.getElementById("ket7").innerHTML = "<img src='../img/salah.jpg' style='width:30px;height:30px;'>";
      }
    }
  
    if (document.getElementById("div8").children.length > 0) {
      if(document.getElementById("div8").children[0].id=="drag8"){
        document.getElementById("ket8").innerHTML = "<img src='../img/benar.jpg' style='width:30px;height:30px;'>";
      } else{
        document.getElementById("ket8").innerHTML = "<img src='../img/salah.jpg' style='width:30px;height:30px;'>";
      }
    }
  
    if (document.getElementById("div9").children.length > 0) {
      if(document.getElementById("div9").children[0].id=="drag9"){
        document.getElementById("ket9").innerHTML = "<img src='../img/benar.jpg' style='width:30px;height:30px;'>";
      } else{
        document.getElementById("ket9").innerHTML = "<img src='../img/salah.jpg' style='width:30px;height:30px;'>";
      }
    }

    if (document.getElementById("div10").children.length > 0) {
      if(document.getElementById("div10").children[0].id=="drag10"){
        document.getElementById("ket10").innerHTML = "<img src='../img/benar.jpg' style='width:30px;height:30px;'>";
      } else{
        document.getElementById("ket10").innerHTML = "<img src='../img/salah.jpg' style='width:30px;height:30px;'>";
      }
    }

    if (document.getElementById("div11").children.length > 0) {
      if(document.getElementById("div11").children[0].id=="drag11"){
        document.getElementById("ket11").innerHTML = "<img src='../img/benar.jpg' style='width:30px;height:30px;'>";
      } else{
        document.getElementById("ket11").innerHTML = "<img src='../img/salah.jpg' style='width:30px;height:30px;'>";
      }
    }
  }else{
    window.alert("LENGKAPI JAWABAN TERLEBIH DAHULU")
  }
}
