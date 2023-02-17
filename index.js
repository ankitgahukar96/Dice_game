// alert("A");

var randomNumber1 = Math.floor(Math.random()*6)+1;
console.log(randomNumber1);

var randomImg = "dice"+ randomNumber1 + ".png";
console.log(randomImg);

var randomImgSource1 = "img/"+ randomImg;

var img1 = document.querySelectorAll("img")[0];


img1.setAttribute("src",randomImgSource1);

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImgSource2 = "img/dice"+ randomNumber2+".png";

var img2 = document.querySelectorAll("img")[1].setAttribute("src", randomImgSource2);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML= "⛳Player 1 win!"; // window + (+) + (.)
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML= "⛳Player 2 win!";
}else{
    document.querySelector("h1").innerHTML= "draw!";
}
