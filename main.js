function openAbout(evt, aboutTab) {
    // Declare all variables
    var i, aboutcontent, aboutlinks;
  
    // Get all elements with class="aboutcontent" and hide them
    aboutcontent = document.getElementsByClassName("about-contents");
    for (i = 0; i < aboutcontent.length; i++) {
      aboutcontent[i].style.display = "none";
    }
  
    // Get all elements with class="aboutlinks" and remove the class "active"
    aboutlinks = document.getElementsByClassName("about-links");
    for (i = 0; i < aboutlinks.length; i++) {
      aboutlinks[i].className = aboutlinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(aboutTab).style.display = "block";
    evt.currentTarget.className += " active";
  }

function openPortafolio(evt, portafolioTab) {
    // Declare all variables
    var i, portafoliocontent, portafoliolinks;
  
    // Get all elements with class="portafoliocontent" and hide them
    portafoliocontent = document.getElementsByClassName("portafolio-contents");
    for (i = 0; i < portafoliocontent.length; i++) {
      portafoliocontent[i].style.display = "none";
    }
  
    // Get all elements with class="portafoliolinks" and remove the class "active"
    portafoliolinks = document.getElementsByClassName("portafolio-links");
    for (i = 0; i < portafoliolinks.length; i++) {
      portafoliolinks[i].className = portafoliolinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(portafolioTab).style.display = "block";
    evt.currentTarget.className += " active";
  }