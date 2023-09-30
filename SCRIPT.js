var btn = document.getElementById("btn")
var light = document.getElementById("light")

function toggleBtn(){
    btn.classList.toggle("active");
    light.classList.toggle("on");
}

var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme")
}