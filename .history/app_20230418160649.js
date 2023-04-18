const btnBooking = document.querySelector(".booking__btn");
const modal = document.querySelector(".modal__wrap");
const body = document.body;
btnBooking.addEventListener("click", function (e) {
    modal.classList.add("modal__wrap--active");
    body.style.height = "100px";
    console.log(body.style.height);
});
