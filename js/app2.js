'use atrict'
var videoElem = document.getElementById('vid');
var vidB = document.getElementById('vidButton');

vidButton.addEventListener('click', function(){
    videoElem.volume = Math.random();
    videoElem.autoplay = true;  
});