function setCSS(CSSstyle){
    var style = document.getElementsByTagName('link')[0];
    if(CSSstyle == "1"){
        style.setAttribute('href', "style1tabs.css");
        localStorage.setItem("style", "1");        
    }
    else if(CSSstyle == "2"){
        style.setAttribute('href', "style2tabs.css");
        localStorage.setItem("style", "2");
    }
}

window.onload = function(){
    var getstyle = localStorage.getItem("style");
    setCSS(getstyle);
}
