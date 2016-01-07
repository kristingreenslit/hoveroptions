window.onload = function(){

 var allPhotos = document.getElementsByClassName('circles');
 var i;
  for (i = 0; i < allPhotos.length; i++) {
  	allPhotos[i].style.display = 'block';
  };

  var photoOne = document.getElementById('circle1');
  photoOne.addEventListener('mouseover', changePhoto);
  photoOne.addEventListener('mouseout', originalPhoto)

  function changePhoto(){
  	photoOne.style.backgroundImage = "url('https://unsplash.it/150/150')";
  }

  function originalPhoto(){
  	photoOne.style.backgroundImage = "url('images/picture1.jpeg')";
  }

};

