document.querySelector('[data-toggle="slide-collapse"]').addEventListener('click', function () {
    $navMenuCont = document.querySelector(document.querySelector(this).data('target'));
$navMenuCont.animate({
    'width': 'toggle'
}, 350);
document.querySelector(".menu-overlay").fadeIn(500);
});
document.querySelector(".menu-overlay").click(function (event) {
document.querySelector("[data-toggle='slide-collapse']").trigger("click");
document.querySelector(".menu-overlay").fadeOut(500);
});