let icon = document.getElementById("icon");

icon.onclick = function() {

    document.body.classList.toggle("dark-theme");
    document.querySelector(".header").style.transition = "all 1s";

    if (document.body.classList.contains("dark-theme")) {
        icon.src = "img/sol.svg";
    } else {
        icon.src = "img/luna.svg";        
    }
}


