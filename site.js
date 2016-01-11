window.onload = function(){

 // var allPhotos = document.getElementsByClassName('circles');
 // var i;
 //  for (i = 0; i < allPhotos.length; i++) {
 //   allPhotos[i].style.display = 'block';
 //  };

 //  var photoOne = document.getElementById('circle1');
 //  photoOne.addEventListener('mouseover', changePhoto);
 //  photoOne.addEventListener('mouseout', originalPhoto)

 //  function changePhoto(){
 //   photoOne.style.backgroundImage = "url('images/picture7.jpeg')";
 //  }

 //  function originalPhoto(){
 //   photoOne.style.backgroundImage = "url('images/picture1.jpeg')";
 //  }

 function fadeInEffect() {
    var fadeTarget = document.getElementById("circle1");
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity < 0.1) {
            clearInterval(fadeEffect);
        } else {
            fadeTarget.style.opacity -= 0.1;
        }
    }, 200);
}

document.getElementById("circle1").addEventListener('mouseover', fadeInEffect);

};

