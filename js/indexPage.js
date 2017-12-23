function strobeAnimate(){
    document.querySelector(".notAnimated").className = "animated strobe";

    setTimeout(function () {
      window.location.href = "aboutPage.html"; //will redirect to your main page
   }, 7000); //will call the function after 2 secs.
  }