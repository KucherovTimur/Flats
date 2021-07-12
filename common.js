let modal = document.getElementsByClassName("modal")[0];
let request = document.getElementsByClassName("request")[0];

request.onclick = function(){
    console.log(14332);
    modal.style.transform = "translateY(0) scale(1)";
}

modal.onclick = function(){
    console.log(735835);
    modal.style.transform = "translateY(100%) scale(0)"
}

modal.children[0].onclick = function(event){
    event.stopPropagation();
}
