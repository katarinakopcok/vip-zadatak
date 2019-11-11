/* Nav toggle */
$(".hamburger").click(function () {
    $(this).toggleClass("active");
    $(".mobile-menu").toggle();
});

/* Img toggle */
var img = document.getElementById("img-area");

function black() {
    img.src = "img/xs-black.png"
}

function gray() {
    img.src = "img/xs-gray.png"
};

function yellow() {
    img.src = "img/xs-yellow.png"
};
/* Select option */
$("select").change(function () {
    $(this).find("option:selected").each(function () {
        var optionValue = $(this).attr("value");
        if (optionValue) {
            $(".box").not("." + optionValue).hide();
            $("." + optionValue).show();
        } else {
            $(".box").hide();
        }
    });
}).change();
