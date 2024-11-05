const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
    '#c084fc', '#c084fc', '#c77cf2', '#c77cf2', ' #cd73e8', ' #cd73e8', '#d26bdc', '#d26bdc', '#d662d1', '#d662d1', '#da5ac5', '#da5ac5', '#dc51b8', '#dc51b8', '#de48ac', '#de48ac', '#de409f', '#de409f', '#de3791', '#de3791', '#dd2f84', '#dd2f84', '#db2777', '#db2777'
]

circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
    coords.x = e.clientX;
    coords.y = e.clientY;

});

function animateCircles() {

    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
    });

    requestAnimationFrame(animateCircles);
}


document.addEventListener("DOMContentLoaded", () => {
    animateCircles();
})
