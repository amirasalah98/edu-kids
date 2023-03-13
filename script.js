function makeSlidershow(slidesId){
    const slides = document.getElementById(slidesId)
    const slidesInner = slides.querySelector('.slides-inner')
    const images= slidesInner.querySelectorAll('img')

    let index=0;
    setInterval( function(){
index+=1
if( index===images.length){
    index=0
}
slidesInner.style.transform=`translate3d(${index * -100}%, 0, 0)`
    },2000)
}
makeSlidershow('slides')
// 
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  