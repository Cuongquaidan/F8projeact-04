const btnBooking = document.querySelector(".booking__btn");
const header = document.querySelector(".header");
const template = `
<div class="modal__wrap ">
<div class="booking__modal">
    
</div>
<div class="modal">
    <i class='bx bx-window-close modal__close'></i>
    <p class="modal__contents">Dell co con cc j ca</p>
</div>
</div>
`;
const modal = document.querySelector(".modal__wrap");
const body = document.body;
btnBooking.addEventListener("click", function (e) {
    header.insertAdjacentHTML("beforeend", template);
    modal.classList.add("modal__wrap--active");
    body.style.height = "100vh";
    body.style.overflow = "hidden";
    console.log(body.style.height);
});
