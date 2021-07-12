let carouselLeft = document.getElementById("carouselLeft");
let carouselRight = document.getElementById("carouselRight");
let slider = document.querySelector(".images");
let distance = 0
let commentLeft = document.getElementById("commentLeft");
let commentRight = document.getElementById("commentRight");
let pairs = document.getElementsByClassName("pair");
let moreButton = document.getElementById('moreButton');
let flatTypes = ['квартира', "коттедж", "иглу", "шалаш"];
flatTypes = [
    ['Квартира1.jpeg', 'пентхаус', 'описания', '2 кровати', '2 человека']
]
let flats = document.getElementsByClassName('flats')[0];
let counter = 0;

carouselLeft.onclick = function(){
    distance = distance + 100;
    if (distance > 0){
        distance = (slider.children.length - 1) * -100;
    }
    slider.style.transform = "translateX(" + distance + "%)";
    console.log(distance);
}

carouselRight.onclick = function(){
    distance = distance - 100;
    console.log(distance);
    distance = distance%(slider.children.length * 100);
    slider.style.transform = "translateX(" + distance + "%)";

}

commentRight.onclick = function(){
    let activePair = document.getElementsByClassName("activePair")[0];
    console.log(activePair);
    let nextPair;
    if (activePair.nextElementSibling.classList[0]=="pair"){
        nextPair = activePair.nextElementSibling;
    }
    else{
        nextPair = pairs[0];
    }
    activePair.classList.remove("activePair");
    setTimeout(function(){
        nextPair.classList.add("activePair")
    },600);
}

commentLeft.onclick = function(){
    let activePair = document.getElementsByClassName("activePair")[0];
    let prevPair;
    if (activePair.previousElementSibling){
        prevPair = activePair.previousElementSibling;
    }
    else{
        prevPair = pairs[pairs.length - 1];
    }
    activePair.classList.remove('activePair')
    prevPair.classList.add("activePair")
}

moreButton.onclick = function(){
    for(let i = 0; i <2; i = i + 1){
        console.log(i);
        let div = document.createElement('div');
    div.innerHTML = flatTypes[i + counter];
    // document.body.appendChild(div)
    flats.insertBefore(div, moreButton);
    }
    counter = counter + 2;
    if (counter >= flatTypes.length){
        moreButton.style.display = 'none';
    }
}



