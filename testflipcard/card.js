let carte=document.getElementById("carte");
console.log(carte);

carte.addEventListener("click",flipcard);
function flipcard(){
    carte.classList.add("active");
}