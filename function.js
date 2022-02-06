function changeCSS(node){   
    var style = document.getElementsByTagName('link')[0];

    if(style.getAttribute('href') == 'style1homepage.css'){
        style.setAttribute('href', 'style2homepage.css');
        localStorage.setItem("style", "2");
    }
    else{
        style.setAttribute('href', 'style1homepage.css');
        localStorage.setItem("style", "1");
    }

}

function setCSS(CSSstyle){
    var style = document.getElementsByTagName('link')[0];
    if(CSSstyle == "1"){
        style.setAttribute('href', "style1homepage.css");
        localStorage.setItem("style", "1");        
    }
    else if(CSSstyle == "2"){
        style.setAttribute('href', "style2homepage.css");
        localStorage.setItem("style", "2");
    }
}

function openNav() {
    document.getElementById("nav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("nav").style.width = "0";
  }


window.onload = function(){
    var getstyle = localStorage.getItem("style");
    setCSS(getstyle);
}
