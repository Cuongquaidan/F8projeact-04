const btnBooking = document.querySelector(".booking__btn");
const modal = document.querySelector(".modal__wrap");
const body = document.body;
btnBooking.addEventListener("click", function (e) {
    modal.classList.add("modal__wrap--active");
    body.style.height = "100vh";
    body.style.overflow = "hidden";
    console.log(body.style.height);
});
