function openSearch() {
  document.getElementById("myOverlay").style.display = "block";


}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}

function night(){
  var element = document.body;
  element.classList.toggle("dark-mode");
  var q2 =  document.getElementById("frankvault");
  var q1 =  document.getElementById("q1");

q2.classList.toggle('frankvault_dark');
q1.classList.toggle('q1_dark');


}





function menu(){
  const cotm4 = document.getElementById("button-container");

  console.log(cotm4);
  const mnu1 = cotm4.querySelectorAll('.o1');
console.log("$mnu1 dsdfddfs");

  for(var i4 = 0; i4 < mnu1.length; i4++) {
      console.log("dddd");
      mnu1[i4].classList.toggle('o1_on');


     }


}



if(window.innerWidth < 768){

document.addEventListener("scroll", (event) => {
  document.getElementById("num").style.top="0";
  document.getElementById("bl3").style.backgroundColor=" rgba(0, 0, 0, 0.7)";
});
}