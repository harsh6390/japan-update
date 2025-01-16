$(document).ready(function() {
   var audioElement = document.createElement('audio');
   audioElement.setAttribute('src', '../jp.mp3');

   audioElement.addEventListener('ended', function() {
       this.play();
   }, false);


    $('#mycanvas').click(function() {
       audioElement.play();

   });

});