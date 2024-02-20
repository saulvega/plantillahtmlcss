
$(document).ready(function () {
    $(".filter-item").click(function(){
        const value = $(this).attr("data-filter")
        if (value == "all"){
            $(".post-box").show("1000")
        }
        else{
            $(".post-box")
            .not("." + value)
            .hide("1000");
            $(".post-box")
            .filter("." + value)
            .show("1000")
        }
    });
    $(".filter-item").click(function(){
        $(this).addClass("active-filter").siblings().removeClass("active-filter");
    });
});

let head = document.querySelector(".head")

window.addEventListener("scroll", () => {
    head.classList.toggle("shadow", window.scrollY > 0);
})