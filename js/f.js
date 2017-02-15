// Get the modal
var modal = document.getElementById('myModal');


// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg1');
var img = document.getElementById('myImg2');
var img = document.getElementById('myImg3');
var img = document.getElementById('myImg4');
var img = document.getElementById('myImg5');
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var modalImg = document.getElementById("img02");
var modalImg = document.getElementById("img03");
var modalImg = document.getElementById("img04");
var modalImg = document.getElementById("img05");
var modalImg = document.getElementById("img06");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}