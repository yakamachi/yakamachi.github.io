
window.addEventListener("load", function () {
    window.cookieconsent.initialise({
        "palette": {
            "popup": {
                "background": "#1d8a8a"
            },
            "button": {
                "background": "#62ffaa"
            }
        },
        "content": {
            "message": "Strona wykorzystuje pliki Cookies.",
            "dismiss": "Zrozumiałem",
            "link": "Dowiedz się więcej"
        }
    })
});


var stack = ["main"];
//setup

function onload(){
var sites = document.getElementsByTagName("iframe");


Array.from(sites).forEach(function(e,i){
    if (e.id !== "main")
        e.style.display = "none";
})

//Array.from(document.getElementsByTagName("div")).forEach(function(A,i){if (i<2 || i>=document.getElementsByTagName("div").length-2) A.style.display="none"});

document.getElementById("root").style.display="block"
iframeLoaded();
}
  function iframeLoaded() {
      var iFrameID = document.getElementsByTagName('iframe');
      Array.from(iFrameID).forEach(function(e,i){
      if(e) {
            // here you can make the height, I delete it first, then I make it again
            e.style.height= "";
            e.style.height = ($(window).height() - $("#menu").height())+"px";//e.contentWindow.document.body.scrollHeight*10 + "px";
      }
      })
  }



function pushroute(route){
    stack.pop()
    stack.push(route);
    refreshroute();
}

function refreshroute(){
    var sites = document.getElementsByTagName("iframe");
    Array.from(sites).forEach(function(e,i){
    if (e.id !== stack[0])
        e.style.display = "none";
    else
        e.style.display = "";
        e.style.height = ($(window).height() - $("#menu").height())+"px";//e.contentWindow.document.body.scrollHeight*10 + "px";
})
}

function backroute(){
    if(stack.length !== 0)
        stack.pop();
    refreshroute();
}	