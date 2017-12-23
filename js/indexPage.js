function strobeAnimate(){
    document.querySelector(".notAnimated").className = "animated strobe";

    setTimeout(function () {
      window.location.href = "aboutPage.html"; //will redirect to your about page
   }, 7000); //will call the function after 7 secs.
  }