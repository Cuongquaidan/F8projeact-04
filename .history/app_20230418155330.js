const btnBooking = document.querySelector(".booking__btn");
const modal = document.querySelector(".modal__wrap");
btnBooking.addEventListener("click", function () {
    modal.classList.add("modal__wrap--active");
});
