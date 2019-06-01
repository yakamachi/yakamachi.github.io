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
            e.style.height = e.contentWindow.document.body.scrollHeight + "px";
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
        e.style.height = document.body.clientHeight;//e.contentWindow.document.body.scrollHeight + "px";
})
}

function backroute(){
    if(stack.length !== 0)
        stack.pop();
    refreshroute();
}	