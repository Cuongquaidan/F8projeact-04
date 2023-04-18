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
const body = document.body;
btnBooking.addEventListener("click", function (e) {
    header.insertAdjacentHTML("beforeend", template);
    body.style.height = "100vh";
    body.style.overflow = "hidden";
    console.log(body.style.height);
});
body.addEventListener("click", function (e) {
    if (e.target.matches(".modal__close")) {
        const modalClose = document.querySelector(".modal__close");
        const modal = modalClose.parentNode.parentNode;
        modal.parentNode.removeChild(modal);
        body.style.height = "auto";
        body.style.overflow = "auto";
    } else if (e.target.matches(".modal__wrap")) {
        console.log(e.target);
        e.target.parentNode.removeChild(e.target);
        body.style.height = "auto";
        console.log(body.style.height);
        body.style.overflow = "auto";
    }
});
