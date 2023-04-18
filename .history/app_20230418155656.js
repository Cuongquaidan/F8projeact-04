const btnBooking = document.querySelector(".booking__btn");
const modal = document.querySelector(".modal__wrap");
const body = document.body;
btnBooking.addEventListener("click", function () {
    modal.classList.add("modal__wrap--active");
    console.log(modal.className);
});
