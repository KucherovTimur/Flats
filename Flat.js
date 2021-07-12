console.log(231343);
let gallery = document.getElementsByClassName("gallery")[0];
let inf = document.getElementsByClassName('inf')[0];
let map = document.getElementsByTagName("iframe")[0];

map.style.height = gallery.offsetHeight - inf.offsetHeight - 20 + "px";
console.log();

