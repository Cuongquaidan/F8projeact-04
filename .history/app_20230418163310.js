const btnBooking = document.querySelector(".booking__btn");
const header = document.querySelector(".header");
const template = `
<div class="modal__wrap modal__wrap--active">
<div class="booking__modal">
    
</div>
<div class="modal">
    <i class='bx bx-window-close modal__close'></i>
    <p class="modal__contents">Dell co con cc j ca</p>
</div>
</div>
`;
const body = document.body;
btnBooking.addEventListener("click", function (e) {
    header.insertAdjacentHTML("beforeend", template);
    modal.classList.add("");
    body.style.height = "100vh";
    body.style.overflow = "hidden";
    console.log(body.style.height);
});
body.addEventListener("click", function (e) {
    if (e.target.matches(".modal__close")) {
        const modalClose = document.querySelector(".modal__close");
    }
});
