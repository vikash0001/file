function toggle() {
    var list = document.querySelectorAll(".burger-slice");

    if (list[0].style.transform == "translateY(0px)")
     {
        list[0].style.transform = "translateY(7px)"
        list[2].style.transform = "translateY(-7px)"
     }
    else
     {
        list[0].style.transform = "translateY(0px)"
        list[2].style.transform = "translateY(0px)"
     }

}
toggle();
var button = document.querySelector('.menu-toggler');
button.addEventListener('click',toggle)