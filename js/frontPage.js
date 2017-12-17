function strobeAnimate(){
    document.querySelector(".notAnimated").className = "animated strobe";

    setTimeout(function () {
      window.location.href = "mainPage.html"; //will redirect to your main page
   }, 7000); //will call the function after 2 secs.
  }